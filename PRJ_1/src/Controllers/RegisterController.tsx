import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

// const URL = "http://20.20.18.189:9898/" // collage
// const URL = "http://192.168.58.7:9898/" // hostel
// const URL = "http://localhost:9898/"; // local
const URL = "https://rezzumy-server-897988-assbjksa-23.vercel.app/" // deployed

export const CreateNewUserAccount = (username:string, password:string, mail:string) => {
    const USER_UID = uuidv4();
    return axios
        .post(URL + "CreateAccount", {
                username,
                password,
                mail,
                USER_UID,
            }
        )
        .then((res) => {
            if (res.data) {
                return { status: true };
            }
            else {
                return { status: false, error: "Failed to create user account" };
            }
        })
        .catch((err) => {
            const errMSG = (err.response.data.message)
            return { status: false, error: errMSG || "An error occurred" };
        });
};

export const LoginToUser = (username:string,password:string ) => {
     return axios
        .post(URL+"Login",{
            username,
            password
        })
        .then((res)=>{
            console.log(res.data) 
            if(res.data.message === "OK"){
                localStorage.setItem('username',username);
                return { status : true , error : res.data.USER_UID }
            }
            else{
                return { status : false , error : " INVALID CREDENTIALS " };
            }
        })
        .catch((err)=>{
            const errMSG = (err.response.data.message)
            return { status: false, error: errMSG || "An error occurred" };
        })
}