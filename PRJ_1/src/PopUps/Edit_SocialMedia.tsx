import React, { useContext, useState } from 'react'
import CheckIcon from '../icons/CheckIcon';
import { GlobalContext } from '../Contexts/GlobalContext';
import { isLink, save_coding_links_to_local } from '../Functions/Manage_Functions';

interface currentEdit {
    NAME : string
}
const Edit_SocialMedia:React.FC<currentEdit> = (prop) => {
    const {
        Links,SET_LINKS,handlePopUp,icons_Store,
        setShowEditPlatform,setSync} = useContext<any>(GlobalContext)

    const [CurrentLink,setLink] = useState<string>(Links[prop.NAME].link)
    // useEffect(()=>{
    //    // console.log(CurrentLink)
    // },[CurrentLink])
    const closePopup= () =>{
        setShowEditPlatform(false)
    }
    const handleSave = () =>{
        console.log(CurrentLink)
        let ads = Links;
        ads[prop.NAME].link = CurrentLink.trim()
        console.log("Modified: ",ads)
        SET_LINKS(ads);
        save_coding_links_to_local(ads);
        setSync(true)
        if(CurrentLink.trim()===""){
            handlePopUp("Removed",prop.NAME)
            closePopup();
        }
        else if(isLink(CurrentLink)){
            handlePopUp("Updated",prop.NAME)
            closePopup();
        }
        else{
            console.log("Enter a valid link")
            handlePopUp(prop.NAME,"Invalid Link ")
        }
    }
    console.log(Links)
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-10
        h-screen w-screen bg-black/30 flex items-center justify-center max-sm:w-full max-sm:h-full '>
        </div>
        <div className=' fixed h-fit w-fit top-[40%] max-sm:w-[90%] max-sm:ml-3 z-10
        bg-white px-3 py-10 rounded-md' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c] flex items-center gap-5'>
                <div className=' scale-125'>{icons_Store[Links[prop.NAME].icon] && React.cloneElement(icons_Store[Links[prop.NAME].icon])}</div>
                <div>Edit {prop.NAME.replace("_"," ")} Content</div>
            </div>
            <div className=' flex relative gap-3'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                    }
                }} placeholder={prop.NAME.replace('_'," ")+" Profile"}
                onChange={(e)=>{setLink(e.target.value)}} 
                className='w-[400px] px-4 outline-none' type="text" value={CurrentLink}/>
                <abbr title="click to save">
                    <div onClick={handleSave} className=
                    {`${(CurrentLink.trim() !== Links[prop.NAME].link && (isLink(CurrentLink)) )  ?
                        "bg-black" : "bg-[#ae11119c]"} p-2 rounded-full absolute right-0`}>
                        <CheckIcon/>
                    </div>
                </abbr>  
            </div>
        </div>
    </>
  )
}
export default Edit_SocialMedia