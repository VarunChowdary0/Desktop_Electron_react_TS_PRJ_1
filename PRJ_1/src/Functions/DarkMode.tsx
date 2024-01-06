import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

const DarkMode:React.FC = () => {
    const {isDarkMode,setDarkMode} = useContext<any>(GlobalContext)
    const ToggleDarkMode = () =>{
        setDarkMode(!isDarkMode);
        localStorage.setItem("isDark",JSON.stringify(!isDarkMode));
    }
  return (
    <div className=' max-sm:ml-[30%] ml-[100%]'>
        <div onClick={ToggleDarkMode}
        className='z-50 h-8 w-8
         flex items-center justify-center
        bg-[] rounded-md '>
            {(isDarkMode)?
            <div className='__Skill__ relative'>
              <SunIcon/>
              <div className='__Remove__ absolute bottom-[-37px] rounded-lg px-2 py-1 
              dark:bg-white/30'>
                Lumos!
              </div>
            </div>
            :
            <div className=' relative'>
              <MoonIcon/>
              <div className=' absolute bottom-[-37px] rounded-lg px-2 py-1 
              bg-black/30 text-white'>
                Nox!
              </div>
            </div>
            }
        </div>
        <p className=' text-black'>{isDarkMode}</p>
    </div>
  )
}

export default DarkMode