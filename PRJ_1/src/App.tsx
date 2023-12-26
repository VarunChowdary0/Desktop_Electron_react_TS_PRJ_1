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

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <a href="/Home">Home</a>
      <a href="/test">Test</a>
      <a href="/profile"></a>
    </div>,
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
  }
]);

function App() {
  return (
   <GlobalContextProvider>
     <React.StrictMode>
        <div className=" flex flex-row select-none dark:bg-[#393939] ">
          <Colors_theam/>
          <div className=" z-50"><MenuBar/></div>
          <div className=" flex items-center justify-center
               w-screen h-fit bg-white
             overscroll-auto ">
            <RouterProvider router={router} />
          </div>
        </div>
    </React.StrictMode>
   </GlobalContextProvider>
  )
}

export default App
