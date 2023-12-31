import { useContext, useEffect } from "react"
import { UserInfoContext } from "../Contexts/UserInfoContext"
import { GlobalContext } from "../Contexts/GlobalContext";
// import { DarkFounderLogo, LightFounderLogo } from "../assets/Resources";

const HomeLoader
 = () => {
  const {isLoggedIn} = useContext<any>(UserInfoContext);
  const {setRout} = useContext<any>(GlobalContext);
  useEffect(()=>{
    if(!isLoggedIn){
      setTimeout(()=>{
        // console.log(isLoggedIn)
        setRout('/register')
      },1500)
    }
    else{
      setTimeout(()=>{
        setRout('/home')
      },1500)
    }
  },[])
  return (
    <div className=" fixed top-0 bottom-0 right-0 left-0
     bg-white dark:bg-dark_dark_100">
      <div className=' logo_paper fixed top-0 bottom-0 
      right-0 left-0 flex dark:bg-dark_dark_100 transition-all
     items-center justify-center text-8xl font-light max-sm:text-5xl'>
        <div className=" flex">
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>R</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>E</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>z</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>Z</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>U</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>M</div>
          <div className=' even:text-indigo-500 odd:text-purple-700 hover:scale-125 py-[200px] transition-all'>Y</div>
        </div>
        <div className=" text-sm fixed
         flex items-center
        bottom-20 dark:text-dark_Match_500">
          from 
         { <div className=" w-[100px]">
            <img className=" invisible h-0 dark:visible dark:h-fit" src={"https://i.postimg.cc/rszwWXm5/Founder-Logo-Dark.png"} alt="" />
            <img className=" dark:hidden" src="https://i.postimg.cc/Nj6P6KZk/Founder-LOGO-light.png" alt="" />
          </div>}
        </div>
    </div>
    </div>
  )
}

export default HomeLoader
