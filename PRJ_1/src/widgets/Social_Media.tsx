import React from 'react'

export const Social_Media:React.FC = () => {
  const Links = {
    Linked_in : "https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/",
    Git_hub : "https://github.com/VarunChowdary0"
  }
  return (
    <div className=' w-[500px] max-sm:w-[300px] rounded-md 
    h-[400px] shadow-2xl flex items-center justify-center'>
        <div>
          <a href={Links.Linked_in} target='_blank'>
            <span>Linked in</span>
          </a>
        </div>
    </div>
  )
}
