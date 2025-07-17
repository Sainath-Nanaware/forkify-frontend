import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { getAllSavedRecipesThunk } from '../../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import RecipeCard from '../../components/RecipeCard';
import { removeSavedRecipe } from '../../api/apiRequests';


function SavedRecipes() {
  const dispatch=useDispatch()
  const role=localStorage.getItem("role")
  // const [savedRecipesState,setSavedRecipeState]=useState()
  const {savedRecipes}=useSelector((state)=>state.users)
  const userId=localStorage.getItem("userID")

  const handleRemoveSavedRecipe=async(recipeId)=>{
    try {
          await removeSavedRecipe(userId,recipeId)
          toast.info("Recipe unsaved!")
          getSavedRecipes(userId)
      } catch (error) {
        toast.error("something went wrong!")
        console.log("error get all remove recipe from saved")
      }
  }
   const getSavedRecipes=async(userId)=>{
      try {
          const result=await dispatch(getAllSavedRecipesThunk(userId))
          if(getAllSavedRecipesThunk.fulfilled.match(result)){
              // setSavedRecipeState(savedRecipes)
          }else{
              console.log("error:get all recipes of chef")
          }
      } catch (error) {
        toast.error("something went wrong")
        console.log("error get all saved recipes")
      }    
    }
  
  useEffect(()=>{    
    getSavedRecipes(userId)
  },[userId])
  return (
    <>
    {/* header */}
    <div className='sticky top-0 z-50 shadow-sm'>
         <header className='  h-[8vh] bg-gray-80 flex  sticky top-0 z-50 shadow-sm '  style={{
         background: "linear-gradient(90deg, #FFE066, #FFF9DB",
         }}
>
        {/* logo */}
        <div className='w-1/2 h-[100%] '>
            <div className=' w-[36.4vw] h-[100%] 
 flex justify-start items-center pl-[4vw]'>
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
            <div className=' w-[50%] h-[100%] flex justify-end items-center gap-10 pr-[5vw]'>
              {role==="chef"?(<Link className='font-semibold hover:text-[#FEBE10]' to={"/chef/dashboard"}>Home</Link>):(
                <Link className='font-semibold hover:text-[#FEBE10]' to={"/foodie/dashboard"}>Home</Link>
              )}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/chef/dashboard"}>Home</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}
              {/* user setting drawer button  */}


            </div>
        </header>
    </div>
    {/* text area */}
    <div className=' h-[10vh] content-center text-[22px] font-semibold pl-[7.5vw]'>
         {<TurnedInIcon/>} Saved Recipes!
    </div>
    {/* recipe cards */}
    <div className=' h-[80vh] overflow-y-auto flex justify-center items-center flex-wrap gap-6'>
        {savedRecipes?(
          savedRecipes?.map((element)=>{
            return <RecipeCard key={element._id} id={element._id} name={element.title} desc={element.description} img={element.image} saveRecipePage={true} removeRecipe={handleRemoveSavedRecipe}/>
          })

        ):(
          <p>No recipes!</p>
        )}

    </div>
    
    </>
  )
}

export default SavedRecipes
