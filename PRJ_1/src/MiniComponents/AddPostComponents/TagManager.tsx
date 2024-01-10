import React from 'react'
import CloseIcon from '../../icons/CloseIcon';
import CheckIcon from '../../icons/CheckIcon';
interface CurrentProps{
    tagArr : Array<string>;
    setTags:React.Dispatch<React.SetStateAction<Array<string>>>;
    CurrnetTag:string;
    setCurrentTag : React.Dispatch<React.SetStateAction<string>>;
}
const TagManager:React.FC<CurrentProps> = (props) => {
    const AddnewTag=()=>{
        props.setTags([...props.tagArr,props.CurrnetTag.toLowerCase()]);
        props.setCurrentTag("");
    }
    const RemoveTag = (idx:number) =>{
        const newArr = [...props.tagArr.slice(0,idx),...props.tagArr.slice(idx+1)];
        props.setTags(newArr);
    }
  return (
    <>
    <div className=' __TagBlock__ w-[100%] max-h-[200px] max-sm:max-h-[120px]
         overflow-y-auto
         bg-black/0 rounded-lg flex p-5 flex-wrap gap-4 '>
            {
                props.tagArr.map((ele,idx)=>
                <div key={'TagID_'+idx} className='__Skill__ bg-black/10 px-2 relative
                py-1 rounded-md h-fit w-fit text-dark_Match_200 hover:bg-black/20 
                transition-all'>
                    #{ele}
                    <abbr title="remove tag">
                        <div onClick={()=>RemoveTag(idx)}
                         className='__Remove__ absolute top-[-4px] right-[-4px] 
                        h-4 w-4 hover:bg-red-700 rounded-full flex bg-black/30
                        items-center justify-center hover:border-[1px]'>
                            <div className=' scale-50'><CloseIcon color='white' size={1}/></div>
                        </div>
                    </abbr>
                </div>
            )}
        </div>
        <div className=' bg-green-800/0 h-[50px] w-full flex items-center
         px-4 gap-4 max-w-[300px] '>
            <input onKeyDown={
                (e)=>{
                    if(e.key === "Enter"){
                        AddnewTag();                
                    }
                }
            }
            placeholder='New Tag'
            className=' flex-1 outline-none p-2 border-b 
            dark:border-[#474747] font-thin tracking-wider
             border-[#cdcdcd]' 
            value={props.CurrnetTag.trim()}
            onChange={(e)=>props.setCurrentTag(e.target.value)}
            type="text" />
            {(!props.CurrnetTag.includes("#") && (props.CurrnetTag.trim()!=="")) &&
                <div onClick={AddnewTag}
                 className=' p-3 bg-black rounded-full max-sm:p-2'>
                    <CheckIcon/>
                </div>
            }
        </div>
    </>
  )
}

export default TagManager