import React from 'react'
import TagComponent from './InnterComps/TagComponent';
import ParaFormater from './InnterComps/ParaFormater';
interface CurrrentProps{
    MyPost : string;
	Paras : Array<string>;
	tags : Array<string>;
}
const CustomPost:React.FC<CurrrentProps> = (props) => {
  return (
    <div className=' h-fit w-full  max-sm:text-sm'>
			<TagComponent tags={props.tags}/>
				<div className='h-[450px] w-full'>
					<iframe width="100%" 
					height={"100%"}
					srcDoc={props.MyPost}
					></iframe>
				</div>
			<ParaFormater Paras={props.Paras}/>
	</div>
  )
}

export default CustomPost