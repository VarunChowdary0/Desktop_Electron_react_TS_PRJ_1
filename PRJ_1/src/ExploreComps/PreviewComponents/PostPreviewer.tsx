import React, { useContext } from 'react'
import MainPostComp from '../MainPostComp';
import { UserInfoContext } from '../../Contexts/UserInfoContext';

interface CurrentProps{
    Data : object;
}
const PostPreviewer:React.FC<CurrentProps> = (props) => {
  const {setPreview} = useContext<any>(UserInfoContext);

  return (
    <div className=' fixed left-0 z-[100] right-0 py-[50px]
     flex items-center justify-center bg-black/20 backdrop-blur
     bottom-0 top-0'>
        <div onClick={()=>setPreview(false)} className=' absolute top-0 left-0 
        right-0 bottom-0 bg-[#1b1a1a4d] backdrop-blur-lg  z-0  overflow-auto'></div>
        <div className=' z-50'>
        <MainPostComp DataObj={props.Data} />
        </div>
    </div>
  )
}

export default PostPreviewer