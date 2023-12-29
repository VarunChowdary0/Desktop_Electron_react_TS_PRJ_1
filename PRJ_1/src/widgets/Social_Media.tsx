import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

export const Social_Media:React.FC = () => {
  const {Links,icons_Store} = useContext<any>(GlobalContext)
  return (
    <div className=' w-[500px] 
    bg-gradient-to-r from-indigo-500 to-pink-500
      max-sm:w-[300px] rounded-md p-1
    h-fit shadow-2xl flex items-center justify-center'>
      <div className='flex justify-center flex-1  bg-[#fcfcfc] gap-5 flex-col '>
      <h1 className=' text-center pr-[20px] font-extrabold  py-7
        text-[#1cceff]  text-2xl'>Technical Platforms</h1>
      <div className=' flex flex-col mb-5'>
        {Object.keys(Links).map((socialMedia) => {
                  const linkData = Links[socialMedia];
              return (
                <>
                {
                  (linkData.link.trim() !== "")?
                  <div key={socialMedia} className='scale-125 max-sm:pr-[80px] flex 
                  items-center justify-center mb-6 '>
                    <a className=' bg-black/0 py-1 max-h-7 rounded-lg  w-[50%] flex 
                    flex-row items-center gap-5 pl-5' href={linkData.link} target='_blank'>
                      <span className=' w-0 mr-10'>
                        {icons_Store[linkData.icon] && React.cloneElement(icons_Store[linkData.icon])}
                      </span>
                      <p className=' text-sm text-sky-500 font-mono'>{socialMedia.replace("_","")}</p>
                    </a>
                  </div>
                  :
                  <div></div>
                }
                
                </>
              );
            })}
      </div>
      </div>
      <div className={` bg-gradient-to-r from-green-500 to-yellow-500`}></div>
      
    </div>
  )
}
