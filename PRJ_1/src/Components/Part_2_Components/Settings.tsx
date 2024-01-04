import React, { useContext } from 'react'
import ProfileIcon from '../../icons/MenuIcons/ProfileIcon'
import { GlobalContext } from '../../Contexts/GlobalContext'
import DarkMode from '../../Functions/DarkMode';

const Settings:React.FC = () => {
    const {setRout} = useContext<any>(GlobalContext);

    const Open_Profile_Settings = () =>{
        setRout(
            '/manage/edit_profile'
        )
    }
    const LogOut = () =>{
        localStorage.clear()
        window.location.href='/';
    }
  return (
    <div className=' fixed top-0 bottom-0 left-0 right-0
    flex items-center overflow-y-auto 
     bg-[#ebebeb] dark:bg-dark_dark_100
    dark:text-white px-5 py-[80px] flex-col gap-10' >
        <div onClick={Open_Profile_Settings}
        className=' w-[80%]  h-[60px] shadow-md bg-white
         rounded-lg flex items-center px-5 max-sm:w-[90%]
          max-sm:h-[50px] gap-10 justify-around active:scale-95
        dark:bg-dark_dark_200/50 transition-all'>
            <p>Edit Frofile</p>
            <div className=' p-2  rounded-lg 
            border-[#dcdcdc]
            border-[1px] dark:border-[#272727]'>
                <ProfileIcon current={true}/>
            </div>
        </div>
        <div
        className=' w-[80%]  h-[60px] shadow-md bg-white
         rounded-lg flex items-center px-5 max-sm:w-[90%]
          max-sm:h-[50px] gap-10 justify-around transition-all
        dark:bg-dark_dark_200/50 active:scale-95'>
            <p>Theam</p>
            <div className=' hover:cursor-pointer'>
                <DarkMode/>
            </div>
        </div>
        <div className=' fixed bottom-10 max-sm:bottom-20 right-10'>
            <button onClick={LogOut}>Log Out</button>
        </div>
    </div>
  )
}

export default Settings