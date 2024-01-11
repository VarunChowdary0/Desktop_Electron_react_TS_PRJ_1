import React, {  useContext, useState } from 'react'
import TagManager from './TagManager';
import PrjAssebler from './PrjAssebler';
import ParaAdder from './ParaAdder';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { UserInfoContext } from '../../Contexts/UserInfoContext';
import ArrowIcon from '../../icons/ArrowIcon';

interface CurrentProps{
  setOptions:React.Dispatch<React.SetStateAction<string>>;
}
const ReportAssembler:React.FC<CurrentProps> = (props) => {
    const [tagArr,setTags] = useState<Array<string>>([]);
    const [CurrnetTag,setCurrentTag] = useState<string>("");
    const [PrgDirectLink,setPrgDirectLink] = useState<string>("");
    const [previewImg,setPreviewImg] = useState<string>("")
    const [Git_hub_repo_link,set_Git_hub_repo_link] = useState<string>("")
    const [PerviousParas,AddPreviousPara] = useState<Array<string>>([]); 
    const [currentPara,setCurrentPara] = useState<string>("");
    const { name,
          occupation,
          profileLink,
    } = useContext<any>(GlobalContext);

    const { setD , setPreview} = useContext<any>(UserInfoContext);
    const handleSavePost = () => {
      const PostObject = {
          postID : "POST_ID",
          identifiers : [],
          type : 'BlogPost',
          name : name,
          occupation : occupation,
          profileLink : profileLink,
          Paras : PerviousParas,
          tags : tagArr,
          prjInfo : {
            imgLink : previewImg,
            prjLink : PrgDirectLink,
            githubLink : Git_hub_repo_link || "",
          },
          likedBy : [],
          isLiked : false,
          noOfStars : 0,
          noofCommas : 0,
          noOfShares : 0
      }
      // console.log(JSON.stringify(PostObject));
      setD(PostObject);
      setPreview(true);
    }
  return (
    <>
    <div onClick={()=>props.setOptions("")}
    className=' absolute h-6 w-6 flex items-center 
    justify-center bg-[#1c1b1b]
     rounded-full top-5 left-3 '>
        <ArrowIcon color='white' size={1} angle='0'/>
     </div>
              <ParaAdder 
              PerviousParas={PerviousParas} 
              AddPreviousPara={AddPreviousPara}
              currentPara={currentPara}
              setCurrentPara={setCurrentPara}
              />
   <div className=' flex-1 h-full max-sm:w-full  bg-red-500/0 p-5
     max-sm:mb-[100px] flex flex-col max-sm:gap-4 gap-10'>
              <TagManager tagArr={tagArr}
              setTags={setTags}
              CurrnetTag={CurrnetTag}
              setCurrentTag={setCurrentTag}/>
              <PrjAssebler PrgDirectLink={PrgDirectLink}
              previewImg={previewImg} 
              Git_hub_repo_link={Git_hub_repo_link} 
              setPreviewImg={setPreviewImg}
              setPrgDirectLink={setPrgDirectLink}
              set_Git_hub_repo_link={set_Git_hub_repo_link}
        />
      <div className=' w-full max-sm:flex items-center justify-center'>
          <div className=' dark:bg-black shadow-lg bg-white 
                  rounded-3xl w-fit'>
            <button onClick={handleSavePost} className=' text-black hover:text-white
              dark:text-white border transition-all'>Preview</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ReportAssembler