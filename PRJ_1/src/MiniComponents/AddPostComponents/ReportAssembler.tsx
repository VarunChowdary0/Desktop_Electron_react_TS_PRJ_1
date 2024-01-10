import React, { useState } from 'react'
import TagManager from './TagManager';

const ReportAssembler:React.FC = () => {
    const [tagArr,setTags] = useState<Array<string>>(["placements","internship","collage",
    "competitiveprogramming","mern"]);
    const [CurrnetTag,setCurrentTag] = useState<string>("");
    
  return (
    <div className=' flex-1 h-full max-sm:w-full  bg-red-500/0 p-5
     max-sm:mb-[100px] flex flex-col gap-4'>
        {/* <div className=' h-[300px]'></div> */}
        <TagManager tagArr={tagArr}
        setTags={setTags}
        CurrnetTag={CurrnetTag}
        setCurrentTag={setCurrentTag}/>
        <div className=' h-full w-full bg-black/20 rounded-md'>
            
        </div>
    </div>
  )
}

export default ReportAssembler