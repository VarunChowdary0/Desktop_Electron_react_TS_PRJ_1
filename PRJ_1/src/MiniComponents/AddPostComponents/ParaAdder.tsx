import React, { useState } from 'react'
import CloseIcon from '../../icons/CloseIcon';

const ParaAdder:React.FC = () => {
    const [PerviousParas,AddPreviousPara] = useState<Array<string>>([]); 
    const [currentPara,setCurrentPara] = useState<string>("");

    const handleAddTOParas = () => {
        AddPreviousPara([...PerviousParas,currentPara]);
        setCurrentPara("");
    }
    const RemoveThisPara = (idx:number) =>{
        const UpdatedPrev = [...PerviousParas.slice(0,idx),...PerviousParas.slice(idx+1)]
        AddPreviousPara(UpdatedPrev);
    }
  return (
    <>
    <div className=' h-full bg-black/0 w-[40%] 
     max-sm:w-[90%] max-sm:pl-5
    p-5 pl-10 flex flex-col gap-4' >
            <div className=' flex flex-col gap-2 max-h-[200px] 
            bg-black/0 overflow-y-auto px-3 max-sm:p-1'>
              {PerviousParas.map((ele,idx)=>
                <div key={"para_number_"+idx} className=' px-3
                 relative bg-black/20 h-[50px] min-h-[50px] flex items-center
                 text-nowrap overflow-hidden rounded-md max-sm:text-sm'>
                    <p>
                        {ele.substring(0,40)}
                        {ele.length > 40 && 
                        <>
                          <span className=' px-1 tracking-widest truncate text-xs'> . . . . . </span>
                          <span className=' text-xs text-green-800'>+{ele.length-40}</span>
                        </>
                        }
                        
                    </p>
                    <abbr title="Remove this Para">
                        <div onClick={()=>RemoveThisPara(idx)}
                         className=' absolute right-3 bottom-2
                        p-2 rounded-full hover:bg-black/20 transition-all'>
                            <CloseIcon color='white' size={1}/>
                        </div>
                    </abbr>
                </div>
              )}
            </div>
            <textarea className=' min-h-[60%] max-h-[50vh] w-full dark:bg-dark_dark_100
             outline-none border-[#00000020] shadow-lg p-5 
            border rounded-md ' value={currentPara}
            onChange={(e)=>{setCurrentPara(e.target.value)}}
             placeholder='Text here ... '
            cols={30} rows={10}>
            </textarea>
            {currentPara.trim() !== ''
                &&
            <div  className=' flex items- justify-center p-4'>
              <div className=' bg-black rounded-3xl w-fit'>
                <button onClick={handleAddTOParas} className=' border'>Add to Text</button>
              </div>
            </div>
            }
          </div>
          <div className=''>

          </div>
        </>
  )
}

export default ParaAdder