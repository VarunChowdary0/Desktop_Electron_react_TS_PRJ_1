import * as React from "react";

import "./index.css";

import { MenuBar } from "./Components/MenuBar";
import Colors_theam from "./assets/Colors_theam";
import { GlobalContextProvider } from "./Contexts/GlobalContext";
import Router from "./Router"
import { UserInfoContextProvider } from "./Contexts/UserInfoContext";



const App:React.FC =() => {
  return (
   <GlobalContextProvider>
        <div className=" flex flex-row select-none dark:bg-dark_dark_100 ">
          <Colors_theam/>
          <div className=" z-50"><MenuBar/></div>
          <UserInfoContextProvider>
            <div className=" flex items-center justify-center
                w-screen h-fit bg-white  dark:bg-dark_dark_100 transition-all
              overscroll-auto max-sm:pb-10">
              <Router/>
            </div>
          </UserInfoContextProvider>
        </div>
   </GlobalContextProvider>
  )
}

export default App
