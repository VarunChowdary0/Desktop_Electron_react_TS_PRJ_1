import React from 'react'
import { jellyTriangle } from 'ldrs';

jellyTriangle.register()

const WholeLoader_11:React.FC = () => {
  return (
    <div className=' fixed top-0 bottom-0 left-0 
    right-0 z-[1000] bg-white/10 backdrop-blur
     flex items-center justify-center dark:text-dark_Match_600
     text-black 
    '
    >
      <l-jelly-triangle
       size={"49"}
       speed={"1"}
       color={'#07ffee'}
      >

      </l-jelly-triangle>
    </div>
  )
}

export default WholeLoader_11