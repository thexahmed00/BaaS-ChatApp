import { createContext, useState,useEffect } from "react";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        
    },[])

    const contextData = {
        user
    }

    return <AuthContext.Provider value={contextData}>
        {loading ? <h1>Loading...</h1> : children }
         
        </AuthContext.Provider>;

}
export const useAuth = () =>{return useContext(AuthContext)};
export default AuthContext;