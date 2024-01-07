import React from 'react'
import TagComponent from './InnterComps/TagComponent';
interface CurrrentProps{
    MyPost : string;
	Paras : Array<string>;
}
const CustomPost:React.FC<CurrrentProps> = (props) => {
  return (
    <div className=' h-fit w-full  max-sm:text-sm'>
			<TagComponent tags={["ai",'ml','deeplearning']}/>
				<div className='h-[450px] w-full'>
					<iframe width="100%" 
					height={"100%"}
					srcDoc={props.MyPost}
					></iframe>
				</div>
			<div className=' overflow-y-auto h-[150px] text-ellipsis flex flex-col gap-3'>
						{props.Paras.map((para,id)=>
							<p id={`BP-${id}`}>{para}</p>
						)}
			</div>
	</div>
  )
}

export default CustomPost