import React from 'react'

interface CurrentProps{
    setPostAdder:React.Dispatch<React.SetStateAction<boolean>>;
}
const NewPost:React.FC<CurrentProps> = (props) => {
  return (
    <div className=' h-[100vh] w-full bg-white  flex-col
     flex items-center justify-center dark:bg-dark_dark_200/20 backdrop-blur-sm '>
        <div onClick={()=>{props.setPostAdder(false)}} className=' h-[20%] w-full '></div>
        <div className=' flex-1 w-full bg-white
         rounded-2xl flex items-center justify-center
        dark:bg-dark_dark_200/95 backdrop-blur-lg '>
            BEING DEVELOPED
        </div>
    </div>
  )
}

export default NewPost