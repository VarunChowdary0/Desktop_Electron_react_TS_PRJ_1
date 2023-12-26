import React, { useState } from 'react';

export const MenuBar: React.FC = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState<Boolean>(true);
  const handleToggle =  () =>{
    setToggleMenuBar(!toggleMenuBar)
  }

  return (
    <div className={` flex translate-x-[-20vw] fixed top-0 bottom-0 left-0
    ${!toggleMenuBar && "translate-x-[0vw] w-screen"} transition-all `}>
        <div className={` w-[20vw] shadow-xl rounded-md h-screen py-7 px-5 
        bg-[#fff]/30 backdrop-blur-sm`}>
            <div className=' flex flex-col items-center gap-10 text-2xl max-sm:text-[17px]'>
                <div>
                    <a href='/home'>Home</a>
                </div>
                <div>
                    <a href='/profile'>Profile</a>
                </div>
                <div>
                    <a href='/test'>Test</a>
                </div>
            </div>
        </div>
            {
                toggleMenuBar ? 
                <div onClick={handleToggle} 
                className=' bg-red-400 h-fit w-fit px-4 mt-4 ml-4
                 max-sm:mt-2 max-sm:ml-2
                py-2 rounded-md font-semibold text-white '>
                    Menu
                </div>
                :
                <div onClick={handleToggle} 
                className='  px-3 py-2 rounded-md text-white  flex-1 w-full'></div>
            }
    </div>
  );
};
