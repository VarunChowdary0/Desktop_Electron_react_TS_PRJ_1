import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './Contexts/GlobalContext';
import Profile from './Components/Profile';
import HomePage from './Components/HomePage';
import TestPage from './Components/TestPage';
import Manage from './Components/Manage';

const Router = () => {
  const { rout } = useContext<any>(GlobalContext);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  useEffect(()=>{
    window.scroll(0,0);
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
    else {
      setContent(
      <div>
        Check Your Path 404 Not FOund
      </div>
      );
    }
  }, [rout]);

  return <>{content}</>;
};

export default Router;
