import React, { useContext } from 'react'
import { UserInfoContext } from '../../Contexts/UserInfoContext'

const UsersConnections:React.FC = () => {
    const {setshowConnectionPopUp} = useContext<any>(UserInfoContext);
  return (
    <>
    <div onClick={()=>{setshowConnectionPopUp(false)}} className='fixed top-0 
    bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 
    flex items-center justify-center'>
    </div>
    <div className=' fixed  w-fit top-[25%] 
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

                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Leslie Alexander
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                leslie.alexander@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                            Co-Founder / CEO
                        </p>
                        </div>
                    </div>


                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Michael Foster
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                michael.foster@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                        Co-Founder / CTO
                        </p>
                        </div>
                    </div>


                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Dries Vincent
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                dries.vincent@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                            Co-Founder / CTO
                            </p>
                        </div>
                    </div>


                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Leslie Alexander
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                leslie.alexander@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                            Co-Founder / CEO
                        </p>
                        </div>
                    </div>


                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Michael Foster
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                michael.foster@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                        Co-Founder / CTO
                        </p>
                        </div>
                    </div>


                    <div className="flex justify-between gap-x-6 py-5 max-sm:gap-x-3">
                        <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6
                             text-gray-900 dark:text-dark_Match_500 ">
                                Dries Vincent
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500
                                 dark:text-white/60 font-thin
                            ">
                                dries.vincent@example.com
                            </p>
                        </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900  dark:text-dark_Match_500">
                                Co-Founder / CTO
                            </p>
                        </div>
                    </div>


                </div>
            </div>
    </div>
</>
  )
}

export default UsersConnections