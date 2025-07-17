import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getUserInfo } from '../../api/apiRequests'


function FoodieProfile() {
    const [user,setUser]=useState({})
    const defaultValue="N/A"
    useEffect(()=>{
        const getUserDetails=async(userId)=>{
            try{
                const response=await getUserInfo(userId)
                console.log(response.data.data)
                setUser(response.data.data)
                // console.log("user details:",user)
            }catch(error){
                console.log("error while get user details")
            }
        }
        const userId=localStorage.getItem("userID")
        getUserDetails(userId)
        console.log("user details:",user)
    },[])
    
  return (
    <>
         {/* header */}
        <div className='sticky top-0 z-50 shadow-sm'>
            <header className='  h-[8vh] bg-gray-80 flex  sticky top-0 z-50 shadow-sm '  style={{
            background: "linear-gradient(90deg, #FFE066, #FFF9DB",
            }}
    >
            {/* logo */}
            <div className='w-1/2 h-[100%] '>
                <div className=' w-[36.4vw] h-[100%] 
    flex justify-start items-center pl-[4vw]'>
                        <Link to={"/"}>
                        <svg width="260" height="74" viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <g transform="translate(10, 15)">
                            <rect x="10" y="5" width="4" height="30" fill="#4B5563" />
                            <rect x="16" y="5" width="4" height="30" fill="#4B5563" />
                            <rect x="22" y="5" width="4" height="30" fill="#4B5563" />
                            <rect x="14" y="35" width="8" height="25" rx="2" fill="#6B7280" />
                            </g>

                            <text x="50" y="70" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontSize="36" fill="#111827" fontWeight="600" letterSpacing="1">
                            Forkify
                            </text>
                        </svg>
                        </Link>
                    </div>

                </div>
                {/* tab fields */}
                <div className=' w-[50%] h-[100%] flex justify-end items-center gap-10 pr-[5vw]'>
                <Link className='font-semibold hover:text-[#FEBE10]' to={"/foodie/dashboard"}>Home</Link>
                {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}
                {/* user setting drawer button  */}


                </div>
            </header>
        </div>
        {/* user info */}
         <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
            <div className="flex flex-col items-center">
              <img
                src={user.avatar || "https://img.freepik.com/premium-vector/young-man-eating-burger-cartoon-flat-vector_621660-5828.jpg"}
                alt="User Avatar"
                className="w-30 h-30 rounded-full mb-4 shadow"
              />
              <h2 className="text-2xl font-semibold mb-1">{user.username || defaultValue}</h2>
              <p className="text-gray-500 mb-4">{user.role || defaultValue}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Full Name:</span>
                <span className="font-medium">{user.username || defaultValue}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{user.email || defaultValue}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{user.phone || defaultValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Joined:</span>
                <span className="font-medium">{ user.createAt?.slice(0,10) || defaultValue}</span>
              </div>
            </div>
          </div>
        </div>    
    </>
  )
}

export default FoodieProfile
