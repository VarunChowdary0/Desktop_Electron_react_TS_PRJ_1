import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import PenIcon from '../icons/PenIcon'
import { save_about_me_to_local } from '../Functions/Manage_Functions'
import CheckIcon from '../icons/CheckIcon'

interface CurrentProps{
    bg_Color : string
}

const Editable_About_me:React.FC<CurrentProps>= (props) => {
  const {about_me,setAboutME,setSync} = useContext<any>(GlobalContext)

  const [Current_about,setCurrent] = useState(about_me);

  const donthing = () =>{}
  const handleAboutSave = () =>{
    setAboutME(Current_about);
    save_about_me_to_local(Current_about);
    setSync(true)
  } 
  return (
    <div className={` bg-${props.bg_Color}-400 w-[500px] max-sm:w-[300px]
    h-fit rounded-lg text-white p-4 relative
    `}>
        <div className=' text-xl mt-3 mb-3 font-bold flex justify-between pr-5'>
            <div>About</div>
            <div className=' scale-75'><PenIcon color='#4b4b4b' size={1}/></div>
        </div>
        <textarea id="autoresizing" rows={Current_about.length/43}
         className=' bg-black/0 w-full 
         max-sm:min-h-[25vh]
         border-none outline-none py-2 ' 
         value={Current_about} onChange={(e)=>{setCurrent(e.target.value)}}
         ></textarea>
         <div onClick={Current_about.trim()!==about_me?handleAboutSave:donthing} 
         className={` ${Current_about.trim() === about_me ?
           " bg-black/10 opacity-0":" bg-green-500/40"} p-3 w-fit 
         rounded-full 
         absolute bottom-2 right-2`}>
          <CheckIcon/>
         </div>
    </div>
  )
}

export default Editable_About_me