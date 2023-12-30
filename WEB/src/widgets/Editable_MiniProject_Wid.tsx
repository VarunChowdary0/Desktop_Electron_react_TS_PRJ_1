import React, { useContext } from 'react'
import Git_hub from '../icons/Git_hub'
import { GlobalContext } from '../Contexts/GlobalContext'
import CloseIcon from '../icons/CloseIcon';
import Add_new_Project_popUP from '../PopUps/Add_new_Project_popUP';
import { save_projects_to_local } from '../Functions/Manage_Functions';

const Editable_MiniProject_Wid:React.FC = () => {
    const {ProjectDetails,setProjects,
        showAddProjectPopUp,setShowAddProjectPOPup
        ,handlePopUp} = useContext<any>(GlobalContext);
    
    const Remove_This_Detail = (idx:number)=>{
        setProjects([...ProjectDetails.slice(0,idx),...ProjectDetails.slice(idx+1)])
        save_projects_to_local([...ProjectDetails.slice(0,idx),...ProjectDetails.slice(idx+1)])
        handlePopUp("Removed","Project")
    }
  return (
    <div className={` bg-${'white'}-400 w-[500px] max-sm:w-[300px] 
     border-2  text-[#3b3b3b] rounded-lg p-4 max-sm:p-2 transition-all  z-0`}>
        <div className=' text-center text-2xl font-bold mb-4'>My Projects</div>
        <div className=' flex flex-col gap-5 mb-4'>
            {
                ProjectDetails.map((ele:any,idx:number)=>
                <div className=' __Skill__ relative' key={"project_info_"+idx}>
                    <div onClick={()=>{Remove_This_Detail(idx)}} 
                                className='__Remove__ scale-125 absolute rounded-full
                                 h-4 w-4 bg-black/40 top-[0px] right-1 hover:bg-red-500'>
                                <div className=' scale-50 flex items-center 
                                justify-center'>
                                    <CloseIcon color='white' size={1}/>
                                </div>
                    </div>
                     <div id='3432ji'></div>
                    <a href={ele.link} target='_blank' 
                    className=' text-2xl font-semibold mb-2'>{ele.Title}</a>
                    <div>
                        {
                            (ele.git_hub_frontEnd.trim() !== "") ?
                            <div className=' flex gap-5 items-center'>
                                <div>github repo frontend</div>
                                <div>
                                    <a className=' fill-[#313131]' target='_blank' href={ele.git_hub_frontEnd}>
                                        <Git_hub/>
                                    </a>
                                </div>
                            </div> 
                            :
                            <div></div>
                        }

                        {
                            (ele.git_hub_BackEnd.trim() !== "") ?
                            <div className=' flex gap-5 items-center'>
                                <div>github repo backend</div>
                                <div>
                                    <a className=' fill-[#313131]' target='_blank' href={ele.git_hub_BackEnd}>
                                        <Git_hub/>
                                    </a>
                                </div>
                            </div> 
                            :
                            <div></div>
                        }
                        <div className=' mt-2 text-[15px]'>
                            {ele.description}
                        </div>
                    </div>
                </div>
            )}
            <div className=' flex items-center justify-center
              '>
                <div onClick={()=>{setShowAddProjectPOPup(true)}}
                 className=' h-[50px] rounded-md w-[100px] bg-[#3c3c3c]/60
                 hover:bg-[#3c3c3c] transition-all flex items-center justify-center '>
                    <p className=' text-5xl font-thin pb-3 text-white '>+</p>
                </div>
            </div>
            {showAddProjectPopUp && <Add_new_Project_popUP/>}
        </div>
    </div>
  )
}

export default Editable_MiniProject_Wid