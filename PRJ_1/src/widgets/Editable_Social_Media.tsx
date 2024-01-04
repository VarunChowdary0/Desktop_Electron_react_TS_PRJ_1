import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import Edit_SocialMedia from '../PopUps/Edit_SocialMedia'
import PenIcon from '../icons/PenIcon'

export const Editabel_Social_Media:React.FC = () => {
  const {
    Links,
    icons_Store,setSync,
    showEdiatPlatForm,setShowEditPlatform
    } = useContext<any>(GlobalContext)
    const [Currnent_Edit,setCurrnetEdit] = useState<string>("Git_hub")
  const Add_NEW_LINK = (x:string) =>{
    setShowEditPlatform(true);
    setCurrnetEdit(x);
    // console.log(Links[x])
    setSync(true)
  } 
  return (
    <div className=' w-[500px] 
    bg-gradient-to-r from-indigo-500 to-pink-500
      max-sm:w-[300px] rounded-md p-1 z-0
    h-fit shadow-2xl flex items-center justify-center'>
      <div className='flex justify-center flex-1
       dark:bg-dark_dark_200
      bg-[#fcfcfc] gap-5 flex-col py-10 '>
        <h1 className=' text-center pr-[20px] font-extrabold 
        text-[#1cceff]  text-2xl'>Technical Platforms</h1>
              {Object.keys(Links).map((socialMedia) => {
                  const linkData = Links[socialMedia];
                  if (socialMedia!=="_id"){
                  return (
                    <div key={socialMedia} className='scale-125 max-sm:pr-[80px] flex relative items-center justify-center'>
                      <div className='bg-black/0 py-1 max-h-7 rounded-lg w-[50%] flex flex-row items-center gap-5 pl-5'>
                        <a className='flex items-center gap-5 max-sm:gap-2' href={linkData.link} target='_blank'>
                          <span className='w-0 mr-10'>
                            {icons_Store[linkData.icon] && React.cloneElement(icons_Store[linkData.icon])}
                          </span>
                          <p className='text-sm text-orange-500 font-mono'>{socialMedia.replace('_', '')}</p>
                        </a>
                        <div>
                          <abbr title='Add Link?'>
                            <div
                              onClick={() => {
                                Add_NEW_LINK(socialMedia);
                              }}
                              className={`absolute h-5 right-[70px] bottom-2 flex max-sm:right-10
                                      items-center justify-center rounded-${linkData.link !== '' ? 'full' : 'sm'} 
                                      w-5 bg-${linkData.link !== '' ? 'black/30' : '#393939'}/60 
                                      hover:bg-${linkData.link !== '' ? 'black/30' : '#393939'} transition-all
                                      text-white pb-1`}
                            >
                              {linkData.link !== "" ? (
                                <div className='scale-75 max-sm:scale-50'>
                                  <PenIcon color='#828282' size={0.5} />
                                </div>
                              ) : (
                                  <div className= " h-5 w-5 bg-[#393939]/60 dark:bg-dark_dark_400 hover:bg-[#393939] flex items-center justify-center rounded-md pb-1 max-sm:pb-0"
                                  >
                                    +
                                  </div>
                              )}
                                </div>
                              </abbr>
                            </div>
                          </div>
                        </div>
                      );
                  }
                })}

      </div>
      <div className={` bg-gradient-to-r from-green-500 to-yellow-500`}></div>
      {showEdiatPlatForm&&<Edit_SocialMedia NAME={Currnent_Edit}/>}
    </div>
  )
}
