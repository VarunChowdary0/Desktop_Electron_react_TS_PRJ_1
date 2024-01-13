import React, { useContext, useState } from 'react'
import ParaAdder from '../ParaAdder';
import TagManager from '../TagManager';
import { GlobalContext } from '../../../Contexts/GlobalContext';
import { UserInfoContext } from '../../../Contexts/UserInfoContext';
import ArrowIcon from '../../../icons/ArrowIcon';
import { v4 as uuidv4 } from 'uuid'
import HeightComp from './heightComp';

interface CurrentProps{
    setOptions:React.Dispatch<React.SetStateAction<string>>;
}

const CustomAssembler:React.FC<CurrentProps> = (props) => {
    const [tagArr,setTags] = useState<Array<string>>([]);
    const [CurrnetTag,setCurrentTag] = useState<string>("");
    const [PerviousParas,AddPreviousPara] = useState<Array<string>>([]); 
    const [currentPara,setCurrentPara] = useState<string>("");
    const [postHeight,setPostheight] = useState<number>(450);
    
    const { name,
          occupation,
          profileLink,
    } = useContext<any>(GlobalContext);
  const {setPreview,setD,USER_UID} = useContext<any>(UserInfoContext);
  

  const [CurrentCode,setCurrentCode] = useState<string>(`
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: white;
             display:  flex;
             align-items: center;
             justify-content: center;
        }

        .container {
            max-width: 800px;
            padding: 20px;
            background-color: #232323;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        *::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
          
          *::-webkit-scrollbar-track {
            background: #f1f1f100; /* color of the track */
          }
          
          *::-webkit-scrollbar-thumb {
            background-color: #3f51b5; /* color of the thumb */
            border-radius: 6px; /* roundness of the thumb */
          }
    </style>
</head>
<body>

<div class="container" id="content">
    <h1>Tips for Custom Post</h1>
    <ul>
        <li>Use Dark Backgrounds</li>
        <li>Keep Light colored text</li>
        <li>Resize the images</li>
        <li>⚠️ Maintain the minimum height of the 
        window for 400px to 450px</li>
    </ul>
    <!--Code Starts Above -->
</div>
</body>
</html>
  `)

  const [flasher,setFlasher] = useState("")


    const handleSavePost = () => {
      if(
       (PerviousParas.length !== 0 
        ||
        tagArr.length !== 0)
        &&
        (CurrentCode.length!==0)
      ){
        const PostObject = {
          postID : uuidv4()+"_post",
          USER_UID:USER_UID,
          identifiers : [],
          type : 'CustomPost',
          postHeight : postHeight,
          name : name,
          occupation : occupation,
          profileLink : profileLink,
          Post_code:CurrentCode,
          Paras : PerviousParas,
          tags : tagArr,
          likedBy : [],
          isLiked : false,
          noOfStars : 0,
          noofCommas : 0,
          noOfShares : 0
      }
    //   console.log(JSON.stringify(PostObject));
      setD(PostObject);
      setPreview(true);
      }
      else{
        console.log("Empty")
        setFlasher("⚠️ Cannot post can't be empty");
        setTimeout(()=>{
          setFlasher("");
        },2000)
       }
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
              <div className=' h-full w-full bg-red-500/0 flex
               flex-col pl-4 gap-4
              items-start justify-center'>
                <textarea placeholder={`
                      <head>
                      <style>
                          body {
                              font-family: 'Arial', sans-serif;
                              margin: 0;
                              padding: 0;
                              color: white;
                               display:  flex;
                               align-items: center;
                               justify-content: center;
                          }
                  
                          .container {
                              max-width: 800px;
                              padding: 20px;
                              background-color: #232323;
                              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                              border-radius: 8px;
                          }
                  
                          img {
                              max-width: 100%;
                              height: auto;
                              border-radius: 8px;
                              margin-bottom: 20px;
                          }
                          // Additional Styles 
                      </style>
                  </head>
                  <body>
                  
                  <div class="container" id="content">
                      <-- Your Code --/>
                  </div>
                  </body>
                  </html>
                `}
                className=' h-[50vh] max-h-[50vh] rounded-lg
                min-h-[50vh] min-w-[90%] max-w-[90%]
                 outline-none p-5 text-orange-600
                 dark:bg-dark_dark_100'
                 onChange={(e)=>setCurrentCode(e.target.value)}
                 value={CurrentCode}
                 ></textarea>
              </div>
            <abbr title="adjust the frame height">
            <div className=' flex gap-2 flex-row items-center justify-center'>
                <div>frame height</div>
                <input 
                value={postHeight}
                onChange={(e)=>{
                  setPostheight(parseInt(e.target.value))
                }}
                 placeholder=' Set frame height ?'
                className=' px-3 absolute outline-none
                 right-[100px] py-2 w-[180px] rounded-lg bg-black/40'
                  type="number" max={600} min={100}/>
              </div>
            </abbr>
      <div className=' w-full max-sm:flex items-center justify-center mb-5 max-sm:mb-0'>
      <p className=' mb-10'>{flasher}</p>
          <div className='max-sm:mt-[50px] dark:bg-black shadow-lg bg-white 
                  rounded-3xl w-fit'>
            <button onClick={handleSavePost} className=' text-black hover:text-white
              dark:text-white border transition-all '>Preview</button>
          </div>
      </div>
      <HeightComp/>
    </div>
    </>
  )
}

export default CustomAssembler