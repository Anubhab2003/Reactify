import React from "react";
import UserContext from "./UserContext";

//Childer matlab jo bhi component is UserContextProvider ke andar aayega vo children me aayega
const UserContextProvider = ({children})=>{

    const [user,setUser]=React.useState(null);


    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
        
    );

};

export default UserContextProvider;