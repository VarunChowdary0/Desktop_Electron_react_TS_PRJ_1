import React, { useContext, useEffect } from 'react'
import { UserInfoContext } from '../Contexts/UserInfoContext'
import axios from 'axios';
import { GlobalContext } from '../Contexts/GlobalContext';

const FetchUserData:React.FC = () => {

    // const URL = "http://localhost:9898/"; // local
    // const URL = "http://20.20.18.189:9898/" // collage
    // const URL = "http://192.168.58.7:9898/" // hostel
    const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // dep
    // const URL = "https://rezzumy-server-2422bkbj-4ewfe.onrender.com/" // dep-2

    // WHEN LOGGED_IN FETCH USER's PERVIOUS- 
    // -DATA AND SET IT IN RESPECTIVE LOCAL STORAGES
    const {USER_UID , isLoggedIn} = useContext<any>(UserInfoContext);
    const {setWholeLoader,
        setName,
        updateSkills,
        setOccupation,
        setProfile,
        setAboutME,
        setEducationDetails,
        setIntenshipInfo,
        setProjects,
        SET_LINKS,
        setEmail,
        setPhoneNum,
        setSocialMediaLinks
    } = useContext<any>(GlobalContext);
    useEffect(()=>{
        if ( USER_UID !== "N-A" && isLoggedIn   ){
            // console.log(USER_UID)
            setWholeLoader(true)
            axios.post(URL+'get_user_data',{
                USER_UID
            })
                .then((res)=>{
                    // console.log(res.data)
                    if(res.data.message === "OK"){
                        const response=(res.data.data)
                        const name = response.profile.name;
                        const Skills = response.profile.skills;
                        const occupation = response.profile.occupation;
                        const profileLink = response.profile.profileLink;

                        const about = response.about;

                        const EducationDetails = response.educationDetails;

                        const InternshipDetails = response.internshipDetails;

                        const ProjectDetails = response.projectDetails;

                        const CodingPlatform = response.codingPlatform;

                        const ContactDetails = response.contactDetails;

                        const mail = ContactDetails.email;

                        const phNo = ContactDetails.phoneNumber;

                        const SM_links = ContactDetails.SocialMediaLinks;

                        console.log(
                            // name,
                            // Skills,
                            // occupation,
                            // profileLink,
                            // about,
                            // EducationDetails,
                            // InternshipDetails,
                            // ProjectDetails,
                            // CodingPlatform,
                            // ContactDetails,
                            // mail,
                            // phNo
                            // SM_links
                        )
                        //-- saving data 
                            setName(name);
                            updateSkills(Skills);
                            setOccupation(occupation);
                            setProfile(profileLink);

                            setAboutME(about);

                            setEducationDetails(EducationDetails);

                            setIntenshipInfo(InternshipDetails);

                            setProjects(ProjectDetails);

                            SET_LINKS(CodingPlatform);

                            setSocialMediaLinks(SM_links);

                            setEmail(mail);
                            setPhoneNum(phNo);

                    }
                    else if(res.data.message === "NEW USER"){
                        console.log(res.data.message)
                    }
                    setWholeLoader(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    },[USER_UID,isLoggedIn])

  return (null)
}

export default FetchUserData