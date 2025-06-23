import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change background when scrollY reaches 300px
      setScrolled(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header className={`  h-[10vh] bg-gray-80 flex justify-center items-center ${scrolled? 'bg-[#FEBE10] shadow-sm' :'bg-[#f5f5f5]'} sticky top-0 z-50`}>
        {/* logo */}
        <div className=' w-[50%] h-[100%] pl-[10vw]'>
            <div className={` w-[36.4vw] h-[100%] ${scrolled? 'bg-[#FEBE10] ':'bg-[#fdd677]'}     
 flex justify-center items-center pl-[3vw]`}>
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
        <div className='w-[50%] h-[100%] flex justify-end items-center gap-10 pr-[5vw]'>
          <Link className={`font-semibold ${scrolled? 'hover:text-white' :'hover:text-[#FEBE10]'} `} to={"/"}>Home</Link>
          <Link className={`font-semibold ${scrolled? 'hover:text-white' :'hover:text-[#FEBE10]'} `}>About Us</Link>
          <Link className={`font-semibold ${scrolled? 'hover:text-white' :'hover:text-[#FEBE10]'} `}>Blog</Link>
          <Link className={`font-semibold ${scrolled? 'hover:text-white' :'hover:text-[#FEBE10]'} `} to={"/login"}>Login</Link>
          <Link className={`font-semibold ${scrolled? 'hover:text-white' :'hover:text-[#FEBE10]'} `} to={"/signUp"}>Sign up</Link>

        </div>

   </header>
  )
}

export default Header
