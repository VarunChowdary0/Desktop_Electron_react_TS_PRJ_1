import React, {  useState } from 'react'
import ReportAssembler from './ReportAssembler';
import BlogImagePostAssembler from './BlogImagePostsManager/BlogImagePostAssembler';
import CustomAssembler from './CustomBlogComps/CustomAssembler';

interface CurrentProps{
    setPostAdder:React.Dispatch<React.SetStateAction<boolean>>;
}
const NewPost:React.FC<CurrentProps> = (props) => {
  const [showOPtions,setOptions] = useState<string>("");
  return (
    <div className=' h-[100vh] w-full bg-[#f2ebeb]/10  flex-col
     flex items-center justify-center dark:bg-dark_dark_200/20 backdrop-blur-sm '>
        <div onClick={()=>{props.setPostAdder(false)}} 
        className=' h-[10%] max-sm:h-[15%] w-full '></div>
        <div className=' flex-1 w-full bg-[#f1eeee]/90 border-t 
        border-[#b5b4b4] shadow-xl dark:border-[#393939]
         rounded-2xl flex items-center max-sm:flex-col 
        dark:bg-dark_dark_200/95 backdrop-blur-lg relative overflow-y-auto'>
          {
            (showOPtions.trim() === "" ) ?
            <div className=' absolute w-full max-sm:flex-col max-sm:mt-[100px]  flex items-center justify-center gap-10'>
              <div className=' border px-3 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer'
               onClick={()=>setOptions('RBP')}>Report Blog Post</div>
              <div  className=' border px-5 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer '
               onClick={()=>setOptions('BPP')}>Pitures Post</div>
              <div  className=' border px-5 py-2 bg-[#fcfbfb] text-black font-thin
               rounded-md hover:scale-110 transition-all shadow-lg hover:cursor-pointer'
               onClick={()=>setOptions('CBP')}>Custom Blog Post</div>
            </div>
            :
           (showOPtions.trim() === "RBP") && 
           <ReportAssembler setOptions={setOptions}/>
          }
           {
           (showOPtions.trim() === "BPP") && 
           <>
           <BlogImagePostAssembler setOptions={setOptions}/>
           </>
          }
           {
           (showOPtions.trim() === "CBP") && 
           <>
            <CustomAssembler setOptions={setOptions}/>
           </>
          }
        </div>
    </div>
  )
}

export default NewPost