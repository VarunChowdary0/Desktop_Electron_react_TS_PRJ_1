import { useContext, useEffect } from "react"
import { UserInfoContext } from "../Contexts/UserInfoContext"
import { GlobalContext } from "../Contexts/GlobalContext";

const HomePage = () => {
  const {isLoggedIn} = useContext<any>(UserInfoContext);
  const {setRout} = useContext<any>(GlobalContext);
  useEffect(()=>{
    if(!isLoggedIn){
      setTimeout(()=>{
        console.log(isLoggedIn)
        setRout('/register')
      },1500)
    }
    else{
      setTimeout(()=>{
        setRout('/explore')
      },1500)
    }
  },[])
  return (
    <div className=' fixed top-0 bottom-0 right-0 left-0 flex dark:bg-dark_dark_100 transition-all
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
        <div className=" text-sm fixed bottom-20 dark:text-dark_Match_500">
          from varun
        </div>
    </div>
  )
}

export default HomePage