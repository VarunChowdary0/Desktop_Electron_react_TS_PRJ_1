import React, { useContext, useState } from 'react'
import MainPostComp from '../MainPostComp';
import { UserInfoContext } from '../../Contexts/UserInfoContext';
import { upload_new_post } from '../../Controllers/UploadNewPost';
import { orbit } from 'ldrs'

orbit.register()

interface CurrentProps{
    Data : object;
    index : number;
}
const PostPreviewer:React.FC<CurrentProps> = (props) => {
  const [isLoad,setLoad] = useState<boolean>(false);
  const [showButtom,setButton] = useState<boolean>(true);
  const {setPreview,setOptions} = useContext<any>(UserInfoContext);
  const [message,setMsg] = useState<string>("")
  // console.log(props.Data)
const postIT = async () => {
    setButton(false);
    setLoad(true);
    const RESPONSE = await upload_new_post(props.Data);
    console.log(RESPONSE);
    if(RESPONSE.status){
      console.log("OK");
      setLoad(false);
      setMsg("😃 Post Saved !")
      setOptions("")
    }
    else{
      console.log("Failed")
      setLoad(false);
      setButton(true);
      setMsg("⚠️ Something went wrong, try again !")
    }
    setTimeout(()=>{
      setMsg("");
      setTimeout(()=>{
        setPreview(false)
      },500)
    },2000)
  }
  return (
    <div className=' fixed left-0 z-[100] right-0 py-[50px]
     flex items-center justify-center bg-black/20 backdrop-blur
     bottom-0 top-0  flex-col gap-5 overflow-y-auto max-h-[100vh] '>
        <div onClick={()=>setPreview(false)} className=' absolute top-0 left-0 
        right-0 bottom-0 bg-[#1b1a1a4d] backdrop-blur-lg  z-0  overflow-auto'></div>
          <div className=' z-50 max-h-[700px] overflow-y-auto rounded-md '>
            <MainPostComp DataObj={props.Data} index={props.index} />
          </div>
      <div className=' absolute top-10 right-10'>
      { showButtom &&
           <div className=' bg-black rounded-3xl
        active:scale-75 transition-all text-white '>
          <button onClick={postIT}>Post</button>
          </div>}
          { isLoad &&
            <l-orbit
            size="19"
            speed="1.1" 
            color="white" 
          ></l-orbit>
          }
         {(message.length>0) &&
          <div className=' px-3 py-1 bg-white z-50 rounded-lg'>
            <p className=' text-black'>{message}</p>
          </div>}
      </div>
    </div>
  )
}

export default PostPreviewer