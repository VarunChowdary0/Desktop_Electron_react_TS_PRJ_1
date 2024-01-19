import React, { useContext, useEffect, useState } from 'react'
// import { GlobalContext } from '../Contexts/GlobalContext'
import { UserInfoContext } from '../Contexts/UserInfoContext';
import MainPostComp from '../ExploreComps/MainPostComp';
import NewPost from './AddPostComponents/NewPost';
import { fetch_All_posts } from '../Controllers/FetchPosts';
import { helix } from 'ldrs'

helix.register()

const PostsComponent:React.FC = () => {
  const [ShowPostAdder,setPostAdder] = useState<boolean>(false)

  const {FetchedData,setFetchData} = useContext<any>(UserInfoContext);


  const [isLoading,setLoding] = useState<boolean>(FetchedData.length===0?true:false);

  const Fetch = async () =>{
    if(FetchedData.length === 0){
      const response = await  fetch_All_posts();
      if(response.status){
        setFetchData(response.data);
        setLoding(false);
        // console.log(response.data)
      }
      else{
        console.log("⚠️ Something went wrong !")
      }
    // console.log(FetchedData)
    }
    
  }
  useEffect(()=>{
    Fetch();
  },[])
  return (
    <div className='__posts__ h-fit w-full flex gap-10 flex-col-reverse
    items-center px-10 py-5 max-sm:px-5'>
      {!isLoading ?
        FetchedData.map((post:object,idx:number)=>
        <MainPostComp key={`_posts_`+idx} index={idx} DataObj={post}/>
        )
        :
        <div className=' h-[70vh] w-full flex
        items-center justify-center'>
          <l-helix
                    size="500"
                    speed="2.5" 
                    color="white" 
          ></l-helix>
        </div>
      }
      <div onClick={()=>{setPostAdder(true)}}
      className='__Skill__ fixed bottom-14 right-14 h-12 w-12 pb-2 shadow-md
       bg-blue-500 rounded-full flex justify-center max-sm:pb-0
        active:scale-110 transition-all items-center max-sm:right-3 '>
        <p className=' text-center text-white font-thin text-5xl max-sm:text-3xl'>+</p>
        <div className='__Remove__ absolute bottom-[-35px] rounded-md
        px-2 py-1 bg-black/20 w-[70px] text-xs max-sm:bottom-0 right-11
        dark:bg-white/20  text-white'>
          Add Post
        </div>
       </div>
       <div>
        <div className={` h-fit w-full fixed max-sm:z-[20] z-[100]
         ${ShowPostAdder?" translate-y-0":" translate-y-[110vh]"}
        bottom-0 right-0 left-0 transition-all duration-500 `}>
          <NewPost setPostAdder={setPostAdder}/>
        </div>
       </div>
    </div>
  )
}

export default PostsComponent