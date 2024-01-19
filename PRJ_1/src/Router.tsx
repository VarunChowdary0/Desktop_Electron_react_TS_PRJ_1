import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './Contexts/GlobalContext';
import Profile from './Components/Profile';
import Manage from './Components/Manage';
import Register from './Components/Part_2_Components/Register';
import Settings from './Components/Part_2_Components/Settings';
import WholeLoader_11 from './Components/WholeLoader_11';
import ViewStats from './Components/Part_3_Components/ViewStats';
import HomeLoader from './Components/Loader';
import ExplorePage from './Components/Part_3_Components/ExplorePage';
import { UserInfoContext } from './Contexts/UserInfoContext';


const Router = () => {
  const { rout , WholeLoader } = useContext<any>(GlobalContext);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const {setIsSeeingOther} = useContext<any>(UserInfoContext);
  useEffect(()=>{
    //window.scroll(0,0);
  },[content])
  useEffect(() => {
    if (rout === '/') {
      setContent(
        <HomeLoader/>
      );
    } else if (rout === '/profile') {
      setContent(
      <Profile />
      );
    } 
    else if(rout === '/manage'){
        setContent(
            <Settings/>
        )
    }
    else if(rout === '/manage/edit_profile'){
      setContent(
        <Manage/>
      )
    }
    else if(rout === '/register'){
      setContent(
        <Register/>
      )
    }
    else if(rout === '/stats'){
      setContent(
        <ViewStats/>
      )
    }
    else if(rout=== '/explore'){
      setContent(
        <ExplorePage/>
      )
    }
    else if(rout === '/stats/other'){
      setContent(
        <ViewStats/>
      );
      setIsSeeingOther(true);
    }
    else {
      setContent(
      <div className='  fixed top-0 bottom-0 left-0 right-0  flex-col
       max-sm:text-sm text-center max-sm:m:px-5 gap-10
        dark: text-dark_Match_300 dark:bg-dark_dark_100
         max-sm:flex-col-reverse 
      flex items-center justify-center text-2xl bg-white'>
        <p className=' max-sm:px-5'>
          404 : The Page you are looking for is either Don't exist or " Under Development "
        </p>
        <div>
          <video className=' ml-10 max-sm:ml-0 dark:hidden max-sm:w-[300px] ' 
          src="https://cdnl.iconscout.com/lottie/premium/thumb/404-page-5565540-4650907.mp4"
          loop autoPlay></video>
          <img className=' invisible h-0 dark:visible dark:h-fit' 
          src="https://i.postimg.cc/4yK7wfPY/error-404-1-dark.png" alt="NOT FOUND" />
        </div>
        <div className=' items-center flex gap-2 justify-center'>
          <p>ROUTE : </p>
          <span className=' text-orange-600'>{rout.replace('/',"")}</span>
          </div>
      </div>
      );
    }
  }, [rout]);

  return <>
  {WholeLoader&&(rout!=='/')&&<WholeLoader_11/>}
  {content}
  </>;
};

export default Router;
