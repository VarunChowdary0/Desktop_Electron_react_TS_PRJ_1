import React, { useState } from 'react'
import TagComponent from './InnterComps/TagComponent';
interface CurrrentProps{
    MyPost : string;
	Paras : Array<string>;
}
const CustomPost:React.FC<CurrrentProps> = (props) => {
	const [readFull,setReadFull] = useState<boolean>(false)
  return (
    <div className=' h-fit w-full  max-sm:text-sm'>
			<TagComponent tags={["ai",'ml','deeplearning']}/>
				<div className='h-[450px] w-full'>
					<iframe width="100%" 
					height={"100%"}
					srcDoc={props.MyPost}
					></iframe>
				</div>
			<div className={` ${!readFull ? " overflow-hidden h-[115px] text-ellipsis " : "h-fit" }  transition-all  flex flex-col gap-3`}>
						{props.Paras.map((para,id)=>
							<p id={`BP-${id}`}>{para}</p>
						)}
			</div>
			<div onClick={()=>(setReadFull(!readFull))}
        className=' px-2 flex gap-2 hover:cursor-pointer justify-end'>
		<span className=' tracking-wider'>...</span>
				<p className=' font-semibold'>see {!readFull?"more":"less"}</p>
			</div>
	</div>
  )
}

export default CustomPost