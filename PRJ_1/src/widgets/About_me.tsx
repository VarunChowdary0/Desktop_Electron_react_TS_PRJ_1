import React from 'react'

interface CurrentProps{
    bg_Color : string
}

const About_me:React.FC<CurrentProps>= (props) => {
  const about_me = "A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level software Engineer position. Ready to help the team achieve company goals."
  return (
    <div className={` bg-${props.bg_Color}-400 w-[500px] max-sm:w-[300px]
    h-fit rounded-lg text-white p-4
    `}>
        <div className=' text-xl mt-3 mb-3 font-bold'>ABOUT</div>
        <p>
        {
          about_me
        }
        </p>
    </div>
  )
}

export default About_me