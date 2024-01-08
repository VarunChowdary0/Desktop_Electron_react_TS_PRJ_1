import React from 'react'
import DivideLine from '../MiniCopms/DivideLine'

interface CurrentProps{
    postID : string;
}
const CommentsComp:React.FC<CurrentProps> = (props) => {
  return (
    <div className=' text-black dark:text-white 
     snap-start flex-col relative
    flex items-center  px-7'>
        <div className=' absolute h-5 w-5 bg-black/0 opacity-0 max-sm:top-[-400px]
         top-[-130px] right-0' id={props.postID}></div>
        <div  className=' sticky top-0 py-3 bg-white
            border-b border-[#555]
         dark:bg-dark_dark_200 w-full'>
            Comments
        </div>
        <div className=' flex flex-col h-full w-full'>
            <div className='flex w-full h-fit p-3 flex-col mt-3  items-start px-3 gap-2'>
                <div className=' flex gap-3'>
                    <div className=' h-[30px] w-[30px] rounded-2xl overflow-hidden
                    bg-[#141414] flex items-center justify-center'>
                        <img src='https://blog-it-backend-sandy.vercel.app/images/896313_profile.png'/>
                    </div>
                    <div>
                        <p className=''>Varun</p>
                    </div>
                </div>
                <div>
                    <p className=' font-thin text-sm'>
                        I wonder how much more of the full bringers 
                        we’ll get since almost all of them felt like they 
                        just showed up to say hi and left
                        </p>
                </div>
            </div>
            <DivideLine/>
            <div className='flex  w-full h-fit p-3 flex-col mt-3 items-start px-3 gap-2'>
                <div className=' flex gap-3'>
                    <div className=' h-[30px] w-[30px] rounded-2xl overflow-hidden
                    bg-[#141414] flex items-center justify-center'>
                        <img src='https://blog-it-backend-sandy.vercel.app/images/896313_profile.png'/>
                    </div>
                    <div>
                        <p className=''>Varun</p>
                    </div>
                </div>
                <div>
                    <p className=' font-thin text-sm'>
                        I wonder how much more of the full bringers 
                        we’ll get since almost all of them felt like they 
                        just showed up to say hi and left
                        </p>
                </div>
            </div>
            <DivideLine/>
            <div className='flex  w-full h-fit p-3 flex-col mt-3 items-start px-3 gap-2'>
                <div className=' flex gap-3'>
                    <div className=' h-[30px] w-[30px] rounded-2xl overflow-hidden
                    bg-[#141414] flex items-center justify-center'>
                        <img src='https://blog-it-backend-sandy.vercel.app/images/896313_profile.png'/>
                    </div>
                    <div>
                        <p className=''>Varun</p>
                    </div>
                </div>
                <div>
                    <p className=' font-thin text-sm'>
                        I wonder how much more of the full bringers 
                        we’ll get since almost all of them felt like they 
                        just showed up to say hi and left
                        </p>
                </div>
            </div>
        </div>
        <div id="Scroll_btm"></div>
    </div>
  )
}

export default CommentsComp