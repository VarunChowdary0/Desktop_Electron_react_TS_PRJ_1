import React from 'react'
import Git_hub from '../../icons/Git_hub';
import LinkIcon from '../../icons/Type3_icons/LinkIcon';


interface CurrnetProps{
    PrgDirectLink:string
    setPrgDirectLink:React.Dispatch<React.SetStateAction<string>>;
    previewImg:string
    setPreviewImg:React.Dispatch<React.SetStateAction<string>>;
    Git_hub_repo_link:string
    set_Git_hub_repo_link:React.Dispatch<React.SetStateAction<string>>;
}
const PrjAssebler:React.FC<CurrnetProps> = (props) => {
  return (
        <div className=' h-full w-full  rounded-md text-black dark:text-white 
        flex max-sm:items-center flex-col gap-5 py-5'>
            <div className=' max-sm:ml-0 ml-[7%]
             max-sm:mr-10 flex items-center gap-5'>
                <div className=' h-7 w-7 items-center justify-center
                         flex  rounded-full bg-black/30 dark:bg-black/0'>
                            <LinkIcon/>
                        </div>
                <input onKeyDown={
                    (e)=>{
                        if(e.key === "Enter"){
                            // AddnewTag();                
                        }
                    }
                }
                placeholder='Project Deployed Link'
                className=' flex-1 outline-none p-2 border-b 
                dark:border-[#474747] font-thin tracking-wider
                border-[#cdcdcd] max-w-[300px] h-[40px]
                max-sm:max-w-[200px] min-w-[250px] max-sm:min-w-0' 
                value={props.PrgDirectLink.trim()}
                onChange={(e)=>props.setPrgDirectLink(e.target.value)}
                type="text" />
            </div>
            <div className=' flex max-sm:flex-col
                        max-sm:gap-6 ml-[6%] max-sm:ml-0 max-sm:mr-10 gap-11 '>
                    <div className=' flex items-center justify-center gap-4
                     min-w-[350px] max-sm:min-w-0 '>
                        <div className=' h-7 w-7 items-center justify-center
                         flex  rounded-full bg-black/30 dark:bg-black/0'>
                            <LinkIcon/>
                        </div>
                        <input onKeyDown={
                                (e)=>{
                                    if(e.key === "Enter"){
                                        // AddnewTag();                
                                    }
                                }
                            }
                            placeholder='Project Preview image'
                            className=' flex-1 outline-none p-2 border-b 
                            dark:border-[#474747] font-thin tracking-wider
                            border-[#cdcdcd] max-w-[300px] h-[40px] 
                            max-sm:max-w-[200px]' 
                            value={props.previewImg.trim()}
                            onChange={(e)=>props.setPreviewImg(e.target.value)}
                            type="text" />
                    </div>
                    <div className=' w-[170px] h-[90px] bg-back rounded-md overflow-hidden
                     flex items-center justify-center bg-white dark:bg-black/20'>
                        <img className=' h-[100%] w-[100%]' src={props.previewImg} alt="Preview" />
                    </div>
            </div>
            <div className=' max-sm:ml-0 ml-[7%]
             max-sm:mr-10 flex items-center gap-5'>
                <div className=' scale-125'>
                     <Git_hub/>
                </div>
                <input onKeyDown={
                    (e)=>{
                        if(e.key === "Enter"){
                            // AddnewTag();                
                        }
                    }
                }
                placeholder='Github Repo Link'
                className=' flex-1 outline-none p-2 border-b 
                dark:border-[#474747] font-thin tracking-wider
                border-[#cdcdcd] max-w-[300px] h-[40px]
                max-sm:max-w-[200px] min-w-[250px] max-sm:min-w-0' 
                value={props.Git_hub_repo_link.trim()}
                onChange={(e)=>props.set_Git_hub_repo_link(e.target.value)}
                type="text" />
            </div>
        </div>  )
}

export default PrjAssebler