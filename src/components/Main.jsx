import React from 'react'
import imageBiryani from "../assets/Chicken_biryani_banner.png"
import thaliDish from "../assets/Thali_food_platter.jpg"
function Main() {
  return (
    <main className=' h-[180vh] flex justify-center items-center bg-[#F5F5F5]'>
      {/* image portion */}
      <div className=' h-[100%] w-[50%] pl-[10vw]'>
        <div>
          <img src={thaliDish} alt="dishImage" className='h-[100vh] ' />
        </div>

      </div>
      {/* text portion */}
      <div className=' h-[100%] w-[50%]'>


      </div>


    </main>
  )
}

export default Main
