import React from 'react'
import imageBiryani from "../assets/Chicken_biryani_banner.png"
import thaliDish from "../assets/Thali_food_platter.jpg"
function Main() {
  return (
    <main className=' h-[88vh] flex justify-center items-center bg-[#F5F5F5]'>
      {/* image portion */}
      <div className=' h-[100%] w-[50%] pl-[10vw]'>
        <div>
          <img src={thaliDish} alt="dishImage" className='h-[87vh] ' />
        </div>

      </div>
      {/* text portion */}
      <div className=' h-[100%] w-[50%] flex flex-col justify-start items-center pt-[16vh]'>
        {/* heading */}
          <p className=' w-[42vw] text-[48px] font-bold '>
            Discover Delicious Recipes Instantly with <span className='italic text-orange-400'>Forkify</span> 
          </p>
        {/* subheading */}
        <p className=' w-[42vw] text-[18px]'>
          Explore thousands of recipes, customize your cooking experience, and become part of a food-loving community — all in one place.
        </p>
        {/* button  */}
        <button className='mt-5 p-2 pl-4 pr-4 rounded-[6px] font-semibold border-2 border-orange-400 hover:bg-[#FEBE10] hover:border-2 hover:border-[#FEBE10] '>Explore recipes</button>
      </div>
    </main>
  )
}

export default Main
