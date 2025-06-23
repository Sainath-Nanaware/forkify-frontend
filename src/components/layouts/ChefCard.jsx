import React from 'react'
import { useNavigate } from 'react-router-dom'
import chef from '../../assets/lady-chef.jpg'

function ChefCard() {
    const navigate=useNavigate()
  return (
    <>
    <div className=' h-[70vh] flex justify-center items-center pl-[9vw] pr-[9vw] '>
        <div className='border-2 border-[#FEBE10] w-full h-[50vh] flex rounded-2xl shadow-2xl'>
            {/* text area */}
            <div className=' w-[60%] h-full rounded-2xl p-[30px]'>
                 <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                     Share Your Culinary Masterpieces
                 </h2>
            <p className="text-gray-700 mb-6">
                Your recipes deserve to be seen, tried, and loved by food lovers everywhere.
          Join our vibrant chef community where creativity meets appreciation.
          Publish your signature dishes, inspire home cooks, and grow your personal brand
          as a culinary artist. Your kitchen stories could be someone’s next favorite meal.

             </p>
              <button
                onClick={() => navigate('/signUp')}
                 className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
                >
                 Get Started
              </button>
            </div>
            {/* image  */}
            <div className=' w-[40%] h-full rounded-2xl flex justify-center items-center '>
              <img src={chef} alt="chef-image" className='  relative w-120 h-120 md:w-90 md:h-90 object-cover rounded-full border-8 border-[#FEBE10] shadow-lg -mt-12 -mr-16"' />

            </div>
        </div>

    </div>
    
    </>
  )
}

export default ChefCard
