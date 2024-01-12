import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import { UserInfoContext } from '../Contexts/UserInfoContext';
import MainPostComp from '../ExploreComps/MainPostComp';
import NewPost from './AddPostComponents/NewPost';
import { fetch_All_posts } from '../Controllers/FetchPosts';

const PostsComponent:React.FC = () => {
  // const {
  //   profileLink,
  //   name,
  //   occupation
  // } = useContext<any>(GlobalContext);

  // const {FetchedData,setFetched} = useContext<any>(UserInfoContext);

  const [ShowPostAdder,setPostAdder] = useState<boolean>(false)

  const BlogImagePostParas = [
    "Average new programmer following long tutorial on youtube!",
    ` It is difficult to trust the quality and learning we will 
    develop by following the free courses. The more annoying 
    side is when you realize that it have low worth of time, 
    after you have completed a portion of it. The end result 
    will not make you learn anything and repeating the same 
    basics everytime you start a new lecture.`,
    ` Start with such courses only after you are sure it 
    have all you need. AlgoZenith provides`
  ]

  const BlogPostParas = [
    `Excited to share my latest project with all of
    you on REzZUMY ! 🚀✨ I've just completed 
    working on an amazing web application built using 
    the MERN stack, and I couldn't be happy of the results. 🎉🔥`,
    `The MERN stack, which stands for MongoDB, Express.js,
    React, and Node.js, has been a game-changer in terms 
    of development speed and efficiency. It allowed me to 
    create a robust and dynamic application with seamless 
    interactions and a smooth user experience. 💻💡`,
    `Throughout this journey, I've had the opportunity
    to learn and grow as a developer, facing challenges 
    head-on and implementing cutting-edge features. `
  ]

  const CustomPostParas = [
    `Artificial Intelligence (AI) has emerged as a transformative force, 
    revolutionizing various aspects of our daily lives. Its applications 
    range from virtual assistants and recommendation algorithms to cutting-edge
    technologies like autonomous vehicles and advanced medical diagnostics. 
    At the heart of AI's capabilities is machine learning, enabling systems 
    to learn from data and improve their performance over time. As AI continues 
    to evolve, ethical considerations, such as algorithmic bias and privacy 
    concerns, become increasingly important, requiring a delicate balance 
    between technological innovation and ethical responsibility.`,
    `The integration of AI into society has already yielded 
    remarkable advancements. Virtual assistants like Siri and 
    Alexa have become ubiquitous, making natural language 
    processing a standard feature in many devices. Machine learning 
    algorithms power personalized recommendations on streaming platforms, 
    enhancing user experiences. In healthcare, AI contributes to quicker 
    and more accurate diagnostic processes, potentially 
    revolutionizing patient care.`,
  ]

  const BlogImagePostImages = [
    "https://media.licdn.com/dms/image/D4D22AQG6syzcHk5d2w/feedshare-shrink_800/0/1703947522768?e=1707350400&v=beta&t=xa14qEkQjuo2Hj7605Ce3hUP1bjvOTtGZcwog7SYhiU",
    "https://media.licdn.com/dms/image/D5622AQHcMAQVRxV2qQ/feedshare-shrink_800/0/1704123816696?e=1707350400&v=beta&t=7bysH8FBlbcsqEZmQZee_NpwP030qap8Xq1CrTQsPYY"
  ]

  const MyPost = `
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
    </style>
</head>
<body>

<div class="container" id="content">
    <h1>The Importance of AI</h1>
    <img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" alt="AI Image">
</div>
</body>
</html>
`;

  const {FetchedData,setFetchData} = useContext<any>(UserInfoContext);



  //  [
  //   {   
  //       postID:"POST_ID",
  //       USER_UID : "",
  //       identifiers:[],
  //       type : 'BlogPost',
  //       name:"The Admin of REzZUMY",
  //       occupation:"Adminstrator",
  //       profileLink:"https://i.postimg.cc/bdXB5cNW/Screenshot-2023-08-22-185748.png",
  //       Paras:["Test text.comfk"],
  //       tags:["placements","internship","collage","competitiveprogramming","mern","kkmk\\"],
  //       prjInfo:{
  //           imgLink:"https://www.livemint.com/lm-img/img/2024/01/11/600x338/im-910163_1704964507663_1704964545560.jpg",
  //           prjLink:"www.www.com",
  //           githubLink:"3lcfn3ccfkj"
  //       },
  //       likedBy:[],
  //       isLiked:false,
  //       noOfStars:0,
  //       noofCommas:0,
  //       noOfShares:0
  //   },
  //   {
  //     postID:"PostID_here",
  //     USER_UID : "",
  //     identifiers : ["id_1","id_2","id_3"],
  //     type : 'BlogPost',
  //     name : "Rocket Launcher",
  //     occupation : occupation,
  //     profileLink : profileLink, 
  //     Paras : BlogPostParas, // Array of String
  //     tags:["mern","webdevelopment","fullstack","node","react","mongodb"],
  //     prjInfo : {
  //       imgLink : "https://blog-it-ten.vercel.app/static/media/home_pc.c323c8481dd5355b7845.png",
  //       prjLink : "https://blog-it-ten.vercel.app/",
  //       githubLink : "https://github.com/VarunChowdary0" 
  //     },
  //     likedBy : [], // _ usernames _
  //     isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary"]), // boolean -> check if
  //     noOfStars : 1403,
  //     noofCommas : 21 ,
  //     noOfShares : 15
  //   },
  //   {
  //     postID : "PostID_here",
  //     USER_UID : "",
  //     identifiers : ['id1','id2'],
  //     type : 'BlogImagePost',
  //     name : name,
  //     occupation : occupation,
  //     profileLink : profileLink ,
  //     Paras : [`By wrapping the arrow function in an additional set of parentheses and immediately
  //      calling it with (), TypeScript should recognize it as an expression and allow the return type to be React.ReactNode.`],
  //     tags : [],
  //     images : ["https://i.postimg.cc/8kHst0Hh/Screenshot-2024-01-08-185051.png"],
  //     likedBy : [],
  //     isLiked : false,
  //     noOfStars : 32334,
  //     noofCommas : 21 ,
  //     noOfShares : 259
  //   },  
  //   {
  //     postID:"PostID_here",
  //     USER_UID : "",
  //     identifiers : ["id_1","id_2","id_3"],
  //     type : 'BlogImagePost',
  //     name : name,
  //     occupation : occupation,
  //     profileLink : profileLink,
  //     Paras : BlogImagePostParas,
  //     tags : ["placements","internship","collage","competitiveprogramming"],
  //     images : BlogImagePostImages,
  //     likedBy : [username], // _ usernames _
  //     isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary_90"]), // boolean -> check if
  //     noOfStars : 156,
  //     noofCommas : 11 ,
  //     noOfShares : 2,
  //   },
  //   {
  //     postID:"PostID_here",
  //     USER_UID : "",
  //     identifiers : ["id_1","id_2","id_3"],
  //     type : 'CustomPost',
  //     name : name,
  //     occupation : occupation,
  //     profileLink : profileLink,
  //     Post_code : MyPost,
  //     Paras : CustomPostParas,
  //     tags : ["ai",'ml','deeplearning'],
  //     likedBy : ["Sai Varun Chowdary Poludasu","1","varun_chowdary"], // _ usernames _
  //     isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary"]), // boolean -> check if
  //     noOfStars : 58,
  //     noofCommas : 9 ,
  //     noOfShares : 5,
  //   }
  // ] 

  const Fetch = async () =>{
    if(FetchedData.length === 0){
      const response = await  fetch_All_posts();
      if(response.status){
        setFetchData(response.data);
        console.log(response.data)
      }
      else{
        console.log("⚠️ Something went wrong !")
      }
    console.log(FetchedData)
    }
    
  }
  useEffect(()=>{
    Fetch();
  },[])
  return (
    <div className='__posts__ h-fit w-full flex gap-10 flex-col-reverse
    items-center px-10 py-5 max-sm:px-5'>
      {FetchedData.length > 0 ?
        FetchedData.map((post:object,idx:number)=>
        <MainPostComp key={`_posts_`+idx} DataObj={post}/>
        )
        :
        "Loading... "
      }
      <div onClick={()=>{setPostAdder(true)}}
      className='__Skill__ fixed bottom-14 right-14 h-12 w-12 pb-2 shadow-md
       bg-blue-500 rounded-full flex justify-center max-sm:pb-0
        active:scale-110 transition-all items-center max-sm:right-3 '>
        <p className=' text-center text-white font-thin text-5xl max-sm:text-3xl'>+</p>
        <div className='__Remove__ absolute bottom-[-35px] rounded-md
        px-2 py-1 bg-black/20 w-[70px] text-xs max-sm:bottom-0 right-11
        dark:bg-white/20  text-white'>
          Add Post
        </div>
       </div>
       <div>
        <div className={` h-fit w-full fixed max-sm:z-[20] z-[100]
         ${ShowPostAdder?" translate-y-0":" translate-y-[110vh]"}
        bottom-0 right-0 left-0 transition-all duration-500 `}>
          <NewPost setPostAdder={setPostAdder}/>
        </div>
       </div>
    </div>
  )
}

export default PostsComponent