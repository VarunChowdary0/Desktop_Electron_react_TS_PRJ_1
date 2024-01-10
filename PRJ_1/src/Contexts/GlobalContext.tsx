import React, { ReactNode, createContext ,useState } from "react";
import Linked_in from "../icons/Linked_in";
import Git_hub from "../icons/Git_hub";
import Leet_Code from "../icons/Leet_Code";
import Code_Chef from "../icons/Code_Chef";
import Hacker_Rank from "../icons/Hacker_Rank";
import GeekforGeeks from "../icons/GeekforGeeks";
import Spoj from "../icons/Spoj";
interface Rout{
    rout:string;
    setRout : React.Dispatch<React.SetStateAction<string>>
}
interface Profile{
    name : string;
    setName : React.Dispatch<React.SetStateAction<string>>;

    Skills : Array<string>;
    updateSkills: React.Dispatch<React.SetStateAction<Array<string>>>;

    occupation : string;
    setOccupation : React.Dispatch<React.SetStateAction<string>>;
    
    showChangeOccupation:boolean
    setChangeOccupationShow: React.Dispatch<React.SetStateAction<boolean>>;

    profileLink : string;
    setProfile:React.Dispatch<React.SetStateAction<string>>;

    showNamePopup:boolean
    setNamePopupView: React.Dispatch<React.SetStateAction<boolean>>;

    showAddSkillPopUp:boolean;
    setAddSkillPopupView:React.Dispatch<React.SetStateAction<boolean>>;

    showChangeProfilePopUp:boolean;
    setChangeProfileShow:React.Dispatch<React.SetStateAction<boolean>>;
}
interface About{
    about_me : string
    setAboutME : React.Dispatch<React.SetStateAction<string>>;
}
interface EducationDetails{
    EducationDetails : Array<object>;
    setEducationDetails : React.Dispatch<React.SetStateAction<Array<object>>>;

    showAddEduactionDetailPopup:boolean
    setShowEducationPopUp:React.Dispatch<React.SetStateAction<boolean>>;
}
interface InternshipDetails{
    InternshipINFO:Array<object>;
    setIntenshipInfo:React.Dispatch<React.SetStateAction<Array<object>>>

    showIntershipAdder:boolean
    setInterAdderShow:React.Dispatch<React.SetStateAction<boolean>>;
}
interface mini_PopUp{
    whatHapped : string;
    setWhatHappended : React.Dispatch<React.SetStateAction<string>>;
    
    toWho : string;
    setToWho : React.Dispatch<React.SetStateAction<string>>;
    
    show : boolean;
    setShow : React.Dispatch<React.SetStateAction<boolean>>;

    handlePopUp: (what: string, Who: string) => void;
}
interface ProjectDetails{
    ProjectDetails:any;
    setProjects :React.Dispatch<React.SetStateAction<Array<object>>>;

    showAddProjectPopUp:boolean
    setShowAddProjectPOPup:React.Dispatch<React.SetStateAction<boolean>>;
}
interface CodingPlatform{
    icons_Store: Array<React.ReactElement<any, any>>;

    Links : object;
    SET_LINKS:React.Dispatch<React.SetStateAction<object>>;

    showEdiatPlatForm : boolean,
    setShowEditPlatform:React.Dispatch<React.SetStateAction<boolean>>;
}
interface ContactInfo{
    showContactPopup:boolean
    setshowContactPopup:React.Dispatch<React.SetStateAction<boolean>>;

    email:string;
    setEmail:React.Dispatch<React.SetStateAction<string>>

    phoneNumber:string;
    setPhoneNum:React.Dispatch<React.SetStateAction<string>>
    
    SocialMediaLinks:any;
    setSocialMediaLinks : React.Dispatch<React.SetStateAction<object>>;
}
interface ProfileUI_colors{
    AllColors : any;
    coverBG_color:string;
    setCoverBG : React.Dispatch<React.SetStateAction<string>>;
    SkillBG_col:string;
    setSkillBG : React.Dispatch<React.SetStateAction<string>>;
    AboutBG:string;
    setAboutBG : React.Dispatch<React.SetStateAction<string>>;
    isDarkMode : boolean;
    setDarkMode : React.Dispatch<React.SetStateAction<boolean>>;
    
    WholeLoader : boolean;
    setWholeLoader : React.Dispatch<React.SetStateAction<boolean>>;

    doISync:boolean
    setSync:React.Dispatch<React.SetStateAction<boolean>>;

}


interface GlobalContextType extends Profile,About,EducationDetails,mini_PopUp,Rout,
InternshipDetails,ProjectDetails,CodingPlatform,ContactInfo,ProfileUI_colors{}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
    children : ReactNode;
}

const GlobalContextProvider: React.FC <GlobalContextProviderProps> = ({children}) =>{
    const [rout,setRout] = useState('/')
    //-----------------------------------------------
    const [whatHapped,setWhatHappended] = useState("");
    const [toWho,setToWho] = useState("")
    const [show,setShow] = useState(false)

    const handlePopUp = (what:string,Who:string) =>{
        setWhatHappended(what)
        setToWho(Who)
        setShow(true)
        setTimeout(()=>{
            setShow(false);
            setWhatHappended("")
            setToWho("")
        },2000)
    }


    //------------| Profile | ---------------
    const [name,setName] = useState(localStorage.getItem('myName')||"MY NAME");
    const [occupation,setOccupation] = useState(localStorage.getItem('myOccupation')||"MY OCCUPATION");
    const storedSkills = localStorage.getItem("mySkills");
    const defaultSkills = [
    'Skill-1','Skill-2','Skill-3','Skill-4','Skill-5','Skill-6','Skill-7'
    ];
    const [showNamePopup,setNamePopupView] = useState<boolean>(false)
    const [showAddSkillPopUp,setAddSkillPopupView] = useState<boolean>(false)
    const [showChangeProfilePopUp,setChangeProfileShow] = useState<boolean>(false);
    const [showChangeOccupation,setChangeOccupationShow] = useState<boolean>(false);
    const [Skills, updateSkills] = useState(
    storedSkills ? JSON.parse(storedSkills) : defaultSkills
    );
    const [profileLink,setProfile] = useState(localStorage.getItem('myPicUrl')||
    "https://blog-it-backend-sandy.vercel.app/images/896313-56067455-5-post.png")
    //------------|  About | ---------------
    const [about_me,setAboutME] = useState(localStorage.getItem("about_me")|| 
                    "A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level software Engineer position. Ready to help the team achieve company goals.")
    //------------| Education | ---------------
    const Stored_Education_info= localStorage.getItem('EducationDetails')
    const default_education =
    [
        {
            institue_name : "INSTITUTE OF ABC ENGINEERING",
            institue_site : "https://www.Institite_ABC.com/",
            branch : "ABC ENGINNERING",
            Grade : "x.x",
            address : "MY INSTITUTE ADDRE",
            time_of_study : "2022-11 to 2026-05"
        },
        {
            institue_name : "XYZ COLLAGE",
            institue_site : "https://www.XYZ_COLLAGE.com",
            branch : "X Y X",
            Grade : "96% [ 960 / 1000 ]",
            address : "MY COLLAGE ADDRESS",
            time_of_study : "2020-03 to 2022-05"
        },
        {
            institue_name : "HAPPY LEARN SCHOOL",
            institue_site : "https://HAPPY_SCHOOLS.com/",
            branch : "SSC 10TH BOARD",
            Grade : "A++",
            address : "MY SCHOOL ADDRESS",
            time_of_study : "2011 to  2020"
        }
    ]
    const [EducationDetails , setEducationDetails] = useState(
        Stored_Education_info ? JSON.parse(Stored_Education_info) : default_education
    )
    const [showAddEduactionDetailPopup,setShowEducationPopUp] = useState(false) 
    //------------| Internship | ---------------
    const [showIntershipAdder,setInterAdderShow] = useState(false);
    const saved_internInfo = localStorage.getItem("InternshipDetails");
    const defaultInterShipInfo =  [
        {
            Title : "DATA SCIENCE",
            at : "NSIC",
            CertificateLink :'https://drive.google.com/file/d/1LueRzoYRzWVnaRvNlaxs5A8vttTscctX/view',
            work_time : "2023-07 to 2023-09",
            description: " Internship on Data science - machine learning and building an rainfall prediction model"
        },
    ]
    const [InternshipINFO,setIntenshipInfo] = useState(
        saved_internInfo ? JSON.parse(saved_internInfo) : defaultInterShipInfo
    )  
    //------------| Projects | ---------------
    const default_prjs:Array<object> = [
        { 
            Title : "BlogIT",
            link : "https://blog-it-ten.vercel.app/",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/BlogIT",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/blogITt_backend",
            description : "A social media platfrom, where you can blog an do post."
        },
        { 
            Title : "Chat-Room",
            link : "https://chat-room-kohl-pi.vercel.app/",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/Chat-client",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/Chat-Server",
            description : "A real time chat application with new features ( made with web sockets )"
        },
        { 
            Title : "Peek.. a.. boo....",
            link : "https://video-calling-web-rtc.vercel.app/",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/WEB_RTC_FRONTEND",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/WEB_RTC_SERVER",
            description : "A video calling application makes connections with stranges ( made with web RTC )"
        },
        {
            Title : "Face Recognition",
            link : "https://github.com/VarunChowdary0/face_detection_python",
            git_hub_frontEnd : "",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/face_detection_python",
            description : "Python project uses machine learning to recognise people."
        },
        {
            Title : "More Mini projects",
            link : "https://github.com/VarunChowdary0/",
            git_hub_frontEnd : "",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/",
            description : "6+ mini projects on my git hub profile."
        }
        ]
    const saved_prjs = localStorage.getItem("ProjectDetails") ;
    const [ProjectDetails , setProjects] =  useState(
         saved_prjs ? JSON.parse(saved_prjs) : default_prjs
    )
    const [showAddProjectPopUp,setShowAddProjectPOPup] = useState(false)
     
    //------------| Coding Platform | ---------------
        const [showEdiatPlatForm,setShowEditPlatform] = useState(false);
        const icons_Store = [<Linked_in/>,<Git_hub/>,<Leet_Code/>,<Code_Chef/>,<Hacker_Rank/>,<GeekforGeeks/>,<Spoj/>]
        const defaultLinks = 
        {
            Linked_in : {
                      link:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/",
                      icon: 0
                        },
            Git_hub : {
                      link:"https://github.com/VarunChowdary0",
                      icon: 1
                    },
            Leet_Code : {
                      link : "https://leetcode.com/Varun_chowdary99/",
                      icon: 2
            },
            Code_Chef : {
                      link : "https://www.codechef.com/users/varun9392",
                      icon : 3,
            },
            Hacker_Rank : {
                      link : "",
                      icon : 4
            },
            GeekforGeeks : {
                      link : "",
                      icon : 5
            },
            Spoj : {
                      link : "",
                      icon : 6
            },
            Leet__Code :{
                link : "k",
                icon: 2
            }
        }
        const SavedLinks = localStorage.getItem("SavedCODE_Links");
        const [Links,SET_LINKS] = 
        useState(SavedLinks ? JSON.parse(SavedLinks) : defaultLinks);
       
    //------------| Contact Info | ---------------

        const [showContactPopup,setshowContactPopup] = useState(false)
        const [email,setEmail] = useState(localStorage.getItem("MyEmail")||"saivarunchowdarypoludasu4248@gmail.com")
        const [phoneNumber,setPhoneNum] = useState(localStorage.getItem("MyPhone")||"9392704248")
        const def_SM_links = {
            instagram:"https://www.instagram.com/saivarunchowdarypoludasu",
            facebook:"https://www.facebook.com/saivarunchowdary.poludasu",
            twitter:"https://twitter.com/SaiPoludasu",
            linkedin:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/"
        }
        const saved_SM_Links = localStorage.getItem("SM_Links");
        const [SocialMediaLinks , setSocialMediaLinks] = useState(
            saved_SM_Links ? JSON.parse(saved_SM_Links) : def_SM_links
        ) 
    //------------| ProfileUI_colors | ---------------
        const AllColors = ['green','red','blue','yellow','pink','violet','orange','teal','purple']
        const [coverBG_color,setCoverBG] = useState<string>(localStorage.getItem("coverBG_color")||AllColors[0])
        const [SkillBG_col,setSkillBG] = useState<string>(localStorage.getItem("SkillBG_col")||AllColors[5])
        const [AboutBG,setAboutBG] = useState<string>(AllColors[2])
        
        const localDarkStatus = localStorage.getItem("isDark");
        const [isDarkMode,setDarkMode] = useState<boolean>(
            localDarkStatus ? JSON.parse(localDarkStatus) : false
        )

        const [WholeLoader,setWholeLoader] = useState(false);

        const [doISync,setSync] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                rout,setRout,
                name,setName,
                showNamePopup,
                setNamePopupView,
                Skills,updateSkills,
                showAddSkillPopUp,setAddSkillPopupView,
                occupation,setOccupation,
                showChangeOccupation,setChangeOccupationShow,
                profileLink,setProfile,
                showChangeProfilePopUp,setChangeProfileShow,
                about_me,setAboutME,
                EducationDetails,setEducationDetails,
                showAddEduactionDetailPopup,setShowEducationPopUp,
                InternshipINFO,setIntenshipInfo,
                showIntershipAdder,setInterAdderShow,
                ProjectDetails,setProjects,
                showAddProjectPopUp,setShowAddProjectPOPup,
                icons_Store,
                Links,SET_LINKS,
                showEdiatPlatForm,setShowEditPlatform,
                email,setEmail,
                phoneNumber,setPhoneNum,
                SocialMediaLinks,setSocialMediaLinks,
                showContactPopup,setshowContactPopup,
                AllColors,
                coverBG_color,setCoverBG,
                SkillBG_col,setSkillBG,
                AboutBG,setAboutBG,
                whatHapped,setWhatHappended,
                toWho,setToWho,
                show,setShow,
                handlePopUp,
                isDarkMode,setDarkMode,
                WholeLoader,setWholeLoader,
                doISync,setSync
            }}>
                {children}
            </GlobalContext.Provider>
    )
}

export { GlobalContext , GlobalContextProvider}