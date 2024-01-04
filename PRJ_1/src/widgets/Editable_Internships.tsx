import React, { useContext } from 'react'
import CertificateIcon from '../icons/CertificateIcon'
import { GlobalContext } from '../Contexts/GlobalContext'
import CloseIcon from '../icons/CloseIcon'
import InterShipAdder from '../PopUps/InterShipAdder'
import { save_intership_info_to_local } from '../Functions/Manage_Functions'

interface CurrentProps{
    bgCol : string
}
const Editable_InternShips:React.FC<CurrentProps>= (props) => {
    const {
        InternshipINFO,setIntenshipInfo,
        showIntershipAdder,setInterAdderShow,
        setSync,
        handlePopUp
    } = useContext<any>(GlobalContext)
    const Remove_This_Detail = (idx:number) =>{
        setIntenshipInfo([...InternshipINFO.slice(0,idx),...InternshipINFO.slice(idx+1)])
        save_intership_info_to_local
        ([...InternshipINFO.slice(0,idx),...InternshipINFO.slice(idx+1)])
        handlePopUp("Removed","Internship Detail")
        setSync(true);
    }
  return (
    <div className={` bg-${props.bgCol}-400 w-[500px] max-sm:w-[300px] h-fit
    rounded-lg text-[#fff] p-4 max-sm:p-2 z-0
  `}>
        <div className=' text-2xl mt-3 mb-3 font-bold'>Internships</div>
        <div className='flex flex-col gap-8'>
            {
                InternshipINFO.map((ele:any,idx:number)=>
                    <>
                        <div key={"internship_" + idx} className='__Skill__ relative'>
                            <div onClick={()=>{Remove_This_Detail(idx)}} 
                                    className='__Remove__ scale-125 absolute rounded-full
                                    h-4 w-4 bg-black/40 top-[-17px] right-1  hover:bg-red-500'>
                                    <div className=' scale-50 flex items-center 
                                    justify-center'>
                                        <CloseIcon color='white' size={1}/>
                                    </div>
                            </div>
                            <div className=' flex justify-between pr-4 max-sm:pr-1'>
                                <div className=' flex gap-3'>
                                    <div className=' text-[#ffffff]'>{ele.Title}</div>
                                    <div className=' mt-1 text-[10px]'> [ {ele.at} ] </div>
                                    <a target='_blank'
                                    href={ele.CertificateLink}>
                                        <CertificateIcon/>
                                    </a>
                                </div>
                                <div className=' text-[11px]'>
                                    {ele.work_time}
                                </div>
                            </div>
                            <div>
                                <p className=' text-[14px] mt-2'>
                            {ele.description}
                                </p>
                            </div>
                        </div>
                    </>
            )
            }
            <div className=' flex items-center justify-center
              '>
                <div onClick={()=>{setInterAdderShow(true)}}
                 className=' h-[50px] rounded-md w-[100px] bg-[#3c3c3c]/60
                 hover:bg-[#3c3c3c] transition-all flex items-center justify-center '>
                    <p className=' text-5xl font-thin pb-3 max-sm:pb-0 text-white '>+</p>
                </div>
              </div>
        </div>
        {showIntershipAdder&&<InterShipAdder/>}
  </div>
  )
}

export default Editable_InternShips