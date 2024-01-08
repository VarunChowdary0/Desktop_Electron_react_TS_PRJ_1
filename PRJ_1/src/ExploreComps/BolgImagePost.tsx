import React from 'react'
import TagComponent from './InnterComps/TagComponent'
import ParaFormater from './InnterComps/ParaFormater';

interface CurrentProps{
  Paras : Array<string>;
  imagesLinks : Array<string>;
  tags : Array<string>;
}
const BolgImagePost:React.FC<CurrentProps>= (props) => {
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm overflow-hidden'>
        <ParaFormater Paras={props.Paras} />
        <TagComponent tags={props.tags}/>
        <div className=' p-3 flex overflow-x-auto gap-3 items-center snap-x'>
              {
                props.imagesLinks.map((link,idx)=>
                <img id={`_img_post_`+idx} className='  rounded-md h-fit w-fit snap-center' 
                src={link} alt="NOT FOUND" />
                )
              }
        </div>
    </div>
  )
}

export default BolgImagePost