import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

const ContactInfo:React.FC = () => {
    const {name} = useContext<any>(GlobalContext) 
    const {
      email,
      phoneNumber,
      SocialMediaLinks
    } = useContext<any>(GlobalContext)

  return (
    <div className=' w-full h-fit bg-[#7568fffd] max-sm:pl-10
     flex items-center justify-center rounded-lg max-sm:flex-col
    '>
        <div className=' flex flex-1  items-start p-10 text-white  max-sm:border-b-2 max-sm:border-r-0
         flex-col justify-center border-r-2 border-[#afadad] gap-3'>
            <div className='hover:underline'>{name}</div>
            <div className='hover:underline'>{email}</div>
            <div className='hover:underline'>{phoneNumber}</div>
        </div>
        <div className=' flex flex-1 items-start p-10
         flex-col justify-center gap-3 text-white'>
            {Object.keys(SocialMediaLinks).map((ele:string,id:number)=>
                <a key={"contact_"+id} href={SocialMediaLinks[ele]} target='_blank'>
                    <div key={`SM_${id}`}>{ele}
                      </div>
                </a>
                
            )}
        </div>
    </div>
  )
}

export default ContactInfo