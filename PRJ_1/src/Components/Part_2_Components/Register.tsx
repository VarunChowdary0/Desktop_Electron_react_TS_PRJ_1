import React, { useState } from 'react'

const Register:React.FC = () => {
    const [RegisterMode,setRegisterMode] = useState<string>("login");
    const [isShowPassword,setShowPassword] = useState<boolean>(false)
  return (
    <div className=' flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 bg-black/30 ' 
    >
        <div className={` __login__  h-[400px] w-[500px] max-sm:w-[90%]
         bg-white rounded-md shadow-xl`}>
            <div className=' p-4 flex flex-col items-center gap-[50px]'>
                <div className=' text-3xl text-center'>Login</div>
                <div className=' flex flex-col gap-10 w-full items-center'>
                    <input className=' w-[80%] outline-none
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type="text" placeholder='Username' />


                    <input className=' w-[80%] outline-none
                     border-b-2 px-4 py-2 font-thin tracking-wider
                    ' type={isShowPassword?"text":"password"} 
                    placeholder='Password' />
                </div>
            </div>
         </div>
    </div>
  )
}

export default Register