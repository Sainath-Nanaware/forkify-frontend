import React from 'react'

function Header() {
  return (
   <header className='pb h-[10vh] bg-gray-80 flex justify-center items-center'>
        {/* logo */}
        <div className='pb w-[50%] h-[100%] pl-[10vw]'>
            <div className='pb w-[37vw] h-[100%] bg-[#282828]
 flex justify-center items-center'>
                    <svg width="260" height="74" viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g transform="translate(10, 15)">
                          <rect x="10" y="5" width="4" height="30" fill="#ffffff" />
                          <rect x="16" y="5" width="4" height="30" fill="#ffffff" />
                          <rect x="22" y="5" width="4" height="30" fill="#ffffff" />
                          <rect x="14" y="35" width="8" height="25" rx="2" fill="#ffffff" />
                        </g>

                        <text x="50" y="70" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="36" fill="#ffffff" font-weight="600" letter-spacing="1">
                          Forkify
                        </text>
                     </svg>

            </div>

        </div>
        {/* login */}
        <div className='pb w-[50%] h-[100%]'>

        </div>

   </header>
  )
}

export default Header
