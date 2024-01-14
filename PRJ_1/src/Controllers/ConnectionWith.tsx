import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { fetch_stats_info } from './ControlStatsPage';
import { UserInfoContext } from '../Contexts/UserInfoContext';

const ConnectionWith:React.FC = () => {

    const {
        USER_UID,
        setUserStats,
        setuserConnections,
        setCRD_S,
    } = useContext<any>(UserInfoContext);

    // const URL = "http://20.20.18.189:9898/" // collage
    // const URL = "http://192.168.58.7:9898/" // hostel
    // const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app" // deployed
    // const URL = "http://localhost:9898";
    const URL = "https://rezzumy-server-2422bkbj-4ewfe.onrender.com" // deployed
    const Connect = () =>{
        axios.get(URL)
            .then((res)=>{
                console.log(res.data);
            })
            .catch((err:any)=>{
                console.log("ERROR: "+err);
            })
    }
    const Genteral = async () => {
        await  fetch_stats_info(USER_UID)
        .then((res)=>{
            if(res.status){
                // console.log(res.data.data);
                const info = res.data.data;
                setUserStats(info);
                setuserConnections(info.connections);
                // console.log(info.connections)
                setCRD_S(info.credit_score)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        Genteral();
        Connect();
    },[])
  return (
     null
  )
}

export default ConnectionWith