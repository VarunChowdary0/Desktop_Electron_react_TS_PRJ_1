import React from 'react'
import CloseIcon from '../../../icons/CloseIcon';
import CheckIcon from '../../../icons/CheckIcon';
import { isLink } from '../../../Functions/Manage_Functions';

interface CurrentProps{
    imagesArray:Array<string>;
    AddImage :React.Dispatch<React.SetStateAction<Array<string>>>;

    currentImg:string;
    setCurrntImg:React.Dispatch<React.SetStateAction<string>>;
}
const PhotosManager:React.FC<CurrentProps> = (props) => {
    const AddNewImg = () =>{
        if(props.currentImg!==""){
            props.AddImage([...props.imagesArray,props.currentImg]);
            props.setCurrntImg("");
        }
    }
    const RemoveImg = (idx:number) =>{
        const newAr = [...props.imagesArray.slice(0,idx),...props.imagesArray.slice(idx+1)];
        props.AddImage(newAr);
    }
  return (
    <div className=' h-full w-full bg-black/0 flex
     items-center p-3  rounded-md flex-col
    '>
        <div>
            <p className=' font-thin'>
                Open 
                <a className=' text-blue-600 __Skill__ relative px-1'  target='_blank'
                href="https://postimages.org/"> postimages 
                <div className=' absolute bottom-[30px] right-2 __Remove__ px-3 py-1
                 text-sm rounded-lg bg-black/20 text-white'>
                    Cloud Storage
                </div>
                </a>
                and upload your Photos , Copy 
                <span className=' text-[#7d54c8]'> Direct Link </span>
                 of the image.
            </p>
        </div>
        <div className=' mt-3 flex items-center'>
            <input onKeyDown={
                (e)=>{
                    if(e.key === "Enter"){
                        AddNewImg();                
                    }
                }
            }
            placeholder='Paste Direct link here !'
            className=' flex-1 outline-none p-2 border-b 
            dark:border-[#474747] font-thin tracking-wider
             border-[#cdcdcd] min-w-[300px]' 
            value={props.currentImg.trim()}
            onChange={(e)=>props.setCurrntImg(e.target.value)}
            type="text" />
            <div onClick={AddNewImg}  className={` p-2 
            ${(isLink(props.currentImg))?" bg-green-400 hover:scale-95 active:scale-100":" bg-black/20" }
             transition-all rounded-full`}>
                <CheckIcon/>
            </div>
        </div>
        { props.imagesArray.length > 0 &&
            <div className=' mt-4 flex-1 max-w-[50vw] max-sm:max-w-[90vw]
        items-center  flex  bg-[#f6f4f4] dark:bg-black/10 
         p-3 gap-3 max-h-[200px] w-fit 
        rounded-md overflow-x-auto snap-x'>
            {props.imagesArray.map((img_,idx)=>
                <div key={"img_new_"+idx} className='__Skill__ flex-1 flex snap-center  relative' >
                    <div className=' absolute bottom-2 right-1 h-5 
                    w-8 rounded-full bg-black/50 flex items-center 
                    text-xs justify-center text-white'>{idx+1}</div>
                    <abbr title="Remove this image">
                        <div onClick={()=>RemoveImg(idx)}
                        className=' absolute __Remove__ hover:border
                         h-5 w-5 rounded-full justify-center hover:bg-red-900/60
                        top-[-5px] right-[-5px] bg-black/60 flex items-center'>
                            <div className=' scale-50'>
                                <CloseIcon color='white' size={1}/>
                            </div>
                        </div>
                    </abbr>
                    <img className=' w-[200px] h-fit max-h-[200px] min-w-[200px] rounded-md' src={img_} alt="" />
                </div>
            )}
        </div>}
    </div>
  )
}

export default PhotosManager