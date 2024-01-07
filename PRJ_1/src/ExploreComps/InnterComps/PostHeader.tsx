import React from 'react'

interface CurrrentProps{
    profileUrl : string;
    name : string;
    occupation : string
}
const PostHeader:React.FC<CurrrentProps> = (props) => {
  return (
    <div className=' h-[70px] flex max-sm:h-[50px]
			w-full  items-center max-sm:gap-3 gap-5 relative hover:cursor-pointer'>
        <div className='h-[100%] w-[70px] bg-black/50 max-sm:w-[50px]
        rounded-2xl overflow-hidden'>
        <img src={props.profileUrl} alt="prf" />
        </div>
        <div>
            <p className=' max-sm:text-sm font-light'>{props.name}</p>
            <p className=' text-dark_Match_300 dark:text-dark_Match_600'>{props.occupation}</p>
            </div>
        <div className=' absolute right-5 text-blue-400'>Connect</div>
    </div>
  )
}

export default PostHeader