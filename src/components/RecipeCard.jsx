import React from 'react'

function RecipeCard({name,desc,img}) {
  return (
    <div className=' p-[8px] h-[52vh] w-[19vw] shadow-2xl flex  flex-col justify-center items-center gap-1 rounded-xl'>
        <img className=' h-[28vh] w-[20vw] rounded-xl object-cover' src={img} alt="recipeImage" />
        <p className=' text-[18px] font-semibold'>{name}</p>
        <p className=' line-clamp-2 text-gray-500'>{desc}</p>
        <button className='pt-[2px] pb-[2px] pl-[6px] pr-[6px] mt-1 font-semibold rounded-sm border-2 border-orange-400 hover:bg-[#FEBE10] hover:border-2 hover:border-[#FEBE10]'>See Full Details</button>
      
    </div>
  )
}

export default RecipeCard
