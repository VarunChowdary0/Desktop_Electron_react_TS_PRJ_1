import React, { useContext, useState } from 'react'
import CheckIcon from '../../icons/CheckIcon'
import { GlobalContext } from '../../Contexts/GlobalContext';
import {  isLink, save_projects_to_local } from '../../Functions/Manage_Functions';

const Add_new_Project_popUP:React.FC = () => {
    const [flash,setFlash] = useState<string>("");
    const [TitleOfPRJ,setTitle] = useState<string>("");
    const [link,setLink] = useState<string>("");
    const [FrontEndLink,setFrontEndLink] = useState<string>("")
    const [backEndLink,setbackEndLink] = useState<string>("")
    const [Prj_des,setPrjDEs] = useState<string>("");

    const {ProjectDetails , setProjects,handlePopUp,
        setShowAddProjectPOPup,setSync} = useContext<any>(GlobalContext)
    const closePopup = () => {
        setShowAddProjectPOPup(false)
    }
    const handleSave = () =>{
        if(TitleOfPRJ.trim()!==""){
            if(Prj_des.trim()!==""){
                const FinalObj = {
                    Title : TitleOfPRJ,
                    link : link,
                    git_hub_frontEnd : FrontEndLink,
                    git_hub_BackEnd : backEndLink,
                    description : Prj_des
                }
                console.log(FinalObj)
                setProjects([...ProjectDetails,FinalObj])
                save_projects_to_local([...ProjectDetails,FinalObj])
                closePopup();
                handlePopUp("Added","Project")
                setSync(true)
            }
            else{
                handleFlash()
            }
        }
        else{
            handleFlash()
        }
        
    }
    const handleFlash = () =>{
        show_flash();
        setTimeout(()=>{
            setFlash("")
        },1500)
    }
    const show_flash = () =>{
        setFlash("Please fill the details.")
    }
  return (
    <>
    <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
         bg-black/30 flex items-center justify-center z-10 '>
    </div>
    <div className=' fixed h-fit w-fit min-w-[500px] top-[20%]  z-10
         max-sm:min-w-0 max-sm:ml-[6vw]
        bg-white px-3 py-10 rounded-md'>
        <div className=' px-4 pb-6 text-lg text-[#6c6c6c]'>Add Project</div>
        <div className=' flex relative flex-col gap-7'>
            <input  placeholder='Project Title'
            onChange={(e)=>{setTitle(e.target.value)}} 
            className='w-[80%] px-4 outline-none text-black' type="text" value={TitleOfPRJ}/>
           
           <div className=' relative'>
            <input  placeholder='Deployed link of Project'
                onChange={(e)=>{setLink(e.target.value)}} 
                className='w-[80%] px-4 outline-none  text-black' type="text" value={link}/>
           
                <div className=' h-5 w-5 flex items-center justify-center
                 text-center bg-black/80 rounded-full 
                  absolute right-5 top-1
                 '>
                    {
                        (isLink(FrontEndLink))?
                        <div className='fill-green-600 flex 
                        items-center justify-center scale-90'>
                             <CheckIcon/>
                         </div>
                        :
                        <abbr title="invalid link">
                            <p className=' text-red-600 '>!</p>
                        </abbr>
                    }
                 
                </div>
            </div>

            <div className=' relative'>
                <input  placeholder='Github / Source code [ frontend ]'
                onChange={(e)=>{setFrontEndLink(e.target.value)}} 
                className='w-[80%] text-black px-4 outline-none' type="text" value={FrontEndLink}/>
                <div className=' h-5 w-5 flex items-center justify-center
                 text-center bg-black/80 rounded-full 
                  absolute right-5 top-1 
                 '>
                    {
                        (isLink(FrontEndLink))?
                        <div className='fill-green-600 flex 
                        items-center justify-center scale-90'>
                             <CheckIcon/>
                         </div>
                        :
                        <abbr title="invalid link">
                            <p className=' text-red-600 '>!</p>
                        </abbr>
                    }
                 
                </div>
            </div>

            <div className=' relative'>
            <input  placeholder='Github / Source code [ backend ]'
            onChange={(e)=>{setbackEndLink(e.target.value)}} 
            className='w-[80%] px-4 outline-none text-black' type="text" value={backEndLink}/>

                <div className=' h-5 w-5 flex items-center justify-center
                 text-center bg-black/80 rounded-full 
                  absolute right-5 top-1
                 '>
                    {
                        (isLink(FrontEndLink))?
                        <div className='fill-green-600 flex 
                        items-center justify-center scale-90'>
                             <CheckIcon/>
                         </div>
                        :
                        <abbr title="invalid link">
                            <p className=' text-red-600 '>!</p>
                        </abbr>
                    }
                 
                </div>
            </div>
           
         
            <input  placeholder='Project Description'
            onChange={(e)=>{setPrjDEs(e.target.value)}} 
            className='w-[80%] px-4 outline-none text-black' type="text" value={Prj_des}/>
           
            <div className=' h-5 text-center text-red-500'>
                <p>{flash}</p>
            </div>
            {
                <abbr title="click to save">
                    <div onClick={handleSave} className={`${(TitleOfPRJ.trim() !== "") ?
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

export default Add_new_Project_popUP