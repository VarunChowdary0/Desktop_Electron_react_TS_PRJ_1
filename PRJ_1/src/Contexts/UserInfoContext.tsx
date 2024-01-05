import React, { ReactNode, createContext, useState } from "react";

interface logStatus{
    isLoggedIn:boolean;
    setLoggedin:React.Dispatch<React.SetStateAction<boolean>>;
}
interface USER_UID{
    USER_UID : string;
}

interface UserInfoContextType extends 
logStatus,
USER_UID
{}


//--------------------------------
interface UserInfoContextProviderProps{
    children : ReactNode;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);


const UserInfoContextProvider:React.FC<UserInfoContextProviderProps> = ({children}) =>{
    
    const loginStateLocal = localStorage.getItem("isLoggedIN");
    const [isLoggedIn,setLoggedin] = useState( 
        loginStateLocal ? JSON.parse(loginStateLocal) : false
    );

    const USER_UID = localStorage.getItem('USER_UID') || "N-A";


    return (
        <UserInfoContext.Provider
            value = {{
                isLoggedIn,
                setLoggedin,
                USER_UID
            }}
         >
            {children}
         </UserInfoContext.Provider>
    )
}

export { UserInfoContext , UserInfoContextProvider}