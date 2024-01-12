import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import { UserInfoContext } from '../Contexts/UserInfoContext'
import axios from 'axios';


const DataUpdater:React.FC = () => {
    const {
        name,
        Skills,
        occupation,
        profileLink,
        //----------
        about_me,
        //----------
        EducationDetails,
        //----------
        InternshipINFO,
        //----------
        ProjectDetails,
        //----------
        Links,
        //----------
        SocialMediaLinks,
        email,
        phoneNumber,

        doISync,setSync
        
    } = useContext<any>(GlobalContext)

    const {USER_UID,isLoggedIn} = useContext<any>(UserInfoContext);

    const SyncWithDataBase = (data:object) => {
        console.log("Called")
        axios.post('http://localhost:9898/save_data',data) // local
        // axios.post('http://20.20.18.189:9898/save_data',data) // collage
        // axios.post('http://192.168.58.7:9898/save_data',data) // hostel
        // axios.post('https://rezzumy-server-897988-assbjksa-23.vercel.app/save_data',data) // deployed
            .then((res)=>{
               console.log(res.data);
               console.log("DATA UPDATED");
               
                setSync(false)
            })
            .catch((err)=>{
                console.log(err)
                setSync(false)
            })
    }

    useEffect(()=>{
        const DataObject = {
            USER_UID : USER_UID ,
            data : {
                profile : {
                    name : name,
                    skills : Skills,
                    occupation : occupation ,
                    profileLink : profileLink,
                },
                about : about_me,
                educationDetails : EducationDetails,
                internshipDetails : InternshipINFO,
                projectDetails : ProjectDetails,
                codingPlatform : Links,
                contactDetails: {
                    email : email,
                    phoneNumber : phoneNumber,
                    SocialMediaLinks : SocialMediaLinks
                }
            }
        }
        // console.log(DataObject)
        if(isLoggedIn && doISync ){
            SyncWithDataBase(DataObject)
            // console.log(DataObject)
        }
    },[
        doISync
    ])
    
  return (null)
}

export default DataUpdater