import React, { useContext, useState } from 'react'
import PasswordIcon from '../../icons/PasswordIcon';
import EyeIcon from '../../icons/EyeIcon';
// import { DarkFounderLogo, LightFounderLogo } from '../../assets/Resources';
import DarkMode from '../../Functions/DarkMode';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { CreateNewUserAccount, LoginToUser } from '../../Controllers/RegisterController';
import { UserInfoContext } from '../../Contexts/UserInfoContext';
import  { lineWobble } from "ldrs"
import { save_email_in_local } from '../../Functions/Manage_Functions';

lineWobble.register();

const Register:React.FC = () => {
    const [RegisterMode,setRegisterMode] = useState<string>("login");
    const [isShowPassword,setShowPassword] = useState<boolean>(false);
    const {setRout,handlePopUp,setEmail,isDarkMode} = useContext<any>(GlobalContext);
    const {setLoggedin} = useContext<any>(UserInfoContext);
    const [flasher,setFlasher] = useState<string>("");

    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [mailAdd,setMailAdd] = useState<string>("");


    const TogglePassword = () => {
      setShowPassword(true)
      setTimeout(()=>{
        setShowPassword(false)
      },1200)
    }
    const handle_signUP_action = async () =>{
		if(username.trim() !== ""){
			if(mailAdd.trim()!==""){
				if(mailAdd.includes(".") && mailAdd.length>=7){
					if(password.trim().length > 5 ){
                        setFlasher("Loading...")
						const RESPONSE:any = await CreateNewUserAccount(username,password,mailAdd)
							if(RESPONSE.status){
							console.log("SENT and OK")
              setEmail(mailAdd);
              save_email_in_local(mailAdd)
							handleFlasher("ACCOUNT CREATION SUCESSFUL")
                            setTimeout(() => {
                                setRegisterMode('login')
                            }, 1000);
							}
							else{
							console.log("FAILED -> "+RESPONSE.error)
							handleFlasher("FAILED TO CREATE ACCOUNT"+RESPONSE.error)
							}
					}
					else{
						handleFlasher("Password is short")
					}
				}
				else{
					handleFlasher(" Please enter valid mail address ")
				}
			}
			else{
				handleFlasher(" Mail address not filled ")
			}
		}
		else{
			handleFlasher(" Username not filled")
		}
    }
    const handle_signin_action = async () =>{
      if(username.trim()!==""){
        if(password.trim().length > 5){
            setFlasher("Loading...")
            const RESPONSE = await LoginToUser(username,password)
            if(RESPONSE.status){
                console.log("SENT and OK")
                handleFlasher("LOGIN SUCESSFUL")
                localStorage.setItem("USER_UID",RESPONSE.error)
                localStorage.setItem("isLoggedIN",JSON.stringify(true));
                setLoggedin(true)
                setTimeout(()=>{
                    setRout('/manage/edit_profile')
                },1000)
                setTimeout(()=>{
                    handlePopUp("EDIT YOUR PROFILE")
                },1500)
            }
            else{
                console.log("FAILED -> "+RESPONSE.error)
                handleFlasher(RESPONSE.error)
                setPassword("")
            }
        }
        else{
          handleFlasher(" Password cannot be this short ")
        }
      }
      else{
        handleFlasher(" username is not filled ")
      }
    }
    const handleFlasher = (x:string)=>{
      setFlasher(x);
      setTimeout(()=>{
        setFlasher("");
      },1500)
    }
  return (
    <div className=' flex items-center justify-center
     fixed top-0 bottom-0 right-0 left-0
     dark:bg-dark_dark_100 transition-all max-sm:pb-12
       max-sm:text-sm
     ' 
    >
      <div className=' fixed top-[-100px] max-sm:ml-3 
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
            <img className=" rounded-full invisible h-0 dark:visible dark:h-fit" src={"https://i.postimg.cc/rszwWXm5/Founder-Logo-Dark.png"} alt="" />
            <img className=" rounded-full dark:hidden" src="https://i.postimg.cc/Nj6P6KZk/Founder-LOGO-light.png" alt="" />
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
           dark:bg-dark_dark_200  dark:border-0 border-[1px]
            transition-all
         bg-white rounded-md shadow-xl`}>
            <div className=' p-2 flex flex-col
             max-sm:p-0 max-sm:gap-5
            items-center gap-[40px]'>
                <div className=' text-3xl 
                 dark:text-dark_Match_500 transition-all
                text-center'>Login</div>
                <div className=' flex flex-col gap-10 w-full items-center 
                 dark:text-white transition-all'>
                    <input  onChange={(e)=>{
                      setUsername(e.target.value);
                    }}
                    className=' w-[80%] outline-none
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Username' value={username} />

                    <div className='w-[80%] relative'>
                      <input onKeyDown={(e)=>{
                        if(e.key == 'Enter'){
                          handle_signin_action();
                        }
                      }}
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                      className=' w-[100%] outline-none
                      border-b-2 px-4 py-2 font-thin tracking-widest
                      ' type={isShowPassword?"text":"password"} value={password} 
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
                <div className=' dark:text-orange-200 h-0'>
                {flasher==='Loading...'?
                <l-line-wobble
                        size={"80"}
                        stroke={"5"}
                        bg-opacity={"0.1"}
                        speed={"1.75"}
                        color={isDarkMode?"white":"#bd8dfd"}
                ></l-line-wobble>
                  :
                  <p>{flasher}</p>
                  }
                </div>
                <button onClick={handle_signin_action}
                className='  hover:text-white dark:bg-dark_Match_500
                 shadow-light dark:shadow-dark max-sm:mt-3
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
            <div className=' p-2 flex flex-col
           max-sm:p-0 max-sm:gap-5
            items-center gap-[40px]'>
                <div className=' text-3xl text-center
                 dark:text-dark_Match_500 transition-all'>Sign up</div>
                <div className=' flex flex-col gap-10 w-full items-center dark:text-white'>
                    <input onChange={(e)=>{
                      setUsername(e.target.value);
                    }}
                    className=' w-[80%] outline-none bg-black/0
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Username' value={username} />
                 
                    <input onChange={(e)=>{
                      setMailAdd(e.target.value);
                    }} 
                    className=' w-[80%] outline-none bg-black/0
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Email' value={mailAdd} />

                    <div 
                    className='w-[80%] relative'>
                      <input onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                          handle_signUP_action();
                        } 
                      }}
                       onChange={(e)=>{
                      setPassword(e.target.value)
                      }}  
                      className=' w-[100%] outline-none bg-black/0
                      border-b-2 px-4 py-2 font-thin tracking-widest
                      ' type={isShowPassword?"text":"password"} 
                      placeholder='Password' value={password} />
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
                <div className=' dark:text-orange-200 h-0'>
                  {flasher==='Loading...'?
                    <>
                    {flasher==='Loading...'?
                  <l-line-wobble
                          size={"80"}
                          stroke={"5"}
                          bg-opacity={"0.1"}
                          speed={"1.75"}
                          color={isDarkMode?"white":"#bd8dfd"}
                  ></l-line-wobble>
                  :
                  <p>{flasher}</p>
                  }</>
                  :
                  <p>{flasher}</p>
                  }
                </div>
                <button onClick={handle_signUP_action}
                className=' hover:text-white dark:bg-dark_Match_500
                 shadow-light dark:shadow-dark max-sm:mt-3
                 active:scale-90 transition-all font-thin'>Submit</button>
            </div>
         </div>
      </div>
      <div onClick={()=>{
        setRout('/manage/edit_profile')
        setTimeout(()=>{
          handlePopUp("Make Your Profile");
        },500)
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

// async await 