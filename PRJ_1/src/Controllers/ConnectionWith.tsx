import React, { useEffect } from 'react'
import axios from 'axios'

const ConnectionWith:React.FC = () => {
    // const URL = "http://localhost:9898";
    // const URL = "http://20.20.18.189:9898/" // collage
    // const URL = "http://192.168.58.7:9898/" // hostel
    const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app" // deployed
    useEffect(()=>{
        axios.get(URL)
            .then((res)=>{
                console.log(res.data);
            })
            .catch((err:any)=>{
                console.log("ERROR: "+err);
            })
    },[])
  return (
     null
  )
}

export default ConnectionWith