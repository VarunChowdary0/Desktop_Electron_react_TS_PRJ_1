import React from 'react'

const ContactInfo:React.FC = () => {
    const name:string = "Sai Varun Chowdary Poludasu"
    const email:string = "saivarunchowdarypoludasu4248@gmail.com"
    const phoneNumber:string = "9392704248"
    const SocialMediaLinks:Object = {
        instagram:"https://www.instagram.com/saivarunchowdarypoludasu",
        facebook:"https://www.facebook.com/saivarunchowdary.poludasu",
        twitter:"https://twitter.com/SaiPoludasu",
        linkedin:"https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/"
    }
  return (
    <div className=' w-full h-fit bg-[#7568fffd]
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
                <a href={SocialMediaLinks[ele]} target='_blank'>
                    <div key={`SM_${id}`}>{ele}
                      </div>
                </a>
                
            )}
        </div>
    </div>
  )
}

export default ContactInfo