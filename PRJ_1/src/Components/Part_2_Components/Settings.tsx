import React, { useContext } from 'react'
import ProfileIcon from '../../icons/MenuIcons/ProfileIcon'
import { GlobalContext } from '../../Contexts/GlobalContext'
import DarkMode from '../../Functions/DarkMode';
import Stat_Pie_Icon from '../../icons/MenuIcons/Stat_Pie_Icon';

const Settings:React.FC = () => {
    const {setRout} = useContext<any>(GlobalContext);

    const Open_Profile_Settings = () =>{
        setRout(
            '/manage/edit_profile'
        )
    }
    const Open_Stats = () => {
        setRout(
            '/stats'
        )
    }
    const LogOut = () =>{
        localStorage.clear()
        window.location.href='/';
    }
  return (
    <div className=' fixed top-0 bottom-0 left-0 right-0
    flex items-center overflow-y-auto max-sm:text-sm
     bg-[#ebebeb] dark:bg-dark_dark_100
    dark:text-white px-5 py-[80px] flex-col gap-10' >
        <div onClick={Open_Profile_Settings}
        className=' w-[80%]  h-[60px] shadow-md bg-white
         rounded-lg flex items-center px-5 max-sm:w-[90%]
          max-sm:h-[50px] gap-10 justify-around active:scale-95
        dark:bg-dark_dark_200/50 transition-all'>
            <p className=' w-fit'>Edit Frofile</p>
            <div className=' hover:cursor-pointer'>
                <ProfileIcon current={true}/>
            </div>
        </div>
        <div
        className=' w-[80%]  h-[60px] shadow-md bg-white
         rounded-lg flex items-center px-5 max-sm:w-[90%]
          max-sm:h-[50px] gap-10 justify-around transition-all
        dark:bg-dark_dark_200/50 active:scale-95'>
            <p className=' w-fit'>Theam</p>
            <div className=' hover:cursor-pointer'>
                <DarkMode/>
            </div>
        </div>
        <div onClick={Open_Stats}
        className=' w-[80%]  h-[60px] shadow-md bg-white
         rounded-lg flex items-center px-5 max-sm:w-[90%]
          max-sm:h-[50px] gap-10 justify-around transition-all
        dark:bg-dark_dark_200/50 active:scale-95'>
            <p className=' w-fit'>Statistics</p>
            <div className=' hover:cursor-pointer'>
                <Stat_Pie_Icon/>
            </div>
        </div>
        <div className=' rounded-full fixed bottom-10 max-sm:bottom-20 right-10 
        border-[2px] dark:border-[1px] hover:border-[#fff0] hover:text-white transition-all'>
            <button  onClick={LogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default Settings