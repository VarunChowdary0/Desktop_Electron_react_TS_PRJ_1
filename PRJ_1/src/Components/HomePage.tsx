import React from 'react'

const HomePage = () => {
    const ToHome = () =>{
        window.location.href="/";
    }
  return (
    <div className=' w-screen h-[200vh] flex items-center justify-center'>
        <div className=' w-[40%] h-[50%] border border-gray-600 rounded-md '>
            <div className=' text-center px-5 py-10 text-4xl'>
                 This is My First Desktop Application
            </div>
            <div className=' w-full flex items-center justify-center'>
                <button onClick={ToHome}>Click here to Go Back</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage