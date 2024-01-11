import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Contexts/GlobalContext';
import TagManager from '../TagManager';
import ParaAdder from '../ParaAdder';
import PhotosManager from './PhotosManager';
import { UserInfoContext } from '../../../Contexts/UserInfoContext';
import ArrowIcon from '../../../icons/ArrowIcon';

interface CurrentProps{
    setOptions:React.Dispatch<React.SetStateAction<string>>;
}
const BlogImagePostAssembler:React.FC<CurrentProps> = (props) => {
    const [tagArr,setTags] = useState<Array<string>>([]);
    const [CurrnetTag,setCurrentTag] = useState<string>("");
    const [PerviousParas,AddPreviousPara] = useState<Array<string>>([]); 
    const [currentPara,setCurrentPara] = useState<string>("");
    
    const { name,
          occupation,
          profileLink,
    } = useContext<any>(GlobalContext);

    const [imagesArray,AddImage] = useState<Array<string>>(
        []
        );
    const [currentImg,setCurrntImg] = useState<string>("");

  const {setPreview,setD} = useContext<any>(UserInfoContext);
    const handleSavePost = () => {
      const PostObject = {
          postID : "POST_ID",
          identifiers : [],
          type : 'BlogImagePost',
          name : name,
          occupation : occupation,
          profileLink : profileLink,
          Paras : PerviousParas,
          tags : tagArr,
          images : imagesArray,
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
              <PhotosManager 
              imagesArray={imagesArray} 
              AddImage={AddImage}
              currentImg={currentImg}
              setCurrntImg={setCurrntImg}
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

export default BlogImagePostAssembler