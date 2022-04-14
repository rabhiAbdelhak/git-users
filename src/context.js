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
    const [fellowers, setFellowers] = useState(defaultFllowers);

    return <GithubContext.Provider value={{user, repos, fellowers}}>
        {children}
    </GithubContext.Provider>
}