import React, { useContext } from 'react'
import CertificateIcon from '../icons/CertificateIcon'
import { GlobalContext } from '../Contexts/GlobalContext'

interface CurrentProps{
    bgCol : string
}
const InternShips:React.FC<CurrentProps>= (props) => {
    const {InternshipINFO} = useContext<any>(GlobalContext)
  return (
    <div className={` bg-${props.bgCol}-400 w-[500px] max-sm:w-[300px] h-fit
    rounded-lg text-[#fff] p-4 max-sm:p-2
  `}>
        <div className=' text-2xl mt-3 mb-3 font-bold'>Internships</div>
        <div className='flex flex-col gap-8'>
            {
                InternshipINFO.map((ele:any,idx:number)=>
                    <div key={"internship_"+idx}>
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
            )
            }
        </div>
  </div>
  )
}

export default InternShips