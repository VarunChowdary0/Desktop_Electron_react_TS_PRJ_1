import React from 'react'
import StarIcon from '../../icons/Type3_icons/StarIcon'
import CommentsIcon from '../../icons/Type3_icons/CommentsIcon'
import ShareIcon from '../../icons/Type3_icons/ShareIcon'
import Git_hub from '../../icons/Git_hub';

interface CurrrentProps{
    isLiked : boolean;
    noOfStars : number;
    noOfComms : number;
    noOfShares : number;
    postID : string;
    showComments:boolean;
    setShowComments:React.Dispatch<React.SetStateAction<boolean>>;
    githubLink : string;
}
const PostFooter:React.FC<CurrrentProps> = (props) => {
    const handle_comms = () =>{
        props.setShowComments(!props.showComments)
        setTimeout(()=>{
            window.location.href = `#${props.postID}`
        },200)
    }
  return (
    <div className=' w-full h-[40px]
    px-5 justify-around  flex items-center'>
       <div className=' scale-125 hover:cursor-pointer '>
           <div className=' flex items-center gap-2 
           '>
               <div className=' active:scale-125 transition-all'>
                   <StarIcon 
                   color= {props.isLiked?'#FFD700' : '#969696'}
                   />
               </div>
           <p className=' text-[8px]'>{props.noOfStars}</p>
           </div>
       </div>
       <div onClick={handle_comms}  className=' scale-125 hover:cursor-pointer '>
           <div className=' flex items-center gap-2 
           '>
               <div className=' active:scale-125 transition-all'>
                   <CommentsIcon  
                   color='#969696'
                   />
               </div>
           <p className=' text-[8px]'>{props.noOfComms}</p>
           </div>
       </div>
       <div className=' scale-125 hover:cursor-pointer '>
           <div className=' flex items-center gap-2 
           '>
               <div className=' active:scale-125 transition-all'>
                   <ShareIcon  
                   color='#969696'
                   />
               </div>
           <p className=' text-[8px]'>{props.noOfShares}</p>
           </div>
       </div>
       {props.githubLink.trim()!=="" &&
       <div className=' scale-125 hover:cursor-pointer '>
           <div className=' flex items-center gap-2 
           '>
               <a href={props.githubLink} target='_balnk'
                className=' active:scale-125 transition-all'>
                   <Git_hub/>
               </a>
           </div>
       </div>
       }
   </div>
  )
}

export default PostFooter