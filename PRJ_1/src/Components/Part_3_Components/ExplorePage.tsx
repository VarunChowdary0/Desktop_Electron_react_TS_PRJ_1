import React, { useContext } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext'
import PostsComponent from '../../MiniComponents/PostsComponent';
import ContibutionsComponent from '../../MiniComponents/ContibutionsComponent';
import TrendingComponent from '../../MiniComponents/TrendingComponent';

const ExplorePage:React.FC = () => {
    const {ExploreSubPage,setExploreSubPage} = useContext<any>(UserInfoContext);
  return (
    <div className=' w-full h-fit min-h-screen max-sm:ml-0
     pb-10 flex items-center flex-col dark:text-white
     bg-[#eae8ed] gap-12 overflow-y-auto dark:bg-dark_dark_100
     pt-[50px] overflow-x-hidden mt-[50px]
    '>
        <div className=' w-full flex justify-around bg-white dark:bg-dark_dark_100
             font-light fixed top-0 pl-[100px] max-sm:pl-0 z-10  '>
            <div  onClick={()=>{
                setExploreSubPage("posts")
            }}
            className={` 
            ${(ExploreSubPage === "posts")&&"border-b-[4px] border-dark_Match_100"}
             p-3 max-sm:py-2 `}
            >Posts</div>
            <div onClick={()=>{
                setExploreSubPage("contributions")
            }}
            className={` 
            ${(ExploreSubPage === "contributions")&&"border-b-[4px] border-dark_Match_100"}
             p-3 max-sm:py-2 `}
            >Contributions</div>
            <div onClick={()=>{
                setExploreSubPage("trending")
            }}
            className={` 
            ${(ExploreSubPage === "trending")&&"border-b-[4px] border-dark_Match_100"}
             p-3 max-sm:py-2 `}
            >Trending</div>
        </div>

            {(ExploreSubPage === "posts")&&
                <PostsComponent/>
            }
            {(ExploreSubPage === "contributions")&&
                <ContibutionsComponent/>
            }
            {(ExploreSubPage === "trending")&&
                <TrendingComponent/>
            }
    </div>
  )
}

export default ExplorePage