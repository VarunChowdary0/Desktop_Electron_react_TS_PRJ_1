import React from 'react'

const TrendingComponent:React.FC = () => {
  return (
    <div className='__trending__ h-fit w-full flex gap-10 flex-col
    items-center px-10 py-5'>
        <div className=' h-[400px] flex w-full max-w-[400px] 
        text-white justify-center bg-[#ff2a2a]'>
            Trends UNDER DEVLOPMENT
        </div>
        <div className=' h-[400px] w-full max-w-[400px] justify-center bg-[#ff2a2a]'></div>
        <div className=' h-[400px] w-full max-w-[400px] justify-center bg-[#ff2a2a]'></div>
    </div>
  )
}

export default TrendingComponent