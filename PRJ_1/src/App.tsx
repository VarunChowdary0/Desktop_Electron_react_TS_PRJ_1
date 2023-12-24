import * as React from "react";
import * as ReactDOM from "react-dom/client";
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
    <React.StrictMode>
        <div className=" flex flex-row select-none">
          <Colors_theam/>
          <div className=" z-50"><MenuBar/></div>
          <div className="fixed flex items-center justify-center
            top-0 bottom-0 left-0 right-0">
            <RouterProvider router={router} />
          </div>
        </div>
    </React.StrictMode>
  )
}

export default App
