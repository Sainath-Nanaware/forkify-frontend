import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers, getUsersByRole } from '../../features/users/usersSlice'
import UserList from '../../components/cards/UserList'
import { getUsersInfoByRole } from '../../api/apiRequests'

function AdminDashboard() {
  const dispatch=useDispatch()
  const {usersInfo}=useSelector((state)=>state.users)
  const [selectedRole,setSelectedRole]=useState('allusers')
  function handleChangeRole(e){
    setSelectedRole(e.target.value)
  }
  useEffect(()=>{
    console.log("selected role:",selectedRole);
    if(selectedRole!='allusers'){
      dispatch(getUsersByRole(selectedRole))
    }else{
      dispatch(getAllUsers())
    }
  },[selectedRole])

  return (

    <>
      {/* <h1>Admin dashboard</h1> */}
      {/* header */}
      <header className='  h-[8vh] bg-gray-80 flex bg-[#f5f5f5] sticky top-0 z-50 shadow-sm'>
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
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/"}>Home</Link>
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link>
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Log Out</Link>

            </div>
      </header>
      {/* admin name and sort user tab */}
      <div className=' pl-[8vw] pr-[8vw] h-[16vh] flex justify-between items-center gap-[20vw]'>
          <p className='font-semibold text-xl'>Welcome Admin!!</p>
          <div>
            <select
                id="role"
                name="role"
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-800"
                value={selectedRole} onChange={handleChangeRole}
            >           
                <option value="allusers">All Users</option>
                <option value="admin">Admin</option>
                <option value="chef">Chef</option>
                <option value="user">user</option>
            </select>
          </div>
          
      </div>
      {/* user list cards */}
      <div className=' h-[76vh] overflow-y-auto flex flex-col gap-10 pt-[10px] '>
            {usersInfo && usersInfo.map((element)=>{
                return <UserList key={element._id} userName={element.username} status={element.status} role={element.role}/>
            })}
            
      </div>

    </>
  )
}

export default AdminDashboard
