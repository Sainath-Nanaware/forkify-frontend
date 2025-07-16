import React from 'react'
import RecipeCard from './RecipeCard';
import { useNavigate } from 'react-router-dom';

function PopularRecipeHome() {
  const navigate=useNavigate()
    const recipes = [
    {
    id:101,
    name: "khaman dhokla",
    description:"While the traditional khaman dhokla is a vibrant yellow from the chickpea flour, there's also khatta dhokla which is lighter in color, made with rice or semolina, and sometimes even has a white appearance.",
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-khaman-dhokla-recipe-how-to-make-instant-soft-and-spongy-dhokla-video-recipe.jpg"

  },
  ,
  {
    id:102,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with tender spiced chicken – a celebration of Indian flavors.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/frjm2fuc175aezdkya1d"
  },
  {
    id:103,
    name: "Sandwich",
    description: "Indulge in our aromatic paneer tikka sandwich with a zesty mint chutney, grilled to perfection.",
    image: "https://cdn7.kiwilimon.com/recetaimagen/39809/640x640/52340.jpg.jpg"
  },
  {
    id:104,
    name: "Cheesy Pasta",
    description: "A creamy, cheesy pasta made with eggs, Pecorino Romano, pancetta, and pepper – a Roman classic.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlpvo-OjyEfQ0fh7yfX_IuUna1KgNksaAPweSEUrg3v0RSpCKSm9-POSare-IEkLY3UA&usqp=CAU"
    
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
        <div className='hover:bg-amber-400 transition-colors duration-1100 ease-in-out p-6 rounded h-[58vh] flex justify-center items-center flex-wrap gap-5'>
            {recipes && recipes.map((element)=>{
                return <div key={element.id} className="p-[8px] h-[52vh] w-[19vw] shadow-2xl flex flex-col justify-center items-center gap-1 rounded-xl bg-white">
                         <img
                           className="h-[28vh] w-[20vw] rounded-xl object-cover"
                           src={element.image}
                           alt="recipeImage"
                         />
                         <p className="text-[18px] font-semibold">{element.name}</p>
                         <p className="line-clamp-2 text-gray-500 text-center px-2">{element.description}</p>
                         <button onClick={()=>{navigate("/login")}}  className="pt-[2px] pb-[2px] px-[6px] mt-1 font-semibold rounded-sm border-2 border-orange-400 hover:bg-[#FEBE10] hover:border-[#FEBE10]">
                           See Full Details
                         </button>
                        </div>
            })}

        </div>
      
    </div>
  )
}

export default PopularRecipeHome
