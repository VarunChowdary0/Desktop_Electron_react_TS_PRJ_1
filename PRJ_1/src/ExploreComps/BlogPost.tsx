import React from 'react'
import LinkIcon from '../icons/Type3_icons/LinkIcon'
import TagComponent from './InnterComps/TagComponent'

interface CurrentProps{
	Paras : Array<string>;
  }
const BlogPost:React.FC<CurrentProps> = (props) => {
  return (
    <div className='h-fit  w-full bg-red-700/0 max-sm:text-sm'>
				<div className=' flex flex-col gap-3'>
						{props.Paras.map((para,id)=>
							<p id={`BP-${id}`}>{para}</p>
						)}
					<TagComponent tags={["mern","webdevelopment","fullstack","node","react","mongodb"]}/>
				</div>
				<div className=' w-full h-fit px-10 mt-4 flex justify-end'>
					<a href='https://blog-it-ten.vercel.app/'
					   target='_blank'
					 className=' h-[90px] w-[170px] overflow-hidden
					 bg-[#2f2f2f] rounded-lg relative  hover:cursor-pointer'>
						<img className='w-full' 
						src='https://blog-it-ten.vercel.app/static/media/home_pc.c323c8481dd5355b7845.png'	
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