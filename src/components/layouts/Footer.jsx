import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='h-[30vh] w-full bg-[#FEBE10] pl-[8vw] pr-[8vw]'>
        
        <div className='h-[20vh] flex  border-b-black'>
            {/* logo*/}
            <div className=' w-[20%] pt-4'>
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
            </div>
            {/* text area */}
            <div className='  w-[80%] flex  justify-start items-center gap-8'>
                <Link><p className='font-semibold  hover:underline'>About Us</p></Link>
                <Link><p className='font-semibold  hover:underline'>Blog</p></Link>

            </div>

        </div>
        <div className=' h-[10vh] flex justify-center items-center'>
            <p className='text-[14px] text-center'>&#9400; 2025 Forkify All rights reserved</p>
        </div>

    </footer>
  )
}

export default Footer
