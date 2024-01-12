import React, { useContext } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext';

interface CurrrentProps{
    profileUrl : string;
    name : string;
    occupation : string;
    USER_UID : string;
}
const PostHeader:React.FC<CurrrentProps> = (props) => {
  const {USER_UID} = useContext<any>(UserInfoContext);
  return (
    <div className=' h-[70px] flex max-sm:h-[50px] max-sm:mb-2
			w-full  items-center max-sm:gap-3 gap-5 relative hover:cursor-pointer'>
        <div className='h-[100%] w-[70px] bg-black/50 max-sm:w-[50px]
        rounded-2xl overflow-hidden'>
        <img src={props.profileUrl} alt="prf" />
        </div>
        <div>
            <p className=' max-sm:text-sm truncate font-light'>{props.name}</p>
            <p className=' text-dark_Match_300 truncate
             dark:text-dark_Match_600'>{props.occupation}</p>
            </div>
       {USER_UID !== props.USER_UID &&
        <abbr title={`Connect with ${props.name}`}>
          <div className=' absolute right-5 text-blue-400 
          max-sm:text-sm max-sm:mt-1'>Connect</div>
        </abbr>}
    </div>
  )
}

export default PostHeader