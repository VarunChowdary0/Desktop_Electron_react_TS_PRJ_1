import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import CloseIcon from '../icons/CloseIcon'
import { save_Education_details_to_local } from '../Functions/Manage_Functions'
import Add_Eduaction_Info from '../PopUps/Add_Eduaction_Info'

interface CurrentProps{
    bg_color : string
}
const Editable_Eduacation:React.FC<CurrentProps> = () => {
    const {
        EducationDetails,setEducationDetails,
        showAddEduactionDetailPopup,setShowEducationPopUp,
        handlePopUp
    } = useContext<any>(GlobalContext)
    const Remove_This_Detail = (idx:number) =>{
        const updated_Education_Details = [...EducationDetails.slice(0,idx),...EducationDetails.slice(idx+1)]
        console.log(updated_Education_Details)
        setEducationDetails(updated_Education_Details)
        save_Education_details_to_local(updated_Education_Details)
        handlePopUp("Removed","Eduaction Detail")
    }
    
  return (
    <div className={` bg-${'white'}-400 w-[500px] max-sm:w-[300px]
     h-fit border-2  text-[#3b3b3b] rounded-lg p-4 max-sm:p-2`}>
        <div className=' text-xl mt-3 mb-3 font-bold'> Education Details</div>
        <div className=' flex flex-col gap-8'>
            {
                EducationDetails.map((ele:any,idx:number)=>
                <div className=' relative __Skill__' key={"education_detail"+idx}>
                    <div onClick={()=>{Remove_This_Detail(idx)}} 
                                className='__Remove__ scale-125 absolute top-0 right-3 rounded-full
                                 h-4 w-4 bg-black/40  hover:bg-red-500'>
                                    <div className=' scale-50 flex items-center 
                                    justify-center'>
                                        <CloseIcon color='white' size={1}/>
                                    </div>
                                 </div>
                    <a href={ele.institue_site} target='_blank'
                    className=' font-semibold text-[#3e3e3e]'>{ele.institue_name}</a>  
                    <div className=' flex '>
                        <div className=' text-[#515050] mr-3' >{ele.branch}</div>
                        <div className=' flex flex-row gap-2'>
                            <span>CGPA -</span>
                            <span>{ele.Grade}</span>
                        </div>
                    </div>
                    <div className=' flex justify-between pr-4 mt-2 max-sm:pr-1 text-[12px]'> 
                        <div>{ele.address}</div>
                        <div>{ele.time_of_study}</div>
                    </div>
                </div>
                )
            }
            <div className=' flex items-center justify-center
              '>
                <div onClick={()=>{setShowEducationPopUp(true)}}
                 className=' h-[50px] rounded-md w-[100px] bg-[#3c3c3c]/60
                 hover:bg-[#3c3c3c] transition-all flex items-center justify-center '>
                    <p className=' text-5xl font-thin pb-3 text-white '>+</p>
                </div>
              </div>
        </div>
        {showAddEduactionDetailPopup&&<Add_Eduaction_Info/>}
    </div>
  )
}

export default Editable_Eduacation