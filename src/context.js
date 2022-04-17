import {createContext, useContext, useState} from "react";
import {defaultUser} from './defaultData/defaultUser';
import {defaultRepos } from './defaultData/defaultRepos';
import {defaultFllowers} from './defaultData/defaultFllowers';
import axios from 'axios';


const rootUrl = 'https://api.github.com';

const GithubContext = createContext(); 

//use Context
export const useGithubContext = () => {
    return useContext(GithubContext);
}

// Provider 

export const GithubContextProvider = ({children}) => {
    const [user, setUser] = useState(defaultUser);
    const [repos, setRepos] = useState(defaultRepos);
    const [followers, setFollowers] = useState(defaultFllowers);
    const [loading , setloading] = useState(false);
    
    const fetchUserData = async (username) =>{
        setloading(true)
        try{
         //fetch the user
         const user = await axios.get(`${rootUrl}/users/${username}`);
         if(user.data){
             setUser(user.data)
             try{
                const {data : followers} = await axios.get(`${rootUrl}/users/${username}/followers`);
                const {data : repos} = await axios.get(`${rootUrl}/users/${username}/repos`);
                setFollowers(followers);
                setRepos(repos);
                setloading(false);
             }catch(err){
                 console.log(err)
             }
         }
        }catch(err){

        }
    }

    return <GithubContext.Provider value={{user, repos, followers, fetchUserData, loading}}>
        {children}
    </GithubContext.Provider>
}