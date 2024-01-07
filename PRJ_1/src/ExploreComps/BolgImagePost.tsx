import React from 'react'
import TagComponent from './InnterComps/TagComponent'

interface CurrentProps{
  Paras : Array<string>;
  imagesLinks : Array<string>;
}
const BolgImagePost:React.FC<CurrentProps>= (props) => {
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm overflow-hidden'>
        <div className=' flex flex-col gap-3'>
            {props.Paras.map((para,id)=>
             <p id={`BIP_para-`+id}>{para}</p>
            )}
            <TagComponent tags={["placements","internship","collage","competitiveprogramming"]}/>
           <div className=' p-3 flex overflow-x-auto gap-3 items-center snap-x'>
              {
                props.imagesLinks.map((link,idx)=>
                <img id={`_img_post_`+idx} className='  rounded-md h-fit w-fit snap-center' src={link} alt="NOT FOUND" />
                )
              }
           </div>
        </div>
    </div>
  )
}

export default BolgImagePost