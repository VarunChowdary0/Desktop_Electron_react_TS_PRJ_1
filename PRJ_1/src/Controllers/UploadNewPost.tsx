import axios from "axios";

// const URL = "http://localhost:9898/"; // local
// const URL = "http://20.20.18.189:9898/" // collage
// const URL = "http://192.168.58.7:9898/" // hostel
const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // deployed

export const upload_new_post = (data:object) =>{
    return axios
        .post(URL + "upload_new_post",{
            data
        })
        .then((res)=>{
            if(res.data){
                return { status : true };
            }
            else{
                return { status : false , error : "Failed"}
            }
        })
        .catch((err)=>{
            console.log(err);
            return { status : false , error : "Something went wrong"}
        })
}