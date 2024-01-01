import React, { useContext } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import { GlobalContext } from '../Contexts/GlobalContext';

const BackToSettings:React.FC = () => {
    const {setRout} = useContext<any>(GlobalContext);
  return (
    <div  onClick={()=>{setRout('/manage')}}
    className=' fixed top-7 left-5 bg-black/20
     dark:bg-black/0
     rounded-full h-7 w-7 flex items-center justify-center '>
          <ArrowIcon angle='0' color='white' size={1}/>
    </div>
  )
}

export default BackToSettings