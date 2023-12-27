import React, { useContext, useEffect, useState } from 'react'
import { save_mySkills_to_local, sayHello } from '../Functions/Manage_Functions'
import { GlobalContext } from '../Contexts/GlobalContext';
import CloseIcon from '../icons/CloseIcon';

const Manage:React.FC = () => {
    const {
        Skills,updateSkills,
        name,
        occupation,
        profileLink,
    } = useContext<any>(GlobalContext);

    const {
        coverBG_color,
        SkillBG_col,
        AboutBG
    } = useContext<any>(GlobalContext)

    const Remove_This_Skill = (idx: number) => {
        const updatedSkills = [...Skills.slice(0, idx), ...Skills.slice(idx + 1)];
        console.log(updatedSkills);
        updateSkills(updatedSkills);
    };
      
    useEffect(()=>{
        save_mySkills_to_local(Skills)
    },[Skills])
  return (
    <div className=' w-full h-fit
     flex justify-center pt-[150px]
    '>
        <div className=' h-fit max-w-[500px] w-fit shadow-xl overflow-hidden
        bg-white 
        max-sm:w-[250px] rounded-md  relative'>
            <div className=' absolute h-[150px] w-[150px] top-[20%]
             bg-[#4c4b4b] left-1 rounded-full  max-sm:top-[20%] overflow-hidden'>
                <img className=' select-none' src={profileLink}/>
             </div>
            <div className={` h-[180px] 
            max-sm:h-[230px]
            text-3xl font-bold text-white
             flex items-center justify-end pr-5 max-sm:items-start max-sm:pt-[50px]
             w-full bg-gradient-to-r from_custom_${coverBG_color} to_custom_${SkillBG_col} max-md:text-2xl `}>
            {occupation}
            </div>
            <div className=' h-[40%] w-full '>
                <div className=' ml-[150px] pl-1 text-lg 
                max-sm:ml-0 max-sm:mt-14
                font-light mt-2  '>
                    {name}
                </div>
                <div className=' mt-4 p-2 w-full h-full 
                flex flex-row flex-wrap gap-4 pb-5 
                '>
                    {
                        Skills.map((ele:any,idx:number)=>
                        <a key={"Skill-"+idx} className={` __Skill__ bg-${SkillBG_col}-400 w-fit px-3 h-fit
                            relative py-1 rounded-md text-white shadow-md 
                            hover:shadow-3xl hover:cursor-pointer transition-shadow
                            `}
                            >
                                <div onClick={()=>{Remove_This_Skill(idx)}} 
                                className='__Remove__ scale-110 absolute top-[-3px] right-[-3px] rounded-full
                                 h-4 w-4 bg-black/20'>
                                    <div className=' scale-50 flex items-center 
                                    justify-center'>
                                        <CloseIcon color='white' size={1}/>
                                    </div>
                                 </div>
                                {ele}
                        </a>
                        )
                    }
                    <a className={` bg-${SkillBG_col}-400 w-fit px-3 h-8 opacity-50
                            py-1 rounded-md text-white shadow-md flex items-center justify-center
                            hover:shadow-3xl hover:cursor-pointer transition-all hover:scale-110 
                            `}
                            >
                                <p className=' pb-1 scale-150'>+</p>
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Manage