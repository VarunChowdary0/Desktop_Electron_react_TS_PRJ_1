import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './Contexts/GlobalContext';
import Profile from './Components/Profile';
import HomePage from './Components/HomePage';
import TestPage from './Components/TestPage';
import Manage from './Components/Manage';
import Register from './Components/Part_2_Components/Register';
import { errorImage } from './assets/Resources';

const Router = () => {
  const { rout } = useContext<any>(GlobalContext);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  useEffect(()=>{
    //window.scroll(0,0);
  },[content])
  useEffect(() => {
    if (rout === '/') {
      setContent(
        <HomePage/>
      );
    } else if (rout === '/profile') {
      setContent(
      <Profile />
      );
    } 
    else if(rout === '/home'){
        setContent(
            <HomePage/>
        )
    }
    else if(rout === '/test'){
        setContent(
            <TestPage/>
        )
    }
    else if(rout === '/manage'){
        setContent(
            <Manage/>
        )
    }
    else if(rout === '/register'){
      setContent(
        <Register/>
      )
    }
    else {
      setContent(
      <div className=' h-screen w-screen  flex-col
       max-sm:text-sm text-center max-sm:m:px-5 gap-10
        dark: text-dark_Match_300 dark:bg-dark_dark_100
         max-sm:flex-col-reverse
      flex items-center justify-center text-2xl bg-white'>
        <p className=' max-sm:px-5'>404 : The Page you are looking for is either Don't exist or " Under Development "</p>
        <div>
          <video className=' ml-10 max-sm:ml-0 dark:hidden max-sm:w-[300px] ' 
          src="https://cdnl.iconscout.com/lottie/premium/thumb/404-page-5565540-4650907.mp4"
          loop autoPlay></video>
          <img className=' invisible h-0 dark:visible dark:h-fit' 
          src={errorImage} alt="NOT FOUND" />
        </div>
      </div>
      );
    }
  }, [rout]);

  return <>{content}</>;
};

export default Router;
