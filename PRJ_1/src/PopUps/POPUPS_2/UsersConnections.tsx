import React, { useContext } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext'

interface CurrentProps{
    MyConnections : Array<{
        name:string,
        profileLink:string,
        Connection_USER_UID:string,
        occupation:string,
        mail:string}> | any ;
}
const UsersConnections:React.FC<CurrentProps> = (props) => {
    const {setshowConnectionPopUp} = useContext<any>(UserInfoContext);
  return (
    <>
    <div onClick={()=>{setshowConnectionPopUp(false)}} className='fixed top-0 
    bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 
    flex items-center justify-center z-30'>
    </div>
    <div className=' fixed  w-fit top-[25%]  z-[100] 
     max-sm:w-[90%] h-[420px] min-w-[30vw] overflow-y-auto shadow-lg
    bg-white dark:bg-dark_surface_200 pb-10 max-sm:pb-7 rounded-lg' >
            <div className="mx-auto max-w-4xl">
                <div className=' sticky top-0 text-2xl bg-white h-16  
                 font-thin dark:bg-dark_surface_200 
                w-[100%] flex items-center shadow-md  px-10 max-sm:px-6 '>
                    Connections
                </div>
                <div className=" px-10 max-sm:px-6
                 mt-[10px] divide-y divide-gray-100 
                dark:divide-[#777b92] flex flex-col ">

                    {
                        props.MyConnections.map((connection:{
                            name:string,
                            profileLink:string,
                            Connection_USER_UID:string,
                            occupation:string,
                            mail:string
                        },idx:number)=>
                        <div key={"connection_"+idx} className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                            <div className="flex min-w-0 gap-x-4">
                          <div className=' h-12 w-12 overflow-hidden rounded-full'>
                          <img className=" flex-none  bg-gray-50" 
                            src={connection.profileLink} alt="NF"/>
                          </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6
                                text-gray-900 dark:text-dark_Match_500 ">
                                    {connection.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                    dark:text-white/60 font-thin
                                ">
                                    {connection.mail}
                                </p>
                            </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                            {connection.occupation}
                        </p>
                            </div>
                        </div>
                        )
                    }

                </div>
            </div>
    </div>
</>
  )
}

export default UsersConnections