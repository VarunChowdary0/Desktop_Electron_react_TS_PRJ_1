import React, { useContext, useEffect, useState } from 'react'
import { save_cover_BG_to_local, save_mySkills_to_local, save_skill_bg_to_local } from '../Functions/Manage_Functions'
import { GlobalContext } from '../Contexts/GlobalContext';
import CloseIcon from '../icons/CloseIcon';
import PenIcon from '../icons/PenIcon';
import ChangeName from '../PopUps/ChangeName';
import Add_Skill from '../PopUps/Add_Skill';
import ArrowIcon from '../icons/ArrowIcon';
import ChangeProfile_popUp from '../PopUps/ChangeProfile_popUp';
import ChangeOccupation from '../PopUps/ChangeOccupation';
import Editable_About_me from '../widgets/Editable_About_me';
import Editable_Eduacation from '../widgets/Editable_Education';
import Editable_InternShips from '../widgets/Editable_Internships';
import Editable_MiniProject_Wid from '../widgets/Editable_MiniProject_Wid';
import { Editabel_Social_Media } from '../widgets/Editable_Social_Media';
import ContactInfo from './ContactInfo';
import Edit_ContactINFO_popUp from '../PopUps/Edit_ContactINFO_popUp';
import BackToSettings from '../MiniCopms/BackToSettings';


const Manage:React.FC = () => {
    const {
        showNamePopup,setNamePopupView,
        showAddSkillPopUp,setAddSkillPopupView,
        showChangeProfilePopUp,setChangeProfileShow,
        showChangeOccupation,setChangeOccupationShow,
        whatHapped,toWho,handlePopUp,
        showContactPopup,setshowContactPopup,setSync
            } = useContext<any>(GlobalContext)
    const {
        Skills,updateSkills,
        name,
        occupation,
        profileLink,
    } = useContext<any>(GlobalContext);

    const Remove_This_Skill = (idx: number) => {
        const updatedSkills = [...Skills.slice(0, idx), ...Skills.slice(idx + 1)];
        updateSkills(updatedSkills);
        handlePopUp("Removed","Skill")
        setSync(true);
    };
      
    useEffect(()=>{
        save_mySkills_to_local(Skills)
    },[Skills])

    const _ChangeName_ = () =>{
        setNamePopupView(true);
    }
    const _Add_Skill_ = () =>{
        setAddSkillPopupView(true);
    }
    const _ChangeProfile_ = () =>{
        setChangeProfileShow(true)
    }
    const _ChangeOccupation_ = () =>{
        setChangeOccupationShow(true)
    }

    const {
        AllColors,
        coverBG_color,setCoverBG,
        SkillBG_col,setSkillBG,
        AboutBG,
        // setAboutBG
    } = useContext<any>(GlobalContext)

    const [editMODE,setEditMode] = useState<boolean>(false)

    const handleEditor = () =>{
        setEditMode(!editMODE)
    }

    const right_to_CoverBG = () =>{
        const idx = AllColors.indexOf(coverBG_color);
        if(idx === AllColors.length-1){
            setCoverBG(AllColors[0]);
            save_cover_BG_to_local(AllColors[0]);
        }
        else{
            setCoverBG(AllColors[idx+1])
            save_cover_BG_to_local(AllColors[idx+1]);
        }
    }
    const left_to_CoverBG = () =>{
        const idx = AllColors.indexOf(coverBG_color);
        if(idx === 0){
            setCoverBG(AllColors[AllColors.length-1]);
            save_cover_BG_to_local(AllColors[AllColors.length-1]);
        }
        else{
            setCoverBG(AllColors[idx-1])
            save_cover_BG_to_local(AllColors[idx-1]);
        }
    }

    const right_to_Skill_BG = () =>{
        const idx = AllColors.indexOf(SkillBG_col);
        if(idx === AllColors.length-1){
            setSkillBG(AllColors[0]);
            save_skill_bg_to_local(AllColors[0]);
        }
        else{
            setSkillBG(AllColors[idx+1])
            save_skill_bg_to_local(AllColors[idx+1]);
        }
    }
    const left_to_Skill_BG = () =>{
        const idx = AllColors.indexOf(SkillBG_col);
        if(idx === 0){
            setSkillBG(AllColors[AllColors.length-1]);
            save_skill_bg_to_local(AllColors[AllColors.length-1]);
        }
        else{
            setSkillBG(AllColors[idx-1])
            save_skill_bg_to_local(AllColors[idx-1]);
        }
    }

    const {show} = useContext<any>(GlobalContext);
  return (
    <div className=' w-full h-fit
     overflow-y-auto
     flex items-center pt-[100px] flex-col gap-14 
    '>
        <div className=' h-fit max-w-[500px] w-fit shadow-xl overflow-hidden
     dark:bg-[#464646] text-white  bg-white 
        max-sm:w-[280px] rounded-md  relative'>
            <div className=' absolute h-[150px] w-[150px] top-[20%]
            
             bg-[#4c4b4b] left-1 rounded-full  max-sm:top-[100px] overflow-hidden'>
                <img className=' select-none' src={profileLink}/>
                <div onClick={_ChangeProfile_}
                className=' absolute top-0 bg-black/50 flex items-center opacity-0
                 justify-center text-white font-thin text-2xl max-sm:opacity-50
                 h-[150px] w-[150px] hover:opacity-100 transition-all'>
                    Change
                </div>
             </div>
            <div className={` h-[180px] 
            max-sm:h-[230px]
            text-3xl font-bold text-white
             flex items-center justify-end pr-1 max-sm:items-start max-sm:pt-[50px]
             w-full bg-gradient-to-r from_custom_${coverBG_color} 
             to_custom_${SkillBG_col} max-md:text-2xl mr-[170px]`}>
            {occupation}
            <div onClick={_ChangeOccupation_}
                    className=' scale-75 p-2 hover:bg-black/20 transition-all duration-300
                     rounded-full mt-4'><PenIcon color='#4d4d4dad' size={0.7}/>
            </div>
            </div>
            <div className=' h-[40%] w-full '>
                <div className=' ml-[150px] pl-1 text-lg 
                max-sm:ml-0 max-sm:mt-[70px] text-black dark:text-white
                font-light mt-2 flex items-center gap-3 justify-between '>
                    {name}
                    <div onClick={_ChangeName_}
                    className=' scale-75 p-2 hover:bg-black/20 transition-all duration-300
                     rounded-full mt-1'><PenIcon color='#545454' size={0.7}/></div>
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
                               <abbr title={`remove ${ele}`}>
                               <div onClick={()=>{Remove_This_Skill(idx)}} 
                                className='__Remove__ scale-110 absolute top-[-3px] right-[-3px] rounded-full
                                 h-4 w-4 bg-black/20 
                                  dark:bg-dark_dark_600/60 dark:border-[1px]
                                 hover:bg-red-500'>
                                    <div className=' scale-50 flex items-center 
                                    justify-center'>
                                        <CloseIcon color='white' size={1}/>
                                    </div>
                                 </div>
                               </abbr>
                                {ele}
                        </a>
                        )
                    }
                    <a onClick={_Add_Skill_} className={` w-fit px-3 h-8 bg-[#3c3c3c]/60 hover:bg-[#3c3c3c]
                            py-1 rounded-md text-white shadow-md flex items-center justify-center
                            hover:shadow-3xl hover:cursor-pointer transition-all hover:scale-110 
                             dark:bg-dark_dark_500
                            `}
                            >
                                <p className=' pb-1 max-sm:pb-0 scale-150'>+</p>
                        </a>
                    </div>
            </div>
        </div>
        <div className=' __widget__ '>
            <Editable_About_me bg_Color={AboutBG}/>
        </div>
        <div className=' __widget__ '>
            <Editable_Eduacation bg_color={coverBG_color}/>
        </div>
        <div className=' __widget__ '>
            <Editable_InternShips bgCol={SkillBG_col}/>
        </div>
        <div className=' __widget__ '>
            <Editable_MiniProject_Wid/>
        </div>
        <div className=' __widget__ '>
            <Editabel_Social_Media/>
        </div>
        <div className=' __widget__ '>
            <div className=' relative'>
                <ContactInfo/>
                <div className=' absolute top-3 right-4 max-sm:right-10 max-sm:top-2'>
                    <div onClick={()=>{setshowContactPopup(!showContactPopup)}}
                     className='
                      p-3 bg-black/10 hover:bg-black/30 transition-all
                     rounded-full scale-75'>
                        <PenIcon color='#393939' size={1}/>
                    </div>
                </div>
            </div>
        </div>
        {showNamePopup && <ChangeName/>}
        {showAddSkillPopUp&&<Add_Skill/>}
        {showChangeProfilePopUp&&<ChangeProfile_popUp/>}
        {showChangeOccupation&&<ChangeOccupation/>}
        {showContactPopup&&<Edit_ContactINFO_popUp/>}
        <div className={` fixed top-0 bottom-0 right-0 flex transition-transform
             duration-300
        ${editMODE ? ' translate-x-0': 'translate-x-[10vw]' } `}>
            <div  onClick={handleEditor} className=' max-sm:h-[70px]'>
                <div className=' w-10 mt-3 mr-3 h-10 bg-black/20 
                 dark:bg-dark_dark_300
                rounded-full flex items-center justify-center'>
                    {
                        editMODE ? 
                        <CloseIcon color='white' size={100}/>
                        :
                        <PenIcon color='white' size={100}/>
                    }
                </div>
            </div>
            <div className='w-[10vw] shadow-xl dark:bg-dark_dark_200/80 relative'>
                <div className=' flex mt-[170px] flex-col items-center gap-4'>
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
                <div className=' mt-[120px] flex flex-col items-center max-sm:mt-[185px] gap-4'>

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
       <div>
       <div className=' fixed bottom-10 left-0 
        max-sm:bottom-20
       right-0 flex justify-center z-30'>
        <div className={` w-fit py-5 px-4 h-fit bg-black/80
            border-[1px] transition-all
            border-[#8b8a8a]  text-white flex 
            items-center justify-center gap-2 text-xl duration-200
            ${show?"rounded-md":" w-10 translate-y-[150px] rounded-full"}`}>
            <div>{toWho}</div>
            <div>{whatHapped}</div>
        </div>
    </div>
       </div>
       <BackToSettings/>
    </div>
  )
}

export default Manage