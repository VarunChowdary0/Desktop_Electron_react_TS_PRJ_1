import React, { useContext, useEffect, useState } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext';
import UsersConnections from '../../PopUps/POPUPS_2/UsersConnections';
import MainPostComp from '../../ExploreComps/MainPostComp';
import { fetch_this_posts } from '../../Controllers/FetchPosts';
import { fetch_stats_info } from '../../Controllers/ControlStatsPage';

interface CurrentProps{
    profileLink : string;
    name : string;
    USER_UID : string;

    ViewerInfo:object;
     setViewer : React.Dispatch<React.SetStateAction<{
        name : string,
        profileLink : string,
        USER_UID : string
    } | any >>;
}

const OthersStats:React.FC<CurrentProps> = (props) => {
    const {
        showConnectionsPopUp
        ,setshowConnectionPopUp,
        setIsSeeingOther,
    } = useContext<any>(UserInfoContext);
    const [myPosts,setMyposts] = useState<Array<object>>([]);
    const [CS_,setCS] = useState<number>(0);
    const [myConnections,setConnections] = useState<Array<object>>([]);
    const [connectionLoad,setConnectionLoad] = useState(true);
    const [isPostsFetched,setPostsFect] = useState(false);
    // Add contributions
    const [othersOcc,setOthersOcc] = useState("NA");
    const userPosts = async () =>{
        // console.log(props.USER_UID)
        await fetch_this_posts(props.USER_UID)
            .then((res)=>{
                setMyposts(res.data.data);
                if(res.data.data.length !== 0){
                    setOthersOcc(res.data.data[0].occupation);
                }
                setPostsFect(true);
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const Fetch_Stats = async () =>{
      await  fetch_stats_info(props.USER_UID)
            .then((res)=>{
                if(res.status){
                    // console.log(res.data.data);
                    const info = res.data.data;
                    setCS(info.credit_score);
                    setConnections(info.connections)
                    setConnectionLoad(false);
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(()=>{
        Fetch_Stats();
        userPosts();
    },[props.ViewerInfo])
    useEffect(()=>{
        setshowConnectionPopUp(false);
    },[])
    const skjbvdj = () =>{
        setIsSeeingOther(false);
    }
  return (
    <div className=' w-full h-fit min-h-screen pb-10 z-100
    flex items-center flex-col pt-[200px] max-sm:pt-[100px]
      dark:text-white bg-[#eae8ed] gap-12 overflow-y-auto overflow-x-hidden
      dark:bg-dark_dark_100 '>
        <div
        onClick={skjbvdj} 
        className=' fixed top-10 right-5 p-2 text-white bg-black rounded-xl text-center'>
            back
        </div>
        <div className=' w-[80%] h-[300px] 
         max-md:flex-col max-md:h-fit
         border-[1px] flex bg-white dark:bg-dark_dark_200/90
          rounded-r-[20px] max-sm:gap-14 right_bottom_shadow
           rounded-[50vh] items-center gap-10 relative
        shadow-xl dark:border-none transition-all'>
            <div className=' h-[320px] w-[320px] dark:bg-dark_dark_100
             bg-[#eae8ed]
            rounded-full flex items-center justify-center'>
                <div className=' max-md:w-[300px] max-md:h-[300px] 
                h-[100%] w-[100%] bg-[#3c3c3c]
                overflow-hidden rounded-full  '>
                    <img className=' select-none hover:scale-110 transition-all'
                    alt='RETRY' src={props.profileLink}/>
                </div>
            </div>
            <div className=' flex items-center flex-1 
             justify-around  max-md:flex-col gap-10'>
                <div className='
                 max-sm:pl-5 max-sm:items-end max-sm:px-3
                bg-black/0 flex flex-col gap-3'>
                    <p className=' text-2xl
                    max-sm:text-xl
                    font-thin'>{props.name}</p>
                    <p className=' opacity-50 text-md'>{othersOcc}</p>
                </div> 
                <div className=' __Skill__  h-[100px] w-fit px-7 rounded-md
                flex items-center justify-end
                max-sm:scale-75 relative hover:cursor-help
                bg-orange-500 text-white gap-4'>
                    <p className=' text-5xl'>{CS_}</p> 
                    <span className=' font-thin text-center 
                    text-xl pt-3'>
                        CS
                    </span>
                    <div className=' absolute __Remove__
                     bottom-[-40px] right-[-20px]
                    px-2 py-1 bg-black/25 
                    rounded-sm'>
                        Credit score
                    </div>
                </div>
            </div>
        </div>
        <div className=' bg-black/0  w-[80%] flex gap-10  max-sm:gap-5'>
            <div onClick={()=>{setshowConnectionPopUp(true)}}
            className=' hover:scale-105 transition-all
             text-white flex items-center gap-3 hover:cursor-pointer
              active:scale-100
             px-5 py-2 bg-purple-500 rounded-md w-fit'>
                {
                    !connectionLoad ?
                        <p className=' text-xl'>{myConnections.length}</p> 
                        :
                    <p className=' text-xl'>
                        <l-bouncy-arc
                            size="30"
                            speed="1.65" 
                            color="white" 
                            ></l-bouncy-arc>
                    </p>
                }
                <span className=' text-xs pt-1 font-thin'>Connections.</span>
            </div>
            <div className='hover:scale-105 transition-all
             text-white flex items-center gap-3 hover:cursor-pointer
              active:scale-100
             px-5 py-2 bg-purple-500 rounded-md w-fit'>
                <p className=' text-xl'>
                    NA
                </p>
                <span className=' text-xs pt-1 font-thin'>Contributions.</span>
            </div>
        </div>
        {showConnectionsPopUp&&<UsersConnections 
        MyConnections={myConnections}
        setViewer={props.setViewer}
        />}
        <div className=' w-full h-fit flex bg-[#f2f2f2] dark:bg-black/0 snap-x
         relative overflow-x-auto pt-10 pb-5 px-10 gap-10 max-h-screen'>
            <div className=' sticky top-5 left-10 w-fit max-sm:left-0'>
                <p className=' text-2xl dark:text-white w-[100px]'>Posts</p>
            </div>
            { !isPostsFetched  ? 
              <div className=' items-center justify-center flex w-full'>
                    <l-helix
                    size="45"
                    speed="2.5" 
                    color="white" 
                    ></l-helix>
              </div>
            :
                myPosts.map((ele,idx)=>
                    <div className=' max-sm:pt-[100px]  scale-75 max-sm:scale-100 flex items-center snap-center
                    justify-center' key={"mypost-"+idx}>
                        <MainPostComp  DataObj={ele} index={idx}/> 
                        {/* handle here ... */}
                    </div>
                )
            }
        </div>
    </div>
  )
}


export default OthersStats