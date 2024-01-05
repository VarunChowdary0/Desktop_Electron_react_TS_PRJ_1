import React, { useContext, useState } from 'react'
import Git_hub from '../icons/Git_hub'
import { GlobalContext } from '../Contexts/GlobalContext'

const MiniProject_Wid:React.FC = () => {
    const {ProjectDetails} = useContext<any>(GlobalContext);
    const [project_limit,changeLimit] = useState<number>(2)
    
    const addtwoMoreProjects = () =>{
        window.location.href = "#3432ji"
        if(project_limit+2 >= ProjectDetails.length){
            changeLimit(ProjectDetails.length)
        }
        else{
            changeLimit(project_limit+2)
        }
    }
  return (
    <div className={` bg-${'white'}-400 w-[500px] max-sm:w-[300px] active:translate-y-1
     dark:bg-dark_dark_200 dark:border-none shadow-lg dark:text-white
     border-2  text-[#3b3b3b] rounded-lg p-4 max-sm:p-2 transition-all`}>
        <div className=' text-center text-2xl
         dark:text-dark_Match_300 transition-all
        font-bold mb-4'>My Projects</div>
        <div className=' flex flex-col gap-5 mb-4'>
            {
                ProjectDetails.slice(0,project_limit).map((ele:any,idx:number)=>
                <div key={"project_info_"+idx}>
                     <div id='3432ji'></div>
                    <a href={ele.link} target='_blank' 
                    className=' text-2xl font-semibold 
                     dark:text-dark_Match_500 transition-all
                    mb-2 hover:underline'>
                        {ele.Title}</a>
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
        </div>
       { (project_limit !== ProjectDetails.length && (ProjectDetails.length-project_limit > 0)) &&
       <>
            <div className=' mt-4'>+{ProjectDetails.length-project_limit}</div>
            <div className=' flex justify-center mt-8 mb-5'>
                <button className=' scale-125 bg-white text-[#303030]
                shadow-light dark:shadow-dark
                hover:text-white active:scale-90 transition-all '
                onClick={addtwoMoreProjects}
                >More Projects</button>
            </div>
       </>}
    </div>
  )
}

export default MiniProject_Wid