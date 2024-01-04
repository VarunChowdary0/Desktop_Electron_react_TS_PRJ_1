import React, { useContext, useState } from 'react'
import CheckIcon from '../icons/CheckIcon';
import { GlobalContext } from '../Contexts/GlobalContext';
import { isLink, save_intership_info_to_local } from '../Functions/Manage_Functions';

const InterShipAdder:React.FC = () => {
  const [InternshipName,setIntershipName] = useState<string>("");
  const [link,setLink] = useState<string>("");
  const [at,setAt] = useState<string>("");
  const [description,setDescription] = useState<string>("")
  const[fromDate,setFromDate]=useState<string>("")
  const[toDate,settoDate]=useState<string>("")
  const [flash,setFlash] = useState<string>(""); 

  const {
    setInterAdderShow,
    InternshipINFO,setIntenshipInfo,
    handlePopUp,setSync
  } = useContext<any>(GlobalContext);

  const handleFocus = () => {
    document.getElementById('endDateInput')?.setAttribute('type', 'date');
  };
  const handleFocus_2 = () => {
    document.getElementById('startDateInput')?.setAttribute('type', 'date');
  };
  const handleBlur = () => {
    document.getElementById('endDateInput')?.setAttribute('type', 'text');
    document.getElementById('startDateInput')?.setAttribute('type', 'text');
  };
  const handleSave = () =>{
    if(InternshipName.trim()!==""){
        if(at.trim()!==""){
          if(description.trim()!==""){
            if(link.trim()!==""){
              if(toDate.trim()!=="" && fromDate.trim()!==""){
                const finalObj = {
                  Title : InternshipName,
                  at : at,
                  CertificateLink : link,
                  work_time :  fromDate.substring(0,7) +" to "+ toDate.substring(0,7),
                  description: description
                }
                console.log(finalObj)
                setIntenshipInfo([...InternshipINFO,finalObj])
                save_intership_info_to_local([...InternshipINFO,finalObj])
                closePopup();
                handlePopUp("Added","Internship Info")
                setSync(true)
              }
              else{
                handleFlash();
              }
            }
            else{
              handleFlash();
            }
          }else{
            handleFlash();
          }
        }
        else{
          handleFlash();
        }
    }
    else{
      handleFlash();
    }
  }
  const handleFlash = () =>{
    show_flash();
    setTimeout(()=>{
        setFlash("")
    },1500)
}
const show_flash = () =>{
    setFlash("Please fill the details.")
}

  const closePopup = () =>{
    setInterAdderShow(false)
  }
  return (
    <>
    <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
     bg-black/30 flex items-center justify-center z-10'>
    </div>
    <div className=' fixed h-fit w-fit top-[20%] text-[#6c6c6c]  z-10
    bg-white px-3 py-10 rounded-md max-w-[550px] '>
        <div className=' px-4 pb-6 text-lg text-[#6c6c6c]'>Add Eduaction Info</div>
        <div className=' flex relative flex-col gap-7'>
            <input  placeholder='Internship Name'
            onChange={(e)=>{setIntershipName(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={InternshipName}/>

             <input  placeholder='at'
            onChange={(e)=>{setAt(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={at}/>
           
           <div className=' relative'>
           <input  placeholder='Certificate Link'
            onChange={(e)=>{setLink(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={link}/>
         
           
                <div className=' h-5 w-5 flex items-center justify-center
                 text-center bg-black/80 rounded-full 
                  absolute right-5 top-1
                 '>
                    {
                        (isLink(link))?
                        <div className='fill-green-600 flex 
                        items-center justify-center scale-90'>
                             <CheckIcon/>
                         </div>
                        :
                        <abbr title="invalid link">
                            <p className=' text-red-600 '>!</p>
                        </abbr>
                    }
                 
                </div>
            </div>


            <input  placeholder='Description'
            onChange={(e)=>{setDescription(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={description}/>
           
            <div className=' flex w-[80%] flex-row justify-between px-10 gap-4'>
                <input  
                placeholder='Start Date'
                id='startDateInput'
                onFocus={handleFocus_2}
                onChange={(e)=>{setFromDate(e.target.value)}} 
                className=' w-[150px] px-4 outline-none max-sm:w-[80px]' 
                type="text" value={fromDate}/>

                <input  
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            handleSave();
                        }
                    }}
                    placeholder='End Date'
                    type='text'
                    onFocus={handleFocus}
                    id='endDateInput'
                    onBlur={handleBlur}
                    onChange={(e)=>{settoDate(e.target.value)}} 
                    className='px-4 w-[150px] outline-none max-sm:w-[80px]' 
                    value={toDate}/>
            </div>
            <div className=' h-5 text-center text-red-500'>
                <p>{flash}</p>
            </div>
            {
                <abbr title="click to save">
                    <div onClick={handleSave} className={`${(InternshipName.trim() !== "") ?
                        "bg-black" : "bg-[#69696938]"} p-2 rounded-full absolute right-0`}>
                        <CheckIcon/>
                    </div>
                </abbr>  
            }
        </div>
    </div>
    </>
  )
}

export default InterShipAdder