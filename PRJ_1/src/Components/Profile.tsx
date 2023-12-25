import React, { useState } from 'react'
import PenIcon from '../icons/PenIcon'
import CloseIcon from '../icons/CloseIcon'
import ArrowIcon from '../icons/ArrowIcon'
import { Social_Media } from '../widgets/Social_Media'
import ContactInfo from './ContactInfo'

const Profile:React.FC = () => {
    const Skills = ['Web','Python','Java','Computer Science','React','Node',
    'Web','Python','Java','Computer Science','React','Node']
    const name = "Sai Varun Chowdary Poludasu"
    const occupation = "Software Enginner"
    const AllColors = ['green','red','blue','yellow','pink','violet','orange','teal','purple']
    const [coverBG_color,setCoverBG] = useState<string>(AllColors[0])
    const [SkillBG_col,setSkillBG] = useState<string>(AllColors[5])
    const profileLink = "https://blog-it-backend-sandy.vercel.app/images/896313-56067455-5-post.png"
    const [editMODE,setEditMode] = useState<boolean>(false)

    const handleEditor = () =>{
        setEditMode(!editMODE)
    }
    const right_to_CoverBG = () =>{
        const idx = AllColors.indexOf(coverBG_color);
        if(idx === AllColors.length-1){
            setCoverBG(AllColors[0]);
        }
        else{
            setCoverBG(AllColors[idx+1])
        }
    }
    const left_to_CoverBG = () =>{
        const idx = AllColors.indexOf(coverBG_color);
        if(idx === 0){
            setCoverBG(AllColors[AllColors.length-1]);
        }
        else{
            setCoverBG(AllColors[idx-1])
        }
    }
    const right_to_Skill_BG = () =>{
        const idx = AllColors.indexOf(SkillBG_col);
        if(idx === AllColors.length-1){
            setSkillBG(AllColors[0]);
        }
        else{
            setSkillBG(AllColors[idx+1])
        }
    }
    const left_to_Skill_BG = () =>{
        const idx = AllColors.indexOf(SkillBG_col);
        if(idx === 0){
            setSkillBG(AllColors[AllColors.length-1]);
        }
        else{
            setSkillBG(AllColors[idx-1])
        }
    }

  return (
    <div className=' w-full h-full flex mt-[200px] items-center gap-16
     max-sm:mt-[100px] flex-col mb-11 max-sm:mb-0'>
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
                max-sm:ml-0 max-sm:mt-10
                font-light mt-2 '>
                    {name}
                </div>
                <div className=' mt-4 p-2 w-full h-full 
                flex flex-row flex-wrap gap-4 pb-5 
                '>
                    {
                        Skills.map((ele,idx)=>
                        <a key={"Skill-"+idx} className={` bg-${SkillBG_col}-400 w-fit px-3 h-fit
                            py-1 rounded-md text-white shadow-md 
                            hover:shadow-3xl hover:cursor-pointer transition-shadow
                            `}
                            >
                                {ele}
                        </a>
                        )
                    }
                    </div>
            </div>
        </div>
        <div className={` fixed top-0 bottom-0 right-0 flex transition-transform
             duration-300
        ${editMODE ? ' translate-x-0': 'translate-x-[10vw]' } `}>
            <div  onClick={handleEditor}>
                <div className=' w-10 mt-3 mr-3 h-10 bg-black/20 
                rounded-full flex items-center justify-center'>
                    {
                        editMODE ? 
                        <CloseIcon color='white' size={100}/>
                        :
                        <PenIcon color='white' size={100}/>
                    }
                </div>
            </div>
            <div className='w-[10vw] shadow-xl'>
                <div className=' flex mt-[150px] flex-col items-center gap-4'>
                    <div onClick={left_to_CoverBG} 
                    className=' h-10 w-10 flex items-center justify-center
                    bg-black/20 rounded-full active:bg-black/10 transition-colors'> 
                        <ArrowIcon color='white' size={100} angle='0deg'/>
                     </div>

                    <div onClick={right_to_CoverBG} 
                    className=' h-10 w-10 flex items-center justify-center
                    bg-black/20 rounded-full active:bg-black/10 transition-colors'> 
                        <ArrowIcon color='white' size={100} angle='180deg'/>
                      </div>
                </div>
                <div className=' mt-[100px] flex flex-col items-center max-sm:mt-[185px] gap-4'>

                    <div onClick={right_to_Skill_BG} 
                   className=' h-10 w-10 flex items-center justify-center
                   bg-black/20 rounded-full active:bg-black/10 transition-colors'> 
                   <ArrowIcon color='white' size={100} angle='0deg'/>
                   </div>
                    
                    <div onClick={left_to_Skill_BG} 
                    className=' h-10 w-10 flex items-center justify-center
                    bg-black/20 rounded-full active:bg-black/10 transition-colors'> 
                           <ArrowIcon color='white' size={100} angle='180deg'/>
                    </div>
                
                </div>
            </div>
        </div>
        <div className=' __widgets__ '>
            <Social_Media/>
        </div>
        <div>
            <ContactInfo/>
        </div>
    </div>
  )
}

export default Profile