import React, { ReactNode, createContext ,useEffect,useState } from "react";
import Linked_in from "../icons/Linked_in";
import Git_hub from "../icons/Git_hub";
import Leet_Code from "../icons/Leet_Code";
import Code_Chef from "../icons/Code_Chef";
import Hacker_Rank from "../icons/Hacker_Rank";
import GeekforGeeks from "../icons/GeekforGeeks";
import Spoj from "../icons/Spoj";

interface Profile{
    name : string;
    setName : React.Dispatch<React.SetStateAction<string>>;
    Skills : Array<string>;
    updateSkills: React.Dispatch<React.SetStateAction<Array<string>>>;
    occupation : string;
    profileLink : string;
}
interface About{
    about_me : string
}
interface EducationDetails{
    EducationDetails : any;
}
interface InternshipDetails{
    InternshipINFO:any;
}
interface ProjectDetails{
    ProjectDetails:any;
}
interface CodingPlatform{
    Links : any;
}
interface ContactInfo{
    email:string;
    phoneNumber:string;
    SocialMediaLinks:any;
}
interface ProfileUI_colors{
    AllColors : any;
    coverBG_color:string;
    setCoverBG : React.Dispatch<React.SetStateAction<string>>;
    SkillBG_col:string;
    setSkillBG : React.Dispatch<React.SetStateAction<string>>;
    AboutBG:string;
    setAboutBG : React.Dispatch<React.SetStateAction<string>>;
}


interface GlobalContextType extends Profile,About,EducationDetails,
InternshipDetails,ProjectDetails,CodingPlatform,ContactInfo,ProfileUI_colors{}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
    children : ReactNode;
}

const GlobalContextProvider: React.FC <GlobalContextProviderProps> = ({children}) =>{

    //------------| Profile | ---------------
    const [name,setName] = useState(localStorage.getItem('myName')||"Sai Varun Chowdary Poludasu");
    const storedSkills = localStorage.getItem("mySkills");
    const defaultSkills = [
    'Web', 'React', 'Node', 'MongoDB', 'MERN', 'Python', 'Linux',
    'Java', 'Electron Js', 'Javascript', 'html', 'css',
    'Tailwind css', 'Machine Learning'
    ];

    const [Skills, updateSkills] = useState(
    storedSkills ? JSON.parse(storedSkills) : defaultSkills
    );
    const occupation = localStorage.getItem('myOccupation')||"Software Engineer"
    const profileLink = localStorage.getItem('myPicUrl')||
                        "https://blog-it-backend-sandy.vercel.app/images/896313-56067455-5-post.png"
    //------------|  About | ---------------
    const about_me = localStorage.getItem("About_me")
                    ||"A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level software Engineer position. Ready to help the team achieve company goals."
    //------------| Education | ---------------
    const EducationDetails = localStorage.getItem('EducationDetails')|| 
    [
        {
            institue_name : "INSTITUTE OF AREONAUTICAL ENGINEERING",
            institue_site : "https://www.iare.ac.in/",
            branch : "COMPUTER SCIENCE ENGINNERING",
            Grade : "8.6",
            address : "HYDERBAD , DHUNDIGAL",
            time_of_study : "2022-11 to 2026-05"
        },
        {
            institue_name : "KRISHNAVENI JUNIOR COLLAGE",
            institue_site : "https://www.justdial.com/Khammam/Krishnaveni-Jr-College-Kothagudem/9999P8742-8742-190823153217-L2L3_BZDET",
            branch : "M P C",
            Grade : "96% [ 960 / 1000 ]",
            address : "KOTHAGUDEM LAXSMIDEVI PALLY",
            time_of_study : "2020-03 to 2022-05"
        },
        {
            institue_name : "TRIVENI TALENT SCHOOL",
            institue_site : "https://trivenitalentschools.com/",
            branch : "SSC 10TH BOARD",
            Grade : "10",
            address : "KOTHAGUDEM LAXSMIDEVI PALLY",
            time_of_study : "2011 to  2020"
        }
    ]
    //------------| Internship | ---------------
    const InternshipINFO = localStorage.getItem("InternshipDetails") ||
    [
        {
            Title : "DATA SCIENCE",
            at : "NSIC",
            CertificateLink :'https://drive.google.com/file/d/1LueRzoYRzWVnaRvNlaxs5A8vttTscctX/view',
            work_time : "2023-07 to 2023-09",
            description: " Internship on Data science - machine learning and building an rainfall prediction model"
        },
    ]
    //------------| Projects | ---------------
    const ProjectDetails =  localStorage.getItem("ProjectDetails")  ||
     [
        { 
            Title : "BlogIT",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/BlogIT",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/blogITt_backend",
            description : "A social media platfrom, where you can blog an do post."
        },
        { 
            Title : "Chat-Room",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/Chat-client",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/Chat-Server",
            description : "A real time chat application with new features ( made with web sockets )"
        },
        { 
            Title : "Peek.. a.. boo....",
            git_hub_frontEnd : "https://github.com/VarunChowdary0/WEB_RTC_FRONTEND",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/WEB_RTC_SERVER",
            description : "A video calling application makes connections with stranges ( made with web RTC )"
        },
        {
            Title : "Face Reconition",
            git_hub_frontEnd : "",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/",
            description : "Python project uses machine learning to recognise people."
        },
        {
            Title : "More Mini projects",
            git_hub_frontEnd : "",
            git_hub_BackEnd : "https://github.com/VarunChowdary0/",
            description : "6+ mini projects on my git hub profile."
        }
        ]
    //------------| Coding Platform | ---------------
        const Links = {
            Linked_in : {
                      link:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/",
                      icon:<Linked_in/>
                        },
            Git_hub : {
                      link:"https://github.com/VarunChowdary0",
                      icon:<Git_hub/>
                    },
            Leet_Code : {
                      link : "https://leetcode.com/Varun_chowdary99/",
                      icon:<Leet_Code/>
            },
            Code_Chef : {
                      link : "https://www.codechef.com/users/varun9392",
                      icon : <Code_Chef/>,
            },
            Hacker_Rank : {
                      link : "",
                      icon : <Hacker_Rank/>
            },
            GeekforGeeks : {
                      link : "",
                      icon : <GeekforGeeks/>
            },
            Spoj : {
                      link : "",
                      icon : <Spoj/>
            }
        }
    //------------| Contact Info | ---------------
        const email = "saivarunchowdarypoludasu4248@gmail.com"
        const phoneNumber = "9392704248"
        const SocialMediaLinks = {
            instagram:"https://www.instagram.com/saivarunchowdarypoludasu",
            facebook:"https://www.facebook.com/saivarunchowdary.poludasu",
            twitter:"https://twitter.com/SaiPoludasu",
            linkedin:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/"
        }
    //------------| ProfileUI_colors | ---------------
        const AllColors = ['green','red','blue','yellow','pink','violet','orange','teal','purple']
        const [coverBG_color,setCoverBG] = useState<string>(localStorage.getItem("coverBG_color")||AllColors[0])
        const [SkillBG_col,setSkillBG] = useState<string>(localStorage.getItem("SkillBG_col")||AllColors[5])
        const [AboutBG,setAboutBG] = useState<string>(AllColors[2])


    return (
        <GlobalContext.Provider
            value={{
                name,
                setName,
                Skills,updateSkills,
                occupation,
                profileLink,
                about_me,
                EducationDetails,
                InternshipINFO,
                ProjectDetails,
                Links,
                email,
                phoneNumber,
                SocialMediaLinks,
                AllColors,
                coverBG_color,setCoverBG,
                SkillBG_col,setSkillBG,
                AboutBG,setAboutBG
            }}>
                {children}
            </GlobalContext.Provider>
    )
}

export { GlobalContext , GlobalContextProvider}