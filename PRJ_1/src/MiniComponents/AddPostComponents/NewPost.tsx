import React, { useState } from 'react'
import ParaAdder from './ParaAdder';
import ReportAssembler from './ReportAssembler';

interface CurrentProps{
    setPostAdder:React.Dispatch<React.SetStateAction<boolean>>;
}
const NewPost:React.FC<CurrentProps> = (props) => {
  const [showOPtions,setOptions] = useState<string>("")
  return (
    <div className=' h-[100vh] w-full bg-[#f2ebeb]/10  flex-col
     flex items-center justify-center dark:bg-dark_dark_200/20 backdrop-blur-sm '>
        <div onClick={()=>{props.setPostAdder(false)}} 
        className=' h-[10%] max-sm:h-[20%] w-full '></div>
        <div className=' flex-1 w-full bg-[#f1eeee]/90 border-t 
        border-[#b5b4b4] shadow-xl dark:border-[#393939]
         rounded-2xl flex items-center max-sm:flex-col
        dark:bg-dark_dark_200/95 backdrop-blur-lg relative  '>
          {
            (showOPtions.trim() === "" ) ?
            <div className=' absolute w-full  flex items-center justify-center gap-10'>
              <div className=' border px-3 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer'
               onClick={()=>setOptions('RBP')}>Report Blog Post</div>
              <div  className=' border px-5 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer '
              >Pitures Post</div>
              <div  className=' border px-5 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer'
              >Custom Blog Post</div>
            </div>
            :
           (showOPtions.trim() === "RBP") && 
           <>
            <div onClick={()=>setOptions("")}
            className=' absolute h-3 w-3 bg-red-800
             rounded-full top-5 left-3 '></div>
           <ParaAdder/>
           <ReportAssembler/>
          </>
          }
           {
           (showOPtions.trim() === "PP") && 
           <>
            <ParaAdder/>
            <div className=' flex h-full  bg-red-500/0'>
            </div>
           </>
          }
        </div>
    </div>
  )
}

export default NewPost