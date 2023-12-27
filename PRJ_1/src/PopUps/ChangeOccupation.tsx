import React, { useContext, useState } from 'react'
import CheckIcon from '../icons/CheckIcon';
import { GlobalContext } from '../Contexts/GlobalContext';
import { save_occupation_to_locat } from '../Functions/Manage_Functions';

const ChangeOccupation:React.FC = () => {
    const {occupation,setOccupation,setChangeOccupationShow} = useContext<any>(GlobalContext);
    const [currnetOccupation,setCurrentOccupation] = useState("");
    const default_occupation = occupation;
    const closePopup = () =>{
        setChangeOccupationShow(false)
    }
    const handleSave = () =>{
        if(currnetOccupation.trim() !== ""){
            console.log(currnetOccupation);
            setOccupation(currnetOccupation);
            save_occupation_to_locat(currnetOccupation);
        }
        closePopup();
    }
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
        h-screen w-screen bg-black/30 flex items-center justify-center'>
        </div>
        <div className=' fixed h-fit w-fit top-[40%]
        bg-white px-3 py-10 rounded-md' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Occcupation</div>
            <div className=' flex relative'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                        closePopup();
                    }
                }} placeholder='Your Occcupation'
                onChange={(e)=>{setCurrentOccupation(e.target.value)}} 
                className='w-[400px] px-4 outline-none' type="text" value={currnetOccupation}/>
                <abbr title="click to save">
                    <div onClick={handleSave} className={`${((currnetOccupation.trim() !== default_occupation) && currnetOccupation.trim()!=="") ?
                        "bg-black" : "bg-[#69696938]"} p-2 rounded-full absolute right-0`}>
                        <CheckIcon/>
                    </div>
                </abbr>  
            </div>
        </div>
    </>
  )
}

export default ChangeOccupation