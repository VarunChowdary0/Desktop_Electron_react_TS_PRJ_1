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
        bg-[#8364f2] rounded-md '>
            {(isDarkMode)?
            <SunIcon/>
            :
            <MoonIcon/>
            }
        </div>
        <p className=' text-black'>{isDarkMode}</p>
    </div>
  )
}

export default DarkMode