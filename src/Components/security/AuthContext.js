// Create a context

import {createContext, useContext, useState } from "react";

export const AuthContxt = createContext();
export const useAuth = () => useContext(AuthContxt);
//put somme state in context

//share the created context with other components

export default function AuthProviders({children}) {
    const [number, setNumber] = useState(10);
    const[isAuthenticated,setAuthenticated] = useState(false);
    setInterval(()=>setNumber(number+1),10);
    function login(username, password) {
        if (username === "Swaminandan" && password === "swamin") {
            console.log("successfully logged in");
            setAuthenticated(true);
            return true;
          } else {
            setAuthenticated(false);
            //console.log();
            return false;
            
          }
    }
    const valueToBeShared = {number, isAuthenticated, setAuthenticated,login};
    return(
        <AuthContxt.Provider value = {valueToBeShared}>
            {children}
        </AuthContxt.Provider>
    )
}
