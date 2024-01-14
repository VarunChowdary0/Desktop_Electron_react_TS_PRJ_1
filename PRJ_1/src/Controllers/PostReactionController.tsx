import axios from "axios"

// const URL = "http://20.20.18.189:9898/" // collage
// const URL = "http://192.168.58.7:9898/" // hostel
// const URL = "http://localhost:9898/"; // local
const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // deployed


export const likeThisPost = (username:String,postID:string) =>{
    console.log(username+"- liked - "+postID);
    return axios
        .post(URL+"add_like",{
            username,postID
        })
        .then((res)=>{
            // console.log(res.data);
            return {status:true,data:res.data.data,likes:res.data.likes}
        })
        .catch((err)=>{
            console.log(err);
            return {status:false,data:"NA",likes:0}
        })
}
export const unLikeThisPost = (username:String,postID:string) => {
    console.log(username+"- unliked - "+postID);
    return axios
        .post(URL+"remove_like",{
            username,postID
        })
        .then((res)=>{
            // console.log(res.data);
            return {status:true,data:res.data.data,likes:res.data.likes}
        })
        .catch((err)=>{
            console.log(err);
            return {status:false,data:"NA",likes:0}
        })
}