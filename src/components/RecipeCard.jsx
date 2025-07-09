import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';



function RecipeCard({id, name, desc, img, saveRecipePage,removeRecipe }) {
  const saveRecipePageStatus = saveRecipePage || false;
  const navigate=useNavigate()
  
  
  return (
    <>
      {saveRecipePageStatus ? (
        <div className="relative p-[8px] h-[52vh] w-[19vw] shadow-2xl flex flex-col justify-center items-center gap-1 rounded-xl bg-white">
          {/* Options Menu */}
          <div className="absolute top-2 right-2 z-20">
            <button onClick={()=>{removeRecipe(id)}} >
              <BookmarkRemoveIcon/>
            </button>

            {/* {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
                <button
                  onClick={handleSaveToggle}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {saved ? "Remove from Collection" : "Save to Collection"}
                </button>
              </div>
            )} */}
          </div>
          {/* Card Content */}
          <img
            className="h-[28vh] w-[20vw] rounded-xl object-cover"
            src={img}
            alt="recipeImage"
          />
          <p className="text-[18px] font-semibold">{name}</p>
          <p className="line-clamp-2 text-gray-500 text-center px-2">{desc}</p>
          <Link to={`/recipeDetails/${id}`} ><button className="pt-[2px] pb-[2px] px-[6px] mt-1 font-semibold rounded-sm border-2 border-orange-400 hover:bg-[#FEBE10] hover:border-[#FEBE10]">
            See Full Details
          </button></Link>
        </div>
      ) : (
        <div className="p-[8px] h-[52vh] w-[19vw] shadow-2xl flex flex-col justify-center items-center gap-1 rounded-xl bg-white">
          <img
            className="h-[28vh] w-[20vw] rounded-xl object-cover"
            src={img}
            alt="recipeImage"
          />
          <p className="text-[18px] font-semibold">{name}</p>
          <p className="line-clamp-2 text-gray-500 text-center px-2">{desc}</p>
          <button  className="pt-[2px] pb-[2px] px-[6px] mt-1 font-semibold rounded-sm border-2 border-orange-400 hover:bg-[#FEBE10] hover:border-[#FEBE10]">
            See Full Details
          </button>
        </div>
      )}
    </>
  );
}

export default RecipeCard;
