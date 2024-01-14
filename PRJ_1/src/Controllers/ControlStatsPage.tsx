import axios from "axios";

// const URL = "http://20.20.18.189:9898/" // collage
// const URL = "http://192.168.58.7:9898/" // hostel
// const URL = "http://localhost:9898/"; // local
const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // deployed

export const fetch_stats_info = (USER_UID:string) =>{
    // console.log("Dsd")
    return axios
        .post(URL+"get_user_stats",{
            USER_UID
        })
            .then((res)=>{
                // console.log(res);
                return {status:true,data:res.data.data}
            })
            .catch((err)=>{
                console.log(err);
                return {status:false,data:"NA"}
            })
} 

export const connect_to_user = (my_uid:string,myName:string,myPrfLin:string,myOcc:string,
    other_uid:string,otherName:string,other_Prf:string,other_Occ:string) => {
    // console.log("my : "+my_uid , "other : "+other_uid);
    return axios 
        .post(URL+'make_connection',{
            my_uid,
            myName,
            myPrfLin,
            myOcc,
            other_uid,
            otherName,
            other_Prf,
            other_Occ
        })
        .then((res)=>{
            // console.log(res);
            return {status:true,data:res.data};
        })
        .catch((err)=>{
            console.log(err);
            return {status:false,data:"NA"};
        })
} 

export const remove_connection = (My_UID:string,Other_UID:string) =>{
    return axios
        .post(URL+"remove_connection",{
            My_UID, //My
            Other_UID // Others
        })
            .then((res)=>{
                // console.log(res)
                return {status:true,data:res.data};
            })
            .catch((err)=>{
                console.log(err);
                return {status:false,data:"NA"};
            })
}