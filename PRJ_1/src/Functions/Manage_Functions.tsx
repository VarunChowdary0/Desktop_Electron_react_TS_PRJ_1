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

export const save_intership_info_to_local = (InternshipDetails:Array<object>)=>{
    localStorage.setItem("InternshipDetails",JSON.stringify(InternshipDetails));
}

export const save_projects_to_local = (PRJS:Array<object>)=>{
    localStorage.setItem("ProjectDetails",JSON.stringify(PRJS))
}

export const save_coding_links_to_local = (OBJ:object) =>{
    localStorage.setItem("SavedCODE_Links",JSON.stringify(OBJ))
}

export const save_contact_info_to_local = (CONT:object) => {
    localStorage.setItem("SM_Links",JSON.stringify(CONT));
}

export const save_email_in_local = (mail:string) =>{
    localStorage.setItem("MyEmail",mail)
}

export const save_phonenumber_in_local = (ph:string)=>{
    localStorage.setItem("MyPhone",ph);
}

export const isLink = (str:string) => {
    // console.log(str)
    if(
    (str.includes("https://")||str.includes("http://"))
    && (str.includes(".com")) &&
    (str.length >= 13) && 
    !(str.includes(" "))){
        return true
    }
    else{
        return false
    }
}