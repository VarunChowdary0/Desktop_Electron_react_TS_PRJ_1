import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Contexts/GlobalContext';
import HomeIcon from '../icons/MenuIcons/HomeIcon';
import NotificationIcon from '../icons/MenuIcons/NotificationIcon';
import ExploreIcon from '../icons/MenuIcons/ExploreIcon';
import ManageIcon from '../icons/MenuIcons/ManageIcon';
import ProfileIcon from '../icons/MenuIcons/ProfileIcon';

export const MenuBar: React.FC = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState<Boolean>(true);
  const handleToggle =  () =>{
    setToggleMenuBar(!toggleMenuBar)
  }
  const {rout,setRout} = useContext<any>(GlobalContext);

  const HandleRout = (rt:string) =>{
    setRout(rt);
    setToggleMenuBar(!toggleMenuBar)
  }

  return (
    <>
        	<div className={` flex translate-x-[-20vw] fixed top-0 bottom-0 left-0
			 max-sm:hidden
 		   ${!toggleMenuBar && "translate-x-[0vw] w-screen"} transition-all `}>
        <div className={` w-[20vw] shadow-xl rounded-md h-screen py-7 px-5 
         dark:bg-dark_Surface_400 dark:bg-dark_dark_300/30 pt-14
          dark:text-dark_Match_600
        bg-[#fff]/30 backdrop-blur-sm `}>
            <div className='
            flex flex-col items-center gap-14 mt-4 text-2xl max-sm:text-[17px]'>
                <div className=' hover:scale-125 transition-all '>
                    <a onClick={()=>{HandleRout("/home")}}>Home</a>
                </div>
                <div className=' hover:scale-125 transition-all'>
                    <a onClick={()=>{HandleRout("/profile")}}>Profile</a>
                </div>
                <div className=' hover:scale-125 transition-all'>
                    <a onClick={()=>{HandleRout("/test")}}>Test</a>
                </div>
                <div className=' hover:scale-125 transition-all'>
                    <a onClick={()=>{HandleRout("/manage")}}>Manage</a>
                </div>
                <div className=' hover:scale-125 transition-all'>
                    <a onClick={()=>{HandleRout("/register")}}>Register</a>
                </div>
            </div>
        </div>
            {
                toggleMenuBar ? 
                <div onClick={handleToggle} 
                className=' bg-red-400 h-fit w-fit px-4 mt-4 ml-4
                 max-sm:mt-2 max-sm:ml-2 dark:bg-dark_Match_400
                py-2 rounded-md font-semibold text-white '>
                    Menu
                </div>
                :
                <div onClick={handleToggle} 
                className='  px-3 py-2 rounded-md text-white  flex-1 w-full'></div>
            }
    		</div>
			<div className=' invisible max-sm:visible'>
				<div className=' h-10 fixed bottom-0 right-0 
				 dark:bg-dark_surface_200
				left-0 bg-white shadow-2xl flex
				 items-center justify-around
				'>
					<div
                     onClick={()=>{HandleRout("/home")}}
                     className=' h-5 w-5 
					flex items-center justify-center'>
						<HomeIcon current={rout ==="/home" || rout === "/" ? true : false}/>
					</div>
					<div  onClick={()=>{HandleRout("/notify")}}
                     className=' h-5 w-5 
					flex items-center justify-center'>
						<NotificationIcon current={rout === '/notify' ? true : false }/>
					</div>
					<div 
                     onClick={()=>{HandleRout("/explore")}}
                     className=' h-5 w-5 
					flex items-center justify-center'>
						<ExploreIcon current={rout === '/explore' ? true : false}/>
					</div>
					<div 
                     onClick={()=>{HandleRout("/manage")}}
                    className=' h-5 w-5 
					flex items-center justify-center'>
						<ManageIcon current={rout === '/manage' ? true : false}/>
					</div>
					<div 
                      onClick={()=>{HandleRout("/profile")}}
                    className=' h-5 w-5 
					flex items-center justify-center'>
						<ProfileIcon current={rout==='/profile' ? true : false } />
					</div>
				</div>
			</div>
    </>
  );
};
