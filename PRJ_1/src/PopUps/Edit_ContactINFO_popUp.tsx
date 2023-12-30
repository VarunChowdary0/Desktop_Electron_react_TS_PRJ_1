import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext';
import CheckIcon from '../icons/CheckIcon';
import { save_contact_info_to_local } from '../Functions/Manage_Functions';
import Linked_in from '../icons/Linked_in';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import Emilicon from '../icons/Emilicon';
import PhoneIcon from '../icons/PhoneIcon';

const Edit_ContactINFO_popUp:React.FC = () => {
    const {
        name,
        SocialMediaLinks,setSocialMediaLinks,
        email,setEmail,
        phoneNumber,setPhoneNum,
        setshowContactPopup,
        handlePopUp
    } = useContext<any>(GlobalContext)
    const [isChanged,setChange] = useState(false)
    const [curr_insta,setCur_insta] = useState<string>(SocialMediaLinks.instagram)
    const [curr_linkdin,setCur_linkdin] = useState<string>(SocialMediaLinks.linkedin)
    const [curr_twitt,setCur_twitt] = useState<string>(SocialMediaLinks.twitter)
    const [curr_FB,setCur_FB] = useState<string>(SocialMediaLinks.facebook)
    useEffect(()=>{
        if(
            curr_insta.trim() !== SocialMediaLinks.instagram ||
            curr_FB.trim() !== SocialMediaLinks.facebook ||
            curr_linkdin.trim() !== SocialMediaLinks.linkedin ||
            curr_twitt.trim() !== SocialMediaLinks.twitter
        ){
            setChange(true)
        }
        else{setChange(false)}
    }
    ,[curr_FB,curr_insta,curr_linkdin,curr_twitt])
    const handleSave = () =>{
        const final_OBJ = {
            instagram:curr_insta,
            facebook:curr_FB,
            twitter:curr_twitt,
            linkedin:curr_linkdin
        }
        closePopup();
        save_contact_info_to_local(final_OBJ);
        handlePopUp("Contact info","Changed")
        setSocialMediaLinks(final_OBJ);
    }
    const closePopup = () =>{
        setshowContactPopup(false)
    }
  return (
    <>
     <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
        h-screen w-screen bg-black/30 flex items-center justify-center'>
        </div>
        <div className=' fixed h-fit w-fit top-[20%] overflow-hidden
         bg-white px-3 py-10 rounded-md max-sm:w-[90%]' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Edit {name}'s Contact info </div>
            <div className=' flex relative flex-col gap-3'>
                <div className=' flex'>
                    <div className=' w-[80px]'>
                        <div className=' rounded-sm px-3 py-2  w-fit ml-3 scale-125'> 
                            <Emilicon/>
                        </div>
                    </div>
                    <input placeholder='Email address'
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    className='max-sm:text-sm w-[400px] px-4 outline-none' type="text" value={email}/>
                </div>
                <div className=' flex'>
                    <div className=' w-[100px]'>
                        <div className=' rounded-sm px-3 py-2  w-fit ml-3 scale-125'> 
                            <PhoneIcon/>
                        </div>
                    </div>
                    <input onChange={(e)=>{setPhoneNum(e.target.value)}} 
                    className='max-sm:text-sm w-[400px]  outline-none ' type="text" value={phoneNumber}/>
                </div>
                 <div className=' flex gap-2'>
                    <div className=' w-[80px]'>
                        <div className=' rounded-sm scale-125 px-3 py-2 ml-3 w-fit'> 
                        <Linked_in/>
                        </div>
                    </div>
                    <input onChange={(e)=>{setCur_linkdin(e.target.value)}} 
                    className='w-[400px] px-4 outline-none text-blue-400' type="text" value={curr_linkdin}/>
                </div>
                 <div className=' flex gap-2'>
                    <div className=' w-[80px]'>
                        <div className=' rounded-sm scale-125 px-3 py-2 ml-3 w-fit'> 
                        <InstagramIcon color='#bc3f79'/>
                        </div>
                    </div>
                    <input onChange={(e)=>{setCur_insta(e.target.value)}} 
                    className='max-sm:text-sm w-[400px] px-4 outline-none text-blue-400' type="text" value={curr_insta}/>
                </div>
                 
                <div className=' flex gap-2'>
                    <div className=' w-[80px]'>
                        <div className=' rounded-sm scale-125 px-3 py-2 ml-3 w-fit'> 
                            <FacebookIcon/>
                        </div>
                    </div>
                    <input onChange={(e)=>{setCur_FB(e.target.value)}} 
                    className='max-sm:text-sm w-[400px] px-4 outline-none text-blue-400' type="text" value={curr_FB}/>
                </div>
                 <div className=' flex gap-2'>
                    <div className=' w-[80px]'>
                        <div className=' rounded-sm scale-125 px-3 py-2 ml-3 w-fit'> 
                        <TwitterIcon/>
                        </div>
                    </div>
                    <input onChange={(e)=>{setCur_twitt(e.target.value)}} 
                    className='max-sm:text-sm w-[400px] px-4 outline-none text-blue-400' type="text" value={curr_twitt}/>
                </div>
                 {
                    <abbr title="click to save">
                        <div onClick={handleSave} className={` ${isChanged ? " bg-[#393939]" : "bg-[#69696938]"}  p-2 rounded-full absolute right-0`}>
                            <CheckIcon/>
                        </div>
                    </abbr>  
                }
            </div>
        </div>
    </>
  )
}

export default Edit_ContactINFO_popUp