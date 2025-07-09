import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { chefAllRecipesThunk } from '../../features/recipes/recipesSlice'
import Pagination from '@mui/material/Pagination';
import { toast } from 'react-toastify'
import RecipeCard from '../../components/RecipeCard';

function ChefAllRecipes() {
    const dispatch=useDispatch()
    const [chefAllRecipes,setChefRecipes]=useState([])
    // for pagination
    const [page, setPage] = useState(1);
    const limit = 8; //limit recipies per page
    const {chefRecipes,totalChefRecipesCount}=useSelector((state)=>state.recipes)
    useEffect(()=>{
        console.log("chef ")
        const getAllRecipesOfChef=async(page,limit)=>{
            try{
                console.log("enter call api")
                const chefId=localStorage.getItem("userID")
                console.log(typeof(chefId))
                const result=await dispatch(chefAllRecipesThunk({page,limit,chefId}))
                if(chefAllRecipesThunk.fulfilled.match(result)){
                    setChefRecipes(chefRecipes)
                }else{
                    console.log("error:get all recipes of chef")
                }

            }catch(error){
                toast.error("Something went wrong!")
                console.log(error)
            }
        }
        getAllRecipesOfChef(page,limit)
    },[page])
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
                <Link className='font-semibold hover:text-[#FEBE10]' to={"/chef/dashboard"}>Home</Link>
                {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
                {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}
                {/* user setting drawer button  */}


                </div>
            </header>
        </div>
        {/* text area*/}
        <div className='pl-[7.5vw]   h-[14vh] '>
            <p className=' mt-6  w-[64vw] font-semibold text-[28px]'>Crafted by You — Your Recipe Collection, All in One Place.</p>
        </div>
        {/* recipes cards */}
         <div className=' h-[122vh] pt-6 flex justify-center items-start flex-wrap gap-6'>
                {/* recipes cards */}
                {chefAllRecipes?(
                    chefAllRecipes.map((element)=>{
                    return <Link to={`/recipeDetails/${element._id}`} state={{chef:true}} key={element._id}> <RecipeCard  name={element.title} desc={element.description} img={element.image} /></Link>
                })
            ):(
                <p>No recipes</p>
            )}
                
        </div>
        {/* pagination buttons */}
        <div className='h-[8vh] overflow-auto flex justify-center items-start'>
            <Pagination
              count={Math.ceil( totalChefRecipesCount/ limit)}//total page number
              page={page}//current page
              onChange={(event, value) => setPage(value)}//update page value in state
              color="primary"
            /> 
        </div>    

    </>
  )
}

export default ChefAllRecipes
