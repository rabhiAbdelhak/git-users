import { createContext, useContext, useState, useEffect , useCallback} from "react";
import { defaultUser } from "./defaultData/defaultUser";
import { defaultRepos } from "./defaultData/defaultRepos";
import { defaultFllowers } from "./defaultData/defaultFllowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

//use Context
export const useGithubContext = () => {
  return useContext(GithubContext);
};

// Provider

export const GithubContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [repos, setRepos] = useState(defaultRepos);
  const [followers, setFollowers] = useState(defaultFllowers);
  const [loading, setloading] = useState(false);
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ show: false, message: "" });


  const getRequests = useCallback(async () => {
    try {
      const { data } = await axios(`${rootUrl}/rate_limit`);
      let { used } = data.resources.core;
      setRequests(used);
      if (used >= 60) {
        editError(
          true,
          "you deppased the hourly rate of requests ! try next hour "
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  const editError = (show = false, msg = '') => {
    setError({show, msg});
  };

  //number of request on each user state change
  useEffect(() => {
    getRequests();
  }, [user, getRequests]);

  const fetchUserData = async (username) => {
    setloading(true);
    editError(false, '');
    try {
      //fetch the user
      const user = await axios.get(`${rootUrl}/users/${username}`);
      if (user.data) {
        setUser(user.data);
        const {followers_url, repos_url} = user.data;
        await Promise.allSettled([
                           axios(`${repos_url}?per_page=100`),
                           axios(`${followers_url}?per_page=100`)
                        ]).then(results => {
                            const [repos, followers] = results;
                            
                            if(repos.status === 'fulfilled' && followers.status ==='fulfilled'){
                                //followers
                                setFollowers(followers.value.data);
                                //repos
                                setRepos(repos.value.data);
                            }
                        })
        
          setloading(false);
          editError(false, '');
      }
    }catch (err) {
      editError(true , "The user you are searching for doesn't exist !");
      setloading(false);
    }
  };

  return (
    <GithubContext.Provider
      value={{ user, repos, followers, fetchUserData, loading, requests, error }}
    >
      {children}
    </GithubContext.Provider>
  );
};
