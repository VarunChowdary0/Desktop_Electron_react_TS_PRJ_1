import React, { useContext, useState } from 'react'
import ParaAdder from '../ParaAdder';
import TagManager from '../TagManager';
import { GlobalContext } from '../../../Contexts/GlobalContext';
import { UserInfoContext } from '../../../Contexts/UserInfoContext';
import ArrowIcon from '../../../icons/ArrowIcon';

interface CurrentProps{
    setOptions:React.Dispatch<React.SetStateAction<string>>;
}

const CustomAssembler:React.FC<CurrentProps> = (props) => {
    const [tagArr,setTags] = useState<Array<string>>([]);
    const [CurrnetTag,setCurrentTag] = useState<string>("");
    const [PerviousParas,AddPreviousPara] = useState<Array<string>>([]); 
    const [currentPara,setCurrentPara] = useState<string>("");
    
    const { name,
          occupation,
          profileLink,
    } = useContext<any>(GlobalContext);
  const {setPreview,setD} = useContext<any>(UserInfoContext);
  

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

 

    const handleSavePost = () => {
      const PostObject = {
          postID : "POST_ID",
          identifiers : [],
          type : 'CustomPost',
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

export default CustomAssembler