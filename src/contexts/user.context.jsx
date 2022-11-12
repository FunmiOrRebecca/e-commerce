import { createContext } from "react";
import { useState, useEffect } from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from "../utils/firebase";

export const UserContext = createContext(
    {
        user: 'null',
        setCurrentUSer: () => {}
    }
)


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
   
   useEffect(() => {
   const check = () => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
    })
    return unsubscribe;
   };
   check();
   }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}