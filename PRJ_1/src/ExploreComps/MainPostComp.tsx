import React, { useState } from 'react'
import PostHeader from './InnterComps/PostHeader';
import BlogPost from './BlogPost';
import BolgImagePost from './BolgImagePost';
import CustomPost from './CustomPost';
import DivideLine from '../MiniCopms/DivideLine';
import PostFooter from './InnterComps/PostFooter';
import CommentsComp from './CommentsComp';
import CloseIcon from '../icons/CloseIcon';
import AddComment from './AddComment';
interface CurrentProps {
    DataObj: {
      postID: string;
      identifiers: string[];
      type: string;
      name: string;
      occupation: string;
      profileLink: string;
      Paras: string[];
      tags: string[];
      images?: string[] | undefined; // Make images optional
      likedBy :string[], // _ usernames _
      isLiked: boolean;
      Post_code?: string | undefined; // Make Post_code optional
      prjInfo: {
        imgLink: string;
        prjLink: string;
      } | undefined;
      noOfStars: number;
      noofCommas: number;
      noOfShares: number;
    } | any ;
  }
  
const MainPostComp:React.FC<CurrentProps> = (props) => { 
    const [showComments,setShowComments] = useState<boolean>(false)
   
  return (
    <div className=' flex gap-4  max-sm:flex-col w-fit transition-all overflow-hidden'>
        <div className=" w-[500px] h-fit  bg-white
        dark:bg-dark_dark_200 dark:text-white shadow-sm
        max-sm:w-[100%] flex flex-col p-2 rounded-md gap-3">
            <PostHeader name={props.DataObj.name} profileUrl={props.DataObj.profileLink} occupation={props.DataObj.occupation}/>
            {
            props.DataObj.type === 'BlogPost' && 
            <BlogPost prjInfo={props.DataObj.prjInfo} Paras={props.DataObj.Paras} tags={props.DataObj.tags}/>
            }
            {
            props.DataObj.type === 'BlogImagePost' &&
            <BolgImagePost Paras={props.DataObj.Paras} imagesLinks={props.DataObj.images||[]} tags={props.DataObj.tags}/>
            }
            {
            props.DataObj.type === 'CustomPost' &&
            <CustomPost Paras={props.DataObj.Paras} 
            MyPost={props.DataObj.Post_code || ""}
            tags={props.DataObj.tags}
            />
            }
            <DivideLine/>
            <PostFooter isLiked={props.DataObj.isLiked} noOfStars={props.DataObj.noOfStars} 
            noOfComms={props.DataObj.noofCommas}  noOfShares={props.DataObj.noOfShares}  
            showComments={showComments} setShowComments={setShowComments} postID={props.DataObj.postID} />
        </div>
        <div className=' flex flex-col gap-3' >
            <div className={` ${showComments?"w-[400px] h-[300px] max-sm:h-[260px] "
            :"w-0 h-0 opacity-0" }
                __comments__  snap-y 
                max-sm:w-[100%] bg-white dark:bg-dark_dark_200 relative overflow-y-auto
                transition-all  rounded-md`}>
                <div className=' sticky top-4 flex w-full justify-end px-3
                 hover:cursor-pointer
                    active:scale-110 transition-all z-[2]' 
                onClick={()=>setShowComments(!showComments)}>
                    <CloseIcon color='black' size={1}/>
                </div>
                {showComments&&<CommentsComp postID={props.DataObj.postID}/>}
            </div>
            <div className={` ${showComments?"w-[400px] h-[90px] max-sm:h-[80px] "
            :"w-0 h-0 opacity-0" }
                __comments__  snap-y 
                max-sm:w-[100%] bg-white dark:bg-dark_dark_200 relative overflow-y-auto
                transition-all  rounded-md`}>
                <AddComment/>
            </div>
        </div>
    </div>
  )
}

export default MainPostComp