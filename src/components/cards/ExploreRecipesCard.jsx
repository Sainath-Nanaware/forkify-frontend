import React from 'react'
import thaliDish from "../../assets/healthy_food.jpg"


function ExploreRecipesCard({img,name,description,rating,margin}) {
  return (
    <div className={`${margin} max-w-4xl w-full mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300`}>
  {/* Image Section */}
  <div className="md:w-1/3 w-full">
    <img
      src={thaliDish} // Replace with recipe image URL
      alt="Recipe"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="p-6 flex flex-col justify-between md:w-2/3 w-full">
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
      {description}
      </p>
    </div>
    
    {/* Rating */}
    <div className="flex items-center gap-2">
      <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
      <span className="text-gray-500 text-sm">(4.5 / 5)</span>
    </div>
  </div>
</div>

  )
}

export default ExploreRecipesCard
