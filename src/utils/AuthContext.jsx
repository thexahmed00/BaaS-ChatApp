import { createContext, useState,useEffect } from "react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { account } from "../AppwriteConfig";
import { ID } from "appwrite";

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
            const accountDetails = await account.get();
            
            console.log("logged: ",userSession)
            setUser(accountDetails);
            nav('/landing');
        }catch(err){
            console.log(err)
        }
    }

    //handle logout
    const handleLogout = async () => {
        try{
            await account.deleteSession('current');
            setUser(null);
            nav('/landing');
        }catch(err){
            console.log(err)
        }
    }

    //handle register
    const handleRegister = async (e,credentials) => {
        e.preventDefault();
        if(credentials.password !== credentials.password2){
            alert("passwords do not match")
            return;
        }
        
        try{
            const userSession = await account.create(ID.unique(), credentials.email, credentials.password, credentials.name);
            console.log("userSession Register: ",userSession)
            setUser(userSession);
            nav('/landing');
        }catch(err){
            console.log(err)
        }
    }

    const contextData = {
        user,
        handleLogin,
        handleLogout,
        handleRegister
    }

    //return the provider
    return <AuthContext.Provider value={contextData}>

        {loading ? <h1>Loading...</h1> : children }
         
        </AuthContext.Provider>;

}
export const useAuth = () =>{return useContext(AuthContext)};
export default AuthContext;