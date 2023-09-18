import { createContext, useState,useEffect } from "react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { account } from "../AppwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const nav = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getuserOnLoad();
        
    },[])

    //get the user on load
    const getuserOnLoad = async () => {
        try{
            const userSession = await account.get();
            console.log("userSession: ",userSession)
            setUser(userSession);
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }


    //handle login
    const handleLogin = async (e,credentials) => {
        e.preventDefault();
        try{
            const userSession = await account.createEmailSession(credentials.email, credentials.password);
            console.log("logged: ",userSession)
            setUser(userSession);
            nav('/');
        }catch(err){
            console.log(err)
        }
    }


    const contextData = {
        user,
        handleLogin
    }

    //return the provider
    return <AuthContext.Provider value={contextData}>

        {loading ? <h1>Loading...</h1> : children }
         
        </AuthContext.Provider>;

}
export const useAuth = () =>{return useContext(AuthContext)};
export default AuthContext;