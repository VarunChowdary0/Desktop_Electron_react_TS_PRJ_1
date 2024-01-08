import React, { useState } from 'react'
import LinkIcon from '../icons/Type3_icons/LinkIcon'
import TagComponent from './InnterComps/TagComponent'

interface CurrentProps{
	Paras : Array<string>;
	tags : Array<string>;
	prjInfo: {
		imgLink : string,
		prjLink : string
	} | any;
  }
const BlogPost:React.FC<CurrentProps> = (props) => {
	const [readFull,setReadFull] = useState<boolean>(false)
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm'>
        <div className={` flex flex-col gap-3 ${!readFull?"h-[110px] overflow-hidden ":"h-fit"} `}>
						{props.Paras.map((para,id)=>
							<p id={`BP-${id}`}>{para}</p>
						)}
				</div>
				<div onClick={()=>(setReadFull(!readFull))}
				className=' px-2 flex gap-2 hover:cursor-pointer justify-end'>
				<span className=' tracking-wider'>...</span>
				<p className=' font-semibold'>see {!readFull?"more":"less"}</p>
				</div>
				<TagComponent tags={props.tags}/>
				<div className=' w-full h-fit px-10 mt-4 flex justify-end'>
					<a href={props.prjInfo.prjLink}
					   target='_blank'
					 className=' h-[90px] w-[170px] overflow-hidden
					 bg-[#2f2f2f] rounded-lg relative  hover:cursor-pointer'>
						<img className='w-full' 
						src={props.prjInfo.imgLink}	
	 					alt="Not Found" />
						<div className=' absolute h-7 w-7
						 flex items-center justify-center
						 bg-white/10 backdrop:blur-sm bottom-0 right-0'>
							<LinkIcon/>
						</div>
					 </a>
				</div>
			</div>
  )
}

export default BlogPost