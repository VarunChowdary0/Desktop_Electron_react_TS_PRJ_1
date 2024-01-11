import React, { useEffect, useState } from 'react'

interface CurrentProps{
    Paras : Array<string>;
  }

const ParaFormater:React.FC<CurrentProps> = (props) => {
    const [readFull,setReadFull] = useState<boolean>(false);
    const [isShort,setShort] = useState(false);
    let count = 0;
    useEffect(()=>{
      props.Paras.map((ele)=>{
        count+=(ele.length);
      })
    //   console.log(count);
      if(count<250){
        setReadFull(true)
        setShort(true);
      }
    },[props.Paras])

  return (
    <>
    <div key={"Pardaccsas"+props.Paras.length} className={` flex flex-col gap-3 
        ${!readFull?"h-[114px] max-sm:h-[157px] overflow-hidden ":"h-fit"} transition-all `}>
            {props.Paras.map((para,id)=>
             <p key={`BIP_para-`+id} id={`BIP_para-`+id}>{para}</p>
            )}
        </div>
        {!isShort ?
          <div onClick={()=>(setReadFull(!readFull))}
          className=' px-2 flex gap-2 hover:cursor-pointer mt-2 justify-end'>
            <span className=' tracking-wider'>...</span>
            <p className=' font-semibold'>see {!readFull?"more":"less"}</p>
          </div>
          :
          <div className=' h-4 w-full'></div>
        }     
    </>
  )
}

export default ParaFormater