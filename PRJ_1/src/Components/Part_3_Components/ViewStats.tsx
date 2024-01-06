import React, { useContext } from 'react'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { UserInfoContext } from '../../Contexts/UserInfoContext'

const ViewStats:React.FC = () => {
    const {
        profileLink,
        name
    } = useContext<any>(GlobalContext)
    const {username} = useContext<any>(UserInfoContext);
  return (
    <div className=' w-full h-fit min-h-screen pb-10
    flex items-center flex-col pt-[200px] max-sm:pt-[100px]
      dark:text-white bg-[#eae8ed] gap-12 overflow-y-auto
      dark:bg-dark_dark_100 '>
        <div className=' w-[80%] h-[300px] 
         max-md:flex-col max-md:h-fit
         border-[1px] flex bg-white dark:bg-dark_dark_200/90
          rounded-r-[20px] max-sm:gap-14 right_bottom_shadow
           rounded-[50vh] items-center gap-10
        shadow-xl dark:border-none transition-all'>
            <div className=' h-[320px] w-[320px] dark:bg-dark_dark_100
             bg-[#eae8ed]
            rounded-full flex items-center justify-center'>
                <div className=' max-md:w-[300px] max-md:h-[300px] 
                h-[100%] w-[100%] bg-[#3c3c3c]
                overflow-hidden rounded-full  '>
                    <img className=' select-none hover:scale-110 transition-all'
                    alt='RETRY' src={profileLink}/>
                </div>
            </div>
            <div className=' flex items-center flex-1 
             justify-around  max-md:flex-col gap-10'>
                <div className='
                 max-sm:pl-5 max-sm:items-end max-sm:px-3
                bg-black/0 flex flex-col gap-3'>
                    <p className=' text-2xl
                    max-sm:text-xl
                    font-thin'>{name}</p>
                    <p className=' opacity-50 text-md'>{username}</p>
                </div>
                <div className=' __Skill__  h-[100px] w-fit px-7 rounded-md
                flex items-center justify-end
                max-sm:scale-75 relative hover:cursor-help
                bg-orange-500 text-white gap-4'>
                    <p className=' text-5xl'>1000</p> 
                    <span className=' font-thin text-center 
                    text-xl pt-3'>
                        CS
                    </span>
                    <div className=' absolute __Remove__
                     bottom-[-40px] right-[-20px]
                    px-2 py-1 bg-black/25 
                    rounded-sm'>
                        Credit score
                    </div>
                </div>
            </div>
        </div>
        <div className=' bg-black/0  w-[80%] flex gap-5'>
            <div className=' text-white flex items-center gap-3
             px-5 py-2 bg-purple-500 rounded-md w-fit'>
                <p className=' text-xl'>133</p>
                <span className=' text-xs pt-1 font-thin'>Connections.</span>
            </div>
            <div className=' text-white flex items-center gap-3 
             px-5 py-2 bg-purple-500 rounded-md w-fit'>
                <p className=' text-xl'>6</p>
                <span className=' text-xs pt-1 font-thin'>Contributions.</span>
            </div>
        </div>
    </div>
  )
}

export default ViewStats