import * as React from "react";

import "./index.css";

import { MenuBar } from "./Components/MenuBar";
import Colors_theam from "./assets/Colors_theam";
import { GlobalContextProvider } from "./Contexts/GlobalContext";
import Router from "./Router"



const App:React.FC =() => {
  return (
   <GlobalContextProvider>
        <div className=" flex flex-row select-none dark:bg-[#393939] ">
          <Colors_theam/>
          <div className=" z-50"><MenuBar/></div>
          <div className=" flex items-center justify-center
               w-screen h-fit bg-white
             overscroll-auto ">
            <Router/>
          </div>
        </div>
   </GlobalContextProvider>
  )
}

export default App
