import React, { useContext, useEffect, useState } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext';
import { connect_to_user, remove_connection } from '../../Controllers/ControlStatsPage';
import { GlobalContext } from '../../Contexts/GlobalContext';

interface CurrrentProps{
    profileUrl : string;
    name : string;
    occupation : string;
    USER_UID : string;
}
const PostHeader:React.FC<CurrrentProps> = (props) => {
  const {
    USER_UID,
    userConnections,
    setuserConnections,
  } = useContext<any>(UserInfoContext);
  const {
    name,
    profileLink,
    occupation
  } = useContext<any>(GlobalContext);
  const [MyCs,setMyCs] = useState<Array<string>>([]);
  const Make_Connection = () => {
    connect_to_user(
      USER_UID,name,profileLink,occupation
      ,props.USER_UID,props.name,props.profileUrl,props.occupation)
      .then((res)=>{
        if(res.status){
            const newConn = (res.data.data);
            setuserConnections([...userConnections,newConn]);
        }
      })
      .catch((Err)=>{
        console.log(Err);
      })
  }
  
  const Remove_Connection = () =>{
      remove_connection(USER_UID,props.USER_UID)
      .then((res)=>{
        if(res.status){
            // console.log(res.data);
            const x = MyCs.indexOf(props.USER_UID)
            // console.log(x);
            const re = [...MyCs.slice(0, x), ...MyCs.slice(x + 1)];
            setMyCs(re);
        }
      })
      .catch((Err)=>{
        console.log(Err);
      })
  }
  useEffect(()=>{
    let x:Array<string> = [];
      userConnections.map((ele:any)=>{
        x.push(ele.Connection_USER_UID)
      })
      const fg = new Set(x);
      setMyCs(Array.from(fg));
  },[userConnections])
  return (
    <div className=' h-[70px] flex max-sm:h-[50px] max-sm:mb-2
			w-full  items-center max-sm:gap-3 gap-5 relative hover:cursor-pointer'>
        <div className='h-[100%] w-[70px] bg-black/50 max-sm:w-[50px]
        rounded-2xl overflow-hidden'>
        <img src={props.profileUrl} alt="prf" />
        </div>
        <div>
            <p className=' max-sm:text-sm truncate font-light'>{props.name}</p>
            <p className=' text-dark_Match_300 truncate
             dark:text-dark_Match_600'>{props.occupation}</p>
            </div>
       {( USER_UID !== props.USER_UID && 
      !MyCs.includes(props.USER_UID)
        )  ?
        <abbr title={`Connect with ${props.name}`}>
          <div onClick={Make_Connection}
           className=' absolute right-5 text-blue-400 
          max-sm:text-sm max-sm:mt-1'>Connect</div>
        </abbr>
        :
        (  ( USER_UID !== props.USER_UID ) &&
          <abbr title={`disconnect with ${props.name}`}>
          <div onClick={Remove_Connection}
          className=' absolute right-5 text-blue-400 
          max-sm:text-sm max-sm:mt-1'>disconnect</div>
        </abbr>
        )
      }
    </div>
  )
}

export default PostHeader