import React from 'react'

function UserList({userName,status,role}) {
    const roleBgColor={
         user: 'bg-orange-200',
         admin: 'bg-green-300',
         chef: 'bg-blue-200',
    }
    const statusTextColor={
        pending:'text-yellow-600',
        approved:'text-green-600',
        blocked:'text-red-600'
    }
  return (
    <div className=' ml-[7vw] mr-[7vw] p-[10px] h-[11vh] flex justify-between items-center shadow-xl rounded-sm'>
        {/*user name and role tag */}
        <div className='  pl-[1vw] flex justify-center items-center gap-2'>
            <p className='font-semibold text-[18px]'>{userName}</p>
            <p className={`pl-[4px] pr-[4px] ${roleBgColor[role]||roleBgColor.user} rounded-sm italic`}>{role}</p>
        </div>
        {/* status */}
        <div className=' pr-[1vw] flex justify-center items-center gap-2'>
            <button className={`pl-[4px] pr-[4px] text-[18px]  ${statusTextColor[status]||text-gray-300} font-semibold rounded-sm`}>{status}</button>
            <button className='p-[6px] bg-blue-500 rounded-xl text-amber-50 font-medium '>Change status</button>
        </div>
    </div>
  )
}

export default UserList
