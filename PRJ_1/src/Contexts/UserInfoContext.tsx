import React, { Children, ReactNode, createContext, useState } from "react";


interface UserInfoContextType{
    isLoggedIn:boolean;
    setLoggedin:React.Dispatch<React.SetStateAction<boolean>>;
}


//--------------------------------
interface UserInfoContextProviderProps{
    children : ReactNode;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);


const UserInfoContextProvider:React.FC<UserInfoContextProviderProps> = ({children}) =>{
    
    const [isLoggedIn,setLoggedin] = useState(false);

    return (
        <UserInfoContext.Provider
            value = {{
                isLoggedIn,
                setLoggedin,
            }}
         >
            {children}
         </UserInfoContext.Provider>
    )
}

export { UserInfoContext , UserInfoContextProvider}