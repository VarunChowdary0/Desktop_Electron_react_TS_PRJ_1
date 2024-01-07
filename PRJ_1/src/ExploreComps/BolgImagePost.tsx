import React, { useState } from 'react'
import TagComponent from './InnterComps/TagComponent'

interface CurrentProps{
  Paras : Array<string>;
  imagesLinks : Array<string>;
}
const BolgImagePost:React.FC<CurrentProps>= (props) => {
  const [readFull,setReadFull] = useState<boolean>(false)
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm overflow-hidden'>
        <div className={` flex flex-col gap-3 ${!readFull?"h-[110px] overflow-hidden ":"h-fit"} `}>
            {props.Paras.map((para,id)=>
             <p id={`BIP_para-`+id}>{para}</p>
            )}
        </div>
        <div onClick={()=>(setReadFull(!readFull))}
        className=' px-2 flex gap-2 hover:cursor-pointer justify-end'>
          <span className=' tracking-wider'>...</span>
          <p className=' font-semibold'>see {!readFull?"more":"less"}</p>
        </div>
        <TagComponent tags={["placements","internship","collage","competitiveprogramming"]}/>
        <div className=' p-3 flex overflow-x-auto gap-3 items-center snap-x'>
              {
                props.imagesLinks.map((link,idx)=>
                <img id={`_img_post_`+idx} className='  rounded-md h-fit w-fit snap-center' src={link} alt="NOT FOUND" />
                )
              }
        </div>
    </div>
  )
}

export default BolgImagePost