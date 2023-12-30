import React, { useContext, useState } from 'react'
import CheckIcon from '../icons/CheckIcon'
import { GlobalContext } from '../Contexts/GlobalContext'
import { isLink, save_Education_details_to_local } from '../Functions/Manage_Functions'

const Add_Eduaction_Info:React.FC = () => {
    const [institute_name,setInstituteName] = useState<string>("")
    const [link,setLink] = useState<string>("")
    const [branch,setBranch] = useState<string>("");
    const [Grade,setGrade] = useState<string>("")
    const[Adderss,setAddress]=useState<string>("")
    const[fromDate,setFromDate]=useState<string>("")
    const[toDate,settoDate]=useState<string>("")

    const {setShowEducationPopUp,
        EducationDetails,setEducationDetails,
        handlePopUp} = useContext<any>(GlobalContext)
    const closePopup =() =>{
        setShowEducationPopUp(false)
    }
    const [flash,setFlash] = useState<string>(""); 
    const handleSave = () =>{
        if (institute_name.trim()!==""){
            if(branch.trim()!==""){
                if(Grade.trim()!==""){
                    if(Adderss.trim()!==""){
                        if(fromDate.trim()!=="" && toDate.trim()!==""){
                            const thisDetail = {
                                institue_name : institute_name,
                                institue_site : link,
                                branch : branch,
                                Grade : Grade,
                                address : Adderss,
                                time_of_study : fromDate.substring(0,7) + " to " + toDate.substring(0,7)
                            }
                            console.log(thisDetail)
                            setEducationDetails([...EducationDetails,thisDetail])
                            save_Education_details_to_local([...EducationDetails,thisDetail])
                            closePopup();
                            handlePopUp("Added","Eduaction info");
                        }
                        else{
                            handleFlash()
                        }
                    }
                    else{
                        handleFlash()
                    }
                }
                else{
                    handleFlash()
                }
            }
            else{
                handleFlash()
            }
        }
        else{
            handleFlash()
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
  return (
    <>
    <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
         bg-black/30 flex items-center justify-center z-10'>
    </div>
    <div className=' fixed h-fit w-fit top-[20%]
        max-sm:ml-[5vw] bg-white
         px-3 py-10 rounded-md z-10 '>
        <div className=' px-4 pb-6 text-lg text-[#6c6c6c]'>Add Eduaction Info</div>
        <div className=' flex relative flex-col gap-7'>
            <input  placeholder='Institute Name'
            onChange={(e)=>{setInstituteName(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={institute_name}/>
           
           <div className=' relative'>
           <input  placeholder='Institute link'
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

            <input  placeholder='Branch'
            onChange={(e)=>{setBranch(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={branch}/>
           
            <input  placeholder='Grade'
            onChange={(e)=>{setGrade(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={Grade}/>
         
            <input  placeholder='Address'
            onChange={(e)=>{setAddress(e.target.value)}} 
            className='w-[80%] px-4 outline-none' type="text" value={Adderss}/>
           
            <div className=' flex w-[80%] flex-row 
            justify-between px-10 gap-4 max-sm:flex-col'>
                <input  
                placeholder='Start Date'
                id='startDateInput'
                onFocus={handleFocus_2}
                onChange={(e)=>{setFromDate(e.target.value)}} 
                className=' w-[150px] px-4 outline-none' 
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
                    className='px-4 w-[150px] outline-none' 
                    value={toDate}/>
            </div>
            <div className=' h-5 text-center text-red-500'>
                <p>{flash}</p>
            </div>
            {
                <abbr title="click to save">
                    <div onClick={handleSave} className={`${(institute_name.trim() !== "") ?
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

export default Add_Eduaction_Info

