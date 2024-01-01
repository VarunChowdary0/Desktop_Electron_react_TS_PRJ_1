import React, { useContext, useState } from 'react'
import PasswordIcon from '../../icons/PasswordIcon';
import EyeIcon from '../../icons/EyeIcon';
import { DarkFounderLogo, LightFounderLogo } from '../../assets/Resources';
import DarkMode from '../../Functions/DarkMode';
import { GlobalContext } from '../../Contexts/GlobalContext';

const Register:React.FC = () => {
    const [RegisterMode,setRegisterMode] = useState<string>("login");
    const [isShowPassword,setShowPassword] = useState<boolean>(false);
    const {setRout} = useContext<any>(GlobalContext);
    const TogglePassword = () => {
      setShowPassword(true)
      setTimeout(()=>{
        setShowPassword(false)
      },1200)
    }
  return (
    <div className=' flex items-center justify-center
     fixed top-0 bottom-0 right-0 left-0
     dark:bg-dark_dark_100 transition-all max-sm:pb-12
       max-sm:text-sm
     ' 
    >
      <div className=' fixed top-[-100px] 
      gap-4 scale-125 flex items-center'>
        <div className=" flex  scale-125">
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>R</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>E</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>z</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>Z</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>U</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>M</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>Y</div>
        </div>
        <div className="">
          <div className=" w-[60px]">
            <img className=" rounded-full invisible h-0 dark:visible dark:h-fit" src={DarkFounderLogo} alt="" />
            <img className=" rounded-full dark:hidden" src={LightFounderLogo} alt="" />
          </div>
        </div>
      </div>


      <div 
      onClick={
        ()=>setRegisterMode((RegisterMode==="login")?"":'login')
      }
         className=' fixed top-[85vh]  bottom-[100px]  dark:text-white text-lg'>
          {
            RegisterMode === 'login' ?
            "New Here ?"
            :
            "Already have an account ?"
          }
      </div>
      <div className={`  __login__ fixed  w-full flex 
      items-center justify-center
      ${(RegisterMode==="login"?"translate-x-0 scale-100"
      :"translate-x-[-100vw] scale-150 opacity-0") }
       transition-all duration-500  `}>
          <div className={` h-fit py-8 w-[500px] max-sm:w-[75%] 
           dark:bg-dark_dark_200  dark:border-0 border-[1px] transition-all
         bg-white rounded-md shadow-xl`}>
            <div className=' p-4 flex flex-col items-center gap-[50px]'>
                <div className=' text-3xl 
                 dark:text-dark_Match_500 transition-all
                text-center'>Login</div>
                <div className=' flex flex-col gap-10 w-full items-center 
                 dark:text-white transition-all'>
                    <input className=' w-[80%] outline-none
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Username' />

                    <div className='w-[80%] relative'>
                      <input className=' w-[100%] outline-none
                      border-b-2 px-4 py-2 font-thin tracking-widest
                      ' type={isShowPassword?"text":"password"} 
                      placeholder='Password' />
                      <div onClick={TogglePassword}
                      className=' hover:cursor-pointer absolute right-3 top-3 w-5 h-5'>
                        {
                          isShowPassword?
                          <EyeIcon/>
                          :
                          <PasswordIcon/>
                        }
                      </div>
                    </div>
                </div>
                <button className='  hover:text-white dark:bg-dark_Match_500
                 shadow-light dark:shadow-dark
                 active:scale-90 transition-all font-thin'>Submit</button>
            </div>
            <abbr title="Get help">
              <div className=' text-indigo-500 text-center mt-5 
              hover:cursor-pointer hover:underline'>
                <i>forgot your password ?</i>
              </div>
            </abbr>
         </div>
      </div>
      <div className={`  __signup__ fixed  flex
       items-center justify-center w-full
      ${(RegisterMode!=="login"?"translate-x-0 scale-100"
      :"translate-x-[100vw] scale-150 opacity-0") } transition-all duration-500`}>
          <div className={` h-fit py-8 w-[500px] max-sm:w-[75%] border-[1px]
         bg-white 
         dark:bg-dark_dark_200  dark:border-0 transition-all
          rounded-md shadow-xl`}>
            <div className=' p-4 flex flex-col items-center gap-[50px]'>
                <div className=' text-3xl text-center
                 dark:text-dark_Match_500 transition-all'>Sign up</div>
                <div className=' flex flex-col gap-10 w-full items-center dark:text-white'>
                    <input className=' w-[80%] outline-none bg-black/0
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Username' />
                 
                    <input className=' w-[80%] outline-none bg-black/0
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Email' />

                    <div className='w-[80%] relative'>
                      <input className=' w-[100%] outline-none bg-black/0
                      border-b-2 px-4 py-2 font-thin tracking-widest
                      ' type={isShowPassword?"text":"password"} 
                      placeholder='Password' />
                      <div onClick={TogglePassword}
                      className=' hover:cursor-pointer absolute right-3 top-3 w-5 h-5'>
                        {
                          isShowPassword?
                          <EyeIcon/>
                          :
                          <PasswordIcon/>
                        }
                      </div>
                    </div>
                </div>
                <button className=' hover:text-white dark:bg-dark_Match_500
                 shadow-light dark:shadow-dark 
                 active:scale-90 transition-all font-thin'>Submit</button>
            </div>
         </div>
      </div>
      <div onClick={()=>{
        setRout('/profile')
      }}
       className=' dark:text-dark_Match_500 fixed top-5 right-12'>
        / skip sign in /
      </div>
      <div className=' fixed bottom-5 right-12'>
        <DarkMode/>
      </div>
    </div>
  )
}

export default Register