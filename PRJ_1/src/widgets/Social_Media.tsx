import React from 'react'
import Git_hub from '../icons/Git_hub'
import Linked_in from '../icons/Linked_in'
import Leet_Code from '../icons/Leet_Code'
import Code_Chef from '../icons/Code_Chef'
import Hacker_Rank from '../icons/Hacker_Rank'
import GeekforGeeks from '../icons/GeekforGeeks'
import Spoj from '../icons/Spoj'

export const Social_Media:React.FC = () => {
  const Links = {
    Linked_in : {
              link:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/",
              icon:<Linked_in/>
                },
    Git_hub : {
              link:"https://github.com/VarunChowdary0",
              icon:<Git_hub/>
            },
    Leet_Code : {
              link : "https://leetcode.com/Varun_chowdary99/",
              icon:<Leet_Code/>
    },
    Code_Chef : {
              link : "https://www.codechef.com/users/varun9392",
              icon : <Code_Chef/>,
    },
    Hacker_Rank : {
              link : "",
              icon : <Hacker_Rank/>
    },
    GeekforGeeks : {
              link : "",
              icon : <GeekforGeeks/>
    },
    Spoj : {
              link : "",
              icon : <Spoj/>
    }
  }
  return (
    <div className=' w-[500px]
    bg-gradient-to-r from-indigo-500 to-pink-500
      max-sm:w-[300px] rounded-md p-1
    h-fit shadow-2xl flex items-center justify-center'>
      <div className='flex justify-center flex-1  bg-[#fcfcfc] gap-5 flex-col py-10 '>
        <h1 className=' text-center pr-[20px] font-extrabold text-[#1cceff]  text-2xl'>Technical Platforms</h1>
        {Object.keys(Links).map((socialMedia) => {
                const linkData = Links[socialMedia];
            return (
              <div key={socialMedia} className='scale-125 max-sm:pr-[80px] flex items-center justify-center'>
                <a className=' bg-black/0 py-1 max-h-7 rounded-lg  w-[50%] flex flex-row items-center gap-5 pl-5' href={linkData.link} target='_blank'>
                  <span className=' w-0 mr-10'>
                    {linkData.icon && React.cloneElement(linkData.icon)}
                  </span>
                  <p className=' text-sm text-sky-500 font-mono'>{socialMedia.replace("_","")}</p>
                </a>
              </div>
            );
          })}
      </div>
      <div className={` bg-gradient-to-r from-green-500 to-yellow-500`}></div>
      
    </div>
  )
}
