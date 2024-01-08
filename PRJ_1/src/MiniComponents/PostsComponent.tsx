import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import BlogPost from '../ExploreComps/BlogPost';
import CustomPost from '../ExploreComps/CustomPost';
import BolgImagePost from '../ExploreComps/BolgImagePost';
import PostHeader from '../ExploreComps/InnterComps/PostHeader';
import PostFooter from '../ExploreComps/InnterComps/PostFooter';
import DivideLine from '../MiniCopms/DivideLine';

const PostsComponent:React.FC = () => {
  const {
    profileLink,
    name,
    occupation
  } = useContext<any>(GlobalContext);

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


  const PostsObjectArr = [
    {
      type : 'BlogPost',
      name : "varun",
      occupation : occupation,
      profileLink : profileLink,
      Paras : BlogPostParas,
      tags:["mern","webdevelopment","fullstack","node","react","mongodb"],
      prjInfo : {
        imgLink : "https://blog-it-ten.vercel.app/static/media/home_pc.c323c8481dd5355b7845.png",
        prjLink : "https://blog-it-ten.vercel.app/"
      },
      isLiked : true,
      noOfStars : 1403,
      noofCommas : 21 ,
      noOfShares : 15
    },
    {
      type : 'BlogImagePost',
      name : name,
      occupation : occupation,
      profileLink : profileLink,
      Paras : BlogImagePostParas,
      tags : ["placements","internship","collage","competitiveprogramming"],
      images : BlogImagePostImages,
      isLiked : false,
      noOfStars : 156,
      noofCommas : 11 ,
      noOfShares : 2,
    },{
      type : 'CustomPost',
      name : name,
      occupation : occupation,
      profileLink : profileLink,
      Post_code : MyPost,
      Paras : CustomPostParas,
      tags : ["ai",'ml','deeplearning'],
      isLiked : true,
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
        <div key={`_posts_`+idx} className=" w-[500px] h-fit  bg-white
        dark:bg-dark_dark_200 dark:text-white shadow-sm
          max-sm:w-[100%] flex flex-col p-2 rounded-md gap-3">
        <PostHeader name={post.name} profileUrl={post.profileLink} occupation={post.occupation}/>
         {
          post.type === 'BlogPost' && 
          <BlogPost prjInfo={post.prjInfo} Paras={post.Paras} tags={post.tags}/>
         }
         {
          post.type === 'BlogImagePost' &&
          <BolgImagePost Paras={post.Paras} imagesLinks={post.images||[]} tags={post.tags}/>
         }
         {
          post.type === 'CustomPost' &&
          <CustomPost Paras={post.Paras} 
          MyPost={post.Post_code || ""}
          tags={post.tags}
          />
         }
        <DivideLine/>
        <PostFooter isLiked={post.isLiked} noOfStars={post.noOfStars} noOfComms={post.noofCommas}  noOfShares={post.noOfShares}  />
          </div>
        )
      }
    </div>
  )
}

export default PostsComponent