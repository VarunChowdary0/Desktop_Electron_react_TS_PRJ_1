import React, { useContext, useEffect, useState } from 'react'
import CheckIcon from '../icons/CheckIcon';
import { GlobalContext } from '../Contexts/GlobalContext';
import {  save_mySkills_to_local } from '../Functions/Manage_Functions';

const Add_Skill:React.FC = () => {
    const [newSkill,setNewSkill] = useState<string>(""); 
    const {setAddSkillPopupView,Skills,updateSkills} = useContext<any>(GlobalContext);
    const handleSave = () =>{
        if(Skills.includes(newSkill)){
            console.log("Exists")
        }
        else{            
            console.log("new skill : "+newSkill);
            if(newSkill.trim()!==""){
                updateSkills([...Skills,newSkill])
            }
        }
    }
    const closePopup = () => {
        setAddSkillPopupView(false)
    }
    useEffect(()=>{
        save_mySkills_to_local(Skills);
    },[Skills])

  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
        h-screen w-screen bg-black/30 flex items-center justify-center'>
        </div>
        <div className=' fixed h-fit w-fit top-[40%]
        bg-white px-3 py-10 rounded-md' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Add Skill</div>
            <div className=' flex relative'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                        closePopup();
                    }
                }} placeholder='My Skill'
                onChange={(e)=>{setNewSkill(e.target.value)}} 
                className='w-[400px] px-4 outline-none' type="text" value={newSkill}/>
                {
                    <abbr title="click to save">
                        <div onClick={handleSave} className={`${(newSkill.trim() !== "") ?
                            "bg-black" : "bg-[#69696938]"} p-2 rounded-full absolute right-0`}>
                            <CheckIcon/>
                        </div>
                    </abbr>  
                }
            </div>
        </div>
    </>
  )
}

export default Add_Skill