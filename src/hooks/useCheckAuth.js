import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {
  
    let { status, login, logout } = useContext(AuthContext);

     
    useEffect(() => {
      
        onAuthStateChanged(FirebaseAuth, async (user) => {
            
            if(!user) return logout();

            const { email, uid } = user;

            login({ email, uid });
        })

    }, []);
  
    return status;
    
}
