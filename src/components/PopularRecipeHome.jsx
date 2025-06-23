import React from 'react'
import RecipeCard from './RecipeCard';

function PopularRecipeHome() {
    const recipes = [
  {
    id:101,
    name: "Spaghetti Carbonara",
    description: "A creamy, cheesy pasta made with eggs, Pecorino Romano, pancetta, and pepper – a Roman classic.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
    
  },
  {
    id:102,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with tender spiced chicken – a celebration of Indian flavors.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  {
    id:103,
    name: "Avocado Toast",
    description: "Crispy sourdough topped with creamy avocado, chili flakes, and a poached egg.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  {
    id:104,
    name: "Sushi Platter",
    description: "A variety of fresh sushi rolls and sashimi, beautifully arranged with wasabi and pickled ginger.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"

  },
   
    
];

    return (
    <div className=' h-[82vh] bg-[#f5f5f5]'>
        {/* text area */}
        <div className=' h-[20vh] mt-6 '>
            <p className=' text-2xl md:text-4xl font-bold text-gray-900 mb-4 text-center '>
                Popular Recipes You Can't Miss
            </p>
            <p className=' text-center w-[55vw] ml-[22vw] font-medium text-gray-500'>
                Explore a mouthwatering collection of our most-loved, top-rated recipes that bring flavor, creativity, and joy to every kitchen – perfect for beginners and seasoned cooks alike!
            </p>
        </div>
        {/* recipe cards */}
        <div className=' h-[58vh] flex justify-center items-center flex-wrap gap-5'>
            {recipes && recipes.map((element)=>{
                return <RecipeCard key={element.id} name={element.name} desc={element.description} img={element.image}/>
            })}

        </div>
      
    </div>
  )
}

export default PopularRecipeHome
