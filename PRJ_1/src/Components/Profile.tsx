import React, { useContext } from 'react'

import { Social_Media } from '../widgets/Social_Media'
import ContactInfo from './ContactInfo'
import About_me from '../widgets/About_me'
import Eduacation from '../widgets/Eduacation'
import InternShips from '../widgets/InternShips'
import MiniProject_Wid from '../widgets/MiniProject_Wid'
import { GlobalContext } from '../Contexts/GlobalContext'

const Profile:React.FC = () => {
    const {Skills} = useContext<any>(GlobalContext)
    const {name} = useContext<any>(GlobalContext)
    const {occupation} = useContext<any>(GlobalContext)
    const {profileLink} = useContext<any>(GlobalContext)

    const {
        coverBG_color,
        SkillBG_col,
        AboutBG,
    } = useContext<any>(GlobalContext)


  return (
    <div className=' flex mt-[100px] items-center gap-16
     max-sm:mt-[100px] flex-col mb-11 max-sm:mb-0'>
        <div className=' h-fit max-w-[500px] w-fit shadow-xl overflow-hidden
        bg-white  dark:bg-[#464646]
         dark:text-white
        max-sm:w-[250px] rounded-md  relative'>
            <div className=' absolute h-[150px] w-[150px] top-[20%] max-sm:top-[100px]     
             bg-[#4c4b4b] left-1 rounded-full  overflow-hidden'>
                <img className=' select-none' src={profileLink} alt='RETRY'/>
             </div>
            <div className={` h-[180px] 
            
            max-sm:h-[230px] mr-[170px]
            text-3xl font-bold text-white
             flex items-center justify-end pr-5 max-sm:items-start max-sm:pt-[50px]
             w-full bg-gradient-to-r from_custom_${coverBG_color}
            to_custom_${SkillBG_col} max-md:text-2xl `}>
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
                        <a key={"Skill-"+idx} className={` bg-${SkillBG_col}-400  w-fit px-3 h-fit
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
        <div className=' __widgets__ '>
            <About_me bg_Color={AboutBG}/>
        </div>
        <div className=' __widgets__ '>
            <Eduacation bg_color={coverBG_color}/>
        </div>
        <div className=' __widgets__ '>
            <InternShips bgCol={SkillBG_col}/>
        </div>
        <div className=' __widgets__ '>
            <MiniProject_Wid/>
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