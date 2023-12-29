import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext';
import CheckIcon from '../icons/CheckIcon';
import { save_profile_url_to_local } from '../Functions/Manage_Functions';

const ChangeProfile_popUp:React.FC = () => {
    const [currnetURL,setUrl] = useState<string>("");
    const {profileLink,setProfile,
            setChangeProfileShow,
            handlePopUp} = useContext<any>(GlobalContext);
    const default_url = profileLink;
    const closePopup = () =>{
        setChangeProfileShow(false)
    }
    const handleSave = () =>{
        console.log(currnetURL)
        if(currnetURL.trim() !== ""){
            save_profile_url_to_local(currnetURL);
            setProfile(currnetURL);
            handlePopUp("Updated","Profile")
        }
    }
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
        h-screen w-screen bg-black/30 flex items-center justify-center'>
        </div>
        <div className=' fixed h-fit w-fit top-[40%]
        bg-white px-3 py-10 rounded-md' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Change Profile</div>
            <div className=' flex relative'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                        closePopup();
                    }
                }} placeholder='Paste URL of your Photo'
                onChange={(e)=>{setUrl(e.target.value)}} 
                className='w-[400px] text-blue-400 px-4 outline-none' type="text" value={currnetURL}/>
                <abbr title="click to save">
                    <div onClick={handleSave} className={`${((currnetURL.trim() !== default_url) && currnetURL.trim()!=="") ?
                        "bg-black" : "bg-[#69696938]"} p-2 rounded-full absolute right-0`}>
                        <CheckIcon/>
                    </div>
                </abbr>  
            </div>
            <div className=' px-4 mt-7'>
                Open <a className=' text-blue-400 hover:underline' 
                  target='_blank'
                 href="https://postimages.org/"> 
                 postimages
                 </a> and
                upload your Photo, Copy 
                <b> Direct URL </b> 
            </div>
        </div>
    </>
  )
}

export default ChangeProfile_popUp