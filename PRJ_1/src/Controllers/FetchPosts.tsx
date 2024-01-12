import axios from "axios";

const URL = "http://localhost:9898/"; // local
// const URL = "http://20.20.18.189:9898/" // collage
// const URL = "http://192.168.58.7:9898/" // hostel
// const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // deployed

export const fetch_All_posts = () =>{
    return axios
        .get(URL+"get_all_posts")
            .then((res)=>{
                console.log(res.data.response)
                return { status : true , data : res.data.response}
            })
            .catch((err)=>{
                console.log(err)
                return { status : false , data : {}}
            })
}