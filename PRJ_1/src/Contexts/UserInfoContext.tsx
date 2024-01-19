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

    showOPtions:string
    setOptions:React.Dispatch<React.SetStateAction<string>>;
}
interface Fetched{
    FetchedData:Array<object>;
    setFetchData:React.Dispatch<React.SetStateAction<Array<object>>>;
}
interface Stats{
    UserStats:object;
    setUserStats:React.Dispatch<React.SetStateAction<object>>;

    userConnections : Array<object>;
    setuserConnections :React.Dispatch<React.SetStateAction<Array<object>>>;

    CRD_S : number ;
    setCRD_S : React.Dispatch<React.SetStateAction<number>>;

    ConnectionUIDs : Array<string>;
    setConnectionUIDs : React.Dispatch<React.SetStateAction<Array<string>>>;
}

interface ViewOther{
    
    isSeeingOther:boolean;
    setIsSeeingOther:React.Dispatch<React.SetStateAction<boolean>>;

    ViewerInfo : object;
    setViewer : React.Dispatch<React.SetStateAction<object|any>>;
}
interface UserInfoContextType extends 
logStatus,
USER_UID,
username,
popUps,
ExplorePage_Content,
Fetched,
Preview,
Stats,
ViewOther
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

    const [showOPtions,setOptions] = useState<string>("");


    const [showPreview,setPreview] = useState(false);
    const [D,setD] = useState({})

    const [FetchedData,setFetchData] = useState<Array<object>>([]);

    const [UserStats,setUserStats] = useState<object>({});

    const [userConnections,setuserConnections] = useState([{}]);

    const [ CRD_S,setCRD_S] = useState(0);

    const [ConnectionUIDs,setConnectionUIDs] = useState<Array<string>>([]);

    const [isSeeingOther,setIsSeeingOther] = useState<boolean>(false);

    const [ViewerInfo,setViewer]=useState<{
        name : string,
        profileLink : string,
        USER_UID : string}>({
            name : "",
            profileLink : "",
            USER_UID : ""
        });
    // Contrinbtons
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
                showOPtions,setOptions,
                D,setD,
                FetchedData,setFetchData,
                UserStats,setUserStats,
                userConnections,setuserConnections,
                CRD_S,setCRD_S,
                ConnectionUIDs,setConnectionUIDs,
                isSeeingOther,setIsSeeingOther,
                ViewerInfo,setViewer
            }}
         >
            {children}
         </UserInfoContext.Provider>
    )
}

export { UserInfoContext , UserInfoContextProvider}