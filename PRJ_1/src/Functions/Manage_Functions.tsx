import { json } from "react-router-dom";

export const Manage_Functions = () => {
}
export const sayHello = (name:string) =>{
    console.log("Hello"+name)
}
export const save_cover_BG_to_local = (color:string) =>{
    localStorage.setItem("coverBG_color",color);
}
export const save_skill_bg_to_local = (color:string) => {
    localStorage.setItem("SkillBG_col",color)
}
export const save_mySkills_to_local = (skills:Array<string>) =>{
    localStorage.setItem("mySkills",JSON.stringify(skills));
}
export const save_profile_url_to_local = (link:string) => {
    localStorage.setItem("myPicUrl",link);
}
export const save_occupation_to_locat = (occ:string) =>{
    localStorage.setItem("myOccupation",occ);
} 
export const save_about_me_to_local = (abt:string) =>{
    localStorage.setItem("about_me",abt);
}

export const save_Education_details_to_local = (eduaction_info : Array<object>) =>{
    localStorage.setItem("EducationDetails",JSON.stringify(eduaction_info))
}