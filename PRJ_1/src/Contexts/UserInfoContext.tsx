import React, { ReactNode, createContext, useState } from "react";

interface logStatus{
    isLoggedIn:boolean;
    setLoggedin:React.Dispatch<React.SetStateAction<boolean>>;
}
interface USER_UID{
    USER_UID : string;
}
interface username{
    username:string
    setUserName:React.Dispatch<React.SetStateAction<string>>;
}
interface popUps {
    showConnectionsPopUp:boolean;
    setshowConnectionPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ExplorePage_Content{
    ExploreSubPage:string;
    setExploreSubPage:React.Dispatch<React.SetStateAction<string>>;
}
interface Preview{
    showPreview:boolean
    setPreview:React.Dispatch<React.SetStateAction<boolean>>;
    D : object;
    setD : React.Dispatch<React.SetStateAction<object>>;
}
interface Fetched{
    FetchedData:Array<object>;
    setFetchData:React.Dispatch<React.SetStateAction<Array<object>>>;
}

interface UserInfoContextType extends 
logStatus,
USER_UID,
username,
popUps,
ExplorePage_Content,
Fetched,
Preview
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
    const [username,setUserName] = useState(localStorage.getItem('username') || "username") ; 

    const [showConnectionsPopUp,setshowConnectionPopUp] = useState(false);

    const [ExploreSubPage,setExploreSubPage] = useState("posts")

    const [showPreview,setPreview] = useState(false);
    const [D,setD] = useState({})

    const [FetchedData,setFetchData] = useState<Array<object>>([]);

    return (
        <UserInfoContext.Provider
            value = {{
                isLoggedIn,
                username,
                setUserName,
                setLoggedin,
                USER_UID,
                showConnectionsPopUp,setshowConnectionPopUp,
                ExploreSubPage,setExploreSubPage,
                showPreview,setPreview,
                D,setD,
                FetchedData,setFetchData
            }}
         >
            {children}
         </UserInfoContext.Provider>
    )
}

export { UserInfoContext , UserInfoContextProvider}