import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

interface CurrentProps{
    bg_color : string
}
const Eduacation:React.FC<CurrentProps> = () => {
    const {EducationDetails} = useContext<any>(GlobalContext)
  return (
    <div className={` bg-${'white'}-400 w-[500px] max-sm:w-[300px]
    dark:bg-dark_dark_200 dark:text-white 
    dark:shadow-xl shadow-lg
     transition-all dark:border-0
     h-fit border-2  text-[#3b3b3b] rounded-lg p-4 max-sm:p-2`}>
        <div className=' text-xl mt-3 mb-3 font-bold'> Education Details</div>
        <div className=' flex flex-col gap-8'>
            {
                EducationDetails.map((ele:any,idx:number)=>
                <div key={"education_detail"+idx}>
                    <a href={ele.institue_site} target='_blank'
                    className=' hover:underline 
                     dark:text-dark_Match_600
                    font-semibold text-[#3e3e3e]'>
                        {ele.institue_name}</a>  
                    <div className=' flex items-center '>
                        <div className=' text-[#515050]
                         dark:text-white mt-2
                        mr-3' >{ele.branch}</div>
                        <div className=' flex flex-row gap-2 mt-2'>
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
        </div>
    </div>
  )
}

export default Eduacation