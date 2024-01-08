import React from 'react'

const AddComment:React.FC = () => {
  return (
    <div className=' flex items-center justify-center 
         gap-5 px-7
     h-10 w-full  mt-5  bg-white dark:bg-dark_dark_200'>
            <input className=' outline-none border-b flex-1'
             type="text" placeholder='Add a comment' />
            <div className=' text-dark_Match_100'>Post</div>
    </div>
  )
}

export default AddComment