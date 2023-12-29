import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import TestPage from "./Components/TestPage";
import HomePage from "./Components/HomePage";
import { MenuBar } from "./Components/MenuBar";
import Profile from "./Components/Profile"
import Colors_theam from "./assets/Colors_theam";
import { GlobalContextProvider } from "./Contexts/GlobalContext";
import Manage from "./Components/Manage";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Profile/>
  },
  {
    path: "/Home",
    element: <HomePage/>,
  },
  {
    path: "/test",
    element: <TestPage/>,
  },
  {
    path : "/profile",
    element:<Profile/>
  },
  {
    path:"/manage",
    element : <Manage/>
  }
]);

const App:React.FC =() => {
  return (
   <GlobalContextProvider>
        <div className=" flex flex-row select-none dark:bg-[#393939] ">
          <Colors_theam/>
          <div className=" z-50"><MenuBar/></div>
          <div className=" flex items-center justify-center
               w-screen h-fit bg-white
             overscroll-auto ">
            <RouterProvider router={router} />
          </div>
        </div>
   </GlobalContextProvider>
  )
}

export default App
