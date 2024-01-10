import React from 'react'
import TagComponent from './InnterComps/TagComponent'
import ParaFormater from './InnterComps/ParaFormater';

interface CurrentProps{
  Paras : Array<string>;
  imagesLinks : Array<string>;
  tags : Array<string>;
}
const BolgImagePost:React.FC<CurrentProps>= (props) => {
  const x = props.imagesLinks.length;
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm overflow-hidden'>
        <ParaFormater Paras={props.Paras} />
        <TagComponent tags={props.tags}/>
        <div className=' p-3 flex overflow-x-auto gap-3 items-center lex-shrink-0 snap-x'>
              {
                props.imagesLinks.map((link,idx)=>
               <>
                <div className='__Skill__ flex-shrink-0 w-fit relative'>
                 {(x>1) && <div className=' absolute top-3 right-2 px-3 py-1 bg-black/50
                   text-xs __Remove__ text-white
                   rounded-md flex items-center justify-center '>
                    {idx+1} / {x}
                  </div>}
                  <img id={`_img_post_`+idx} className='  rounded-md h-fit w-fit snap-center' 
                  src={link} alt="NOT FOUND" />
                </div>
               </>
                )
              }
        </div>
    </div>
  )
}

export default BolgImagePost