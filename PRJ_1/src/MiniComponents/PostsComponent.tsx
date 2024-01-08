import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import { UserInfoContext } from '../Contexts/UserInfoContext';
import MainPostComp from '../ExploreComps/MainPostComp';

const PostsComponent:React.FC = () => {
  const {
    profileLink,
    name,
    occupation
  } = useContext<any>(GlobalContext);

  const {username} = useContext<any>(UserInfoContext);

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

      const DidIlikeIt = (likedBy:Array<string>) =>{
          if(likedBy.includes(username)){
              return true;
          }
          return false;
      } 

  const PostsObjectArr = [
    {
      postID:"PostID_here",
      identifiers : ["id_1","id_2","id_3"],
      type : 'BlogPost',
      name : "Rocket Launcher",
      occupation : occupation,
      profileLink : profileLink, 
      Paras : BlogPostParas, // Array of String
      tags:["mern","webdevelopment","fullstack","node","react","mongodb"],
      prjInfo : {
        imgLink : "https://blog-it-ten.vercel.app/static/media/home_pc.c323c8481dd5355b7845.png",
        prjLink : "https://blog-it-ten.vercel.app/"
      },
      likedBy : [], // _ usernames _
      isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary"]), // boolean -> check if
      noOfStars : 1403,
      noofCommas : 21 ,
      noOfShares : 15
    },
    {
      postID : "PostID_here",
      identifiers : ['id1','id2'],
      type : 'BlogImagePost',
      name : name,
      occupation : occupation,
      profileLink : profileLink ,
      Paras : [`By wrapping the arrow function in an additional set of parentheses and immediately
       calling it with (), TypeScript should recognize it as an expression and allow the return type to be React.ReactNode.`],
      tags : [],
      images : ["https://i.postimg.cc/8kHst0Hh/Screenshot-2024-01-08-185051.png"],
      likedBy : [],
      isLiked : false,
      noOfStars : 32334,
      noofCommas : 21 ,
      noOfShares : 259
    },  
    {
      postID:"PostID_here",
      identifiers : ["id_1","id_2","id_3"],
      type : 'BlogImagePost',
      name : name,
      occupation : occupation,
      profileLink : profileLink,
      Paras : BlogImagePostParas,
      tags : ["placements","internship","collage","competitiveprogramming"],
      images : BlogImagePostImages,
      likedBy : [], // _ usernames _
      isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary_90"]), // boolean -> check if
      noOfStars : 156,
      noofCommas : 11 ,
      noOfShares : 2,
    },
    {
      postID:"PostID_here",
      identifiers : ["id_1","id_2","id_3"],
      type : 'CustomPost',
      name : name,
      occupation : occupation,
      profileLink : profileLink,
      Post_code : MyPost,
      Paras : CustomPostParas,
      tags : ["ai",'ml','deeplearning'],
      likedBy : ["Sai Varun Chowdary Poludasu","1","varun_chowdary"], // _ usernames _
      isLiked : DidIlikeIt(["Sai Varun Chowdary Poludasu","1","varun_chowdary"]), // boolean -> check if
      noOfStars : 58,
      noofCommas : 9 ,
      noOfShares : 5,
    }
  ] 
  return (
    <div className='__posts__ h-fit w-full flex gap-10 flex-col
    items-center px-10 py-5 max-sm:px-5'>
      {
        PostsObjectArr.map((post,idx)=>
        <MainPostComp key={`_posts_`+idx} DataObj={post}/>
        )
      }
      
    </div>
  )
}

export default PostsComponent