import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import CheckIcon from '../icons/CheckIcon';

const ChangeName:React.FC = () => {
    const {setNamePopupView}=useContext<any>(GlobalContext);
    const {name,setName} = useContext<any>(GlobalContext);
    const def_name = name;
    const [current_name,change_name] = useState(name);
    const closePopup = () =>{
        setNamePopupView(false);
    }
    const handleSave = () =>{
        setName(current_name);
        closePopup();
        localStorage.setItem("myName",current_name);
    }
  return (
    <>
        <div onClick={closePopup} className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm
        h-screen w-screen bg-black/30 flex items-center justify-center'>
        </div>
        <div className=' fixed h-fit w-fit top-[40%]
         bg-white px-3 py-10 rounded-md' >
            <div className=' px-4 pb-6 text-sm text-[#6c6c6c]'>Edit name</div>
            <div className=' flex relative'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        handleSave();
                        closePopup();
                    }
                }} onChange={(e)=>{change_name(e.target.value)}} 
                className='w-[400px] px-4 outline-none' type="text" value={current_name}/>
                {
                    <abbr title="click to save">
                        <div onClick={handleSave} className={`${(def_name.trim()!==current_name.trim()) ?
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

export default ChangeName