import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

const Colors_theam:React.FC = () => {
  const {isDarkMode} = useContext<any>(GlobalContext)
  useEffect(()=>{
      if(isDarkMode){
          document.body.classList.add('dark');
      }
      else{
          document.body.classList.remove('dark');
      }
  },[isDarkMode])
  return (
    <div className=' hidden'>
            <div className=' bg-green-400'></div>
            <div className='bg-gradient-to-r from-green-500 to-green-500'></div>
            <div className=' bg-red-400'></div>
            <div className='bg-gradient-to-r from-red-500 to-red-500'></div>
            <div className=' bg-blue-400'></div>
            <div className='bg-gradient-to-r from-blue-500 to-blue-500'></div>
            <div className=' bg-yellow-400'></div>
            <div className='bg-gradient-to-r from-yellow-500 to-yellow-500'></div>
            <div className=' bg-pink-400'></div>
            <div className='bg-gradient-to-r from-pink-500 to-pink-500'></div>
            <div className=' bg-violet-400'></div>
            <div className='bg-gradient-to-r from-violet-500 to-violet-500'></div>
            <div className=' bg-orange-400'></div>
            <div className='bg-gradient-to-r from-orange-500 to-orange-500'></div>
            <div className=' bg-teal-400'></div>
            <div className='bg-gradient-to-r from-teal-500 to-teal-500'></div>
            <div className=' bg-purple-400'></div>
            <div className='bg-gradient-to-r from-purple-500 to-purple-500'></div>
            <div className='ab49fa'></div>
        </div>
  )
}

export default Colors_theam