import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import {  getRandomRecipesThunk } from '../features/recipes/recipesSlice';
import ExploreRecipesCard from '../components/cards/ExploreRecipesCard';
import { Button } from '@mui/material';



//first update all recipe api add pagination in api  

function ExploreRecipes() {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [recipes,setRecipes]=useState([])
    //page and limit used get random recipes
    const limit=4;
    const {randomRecipesArray}=useSelector((state)=>state.recipes)
    console.log("recipesArray in explore recipe component:",randomRecipesArray)
    useEffect(()=>{
      const fetchData=async()=>{
        try {
            const resultAction = await dispatch(getRandomRecipesThunk(limit));
            console.log("result action:",resultAction)
            if (getRandomRecipesThunk.fulfilled.match(resultAction)) {
                setRecipes(resultAction.payload)
            } else {
            console.error("Get All recipes failed:", resultAction.payload);
            }
        } catch (error) {
        console.error("Get All Recipes error:", error);
     }
    }
    fetchData()//remeber useEffect function not asign async
    },[])
    const cardMargin={
      1:'ml-[26vw]',
      2:'mr-[26vw]'
    }
return (
   <>
        <header className='  h-[8vh] bg-gray-80 flex  sticky top-0 z-50 shadow-sm'  style={{
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
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/"}>Home</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link>
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link>
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link>

            </div>
        </header>

        {/* recipe cards */}
        {/* margin use adjest style of card according to cardMargin object*/}


        {/*  RATING LOGIC REMAINING*/}
        <div className='flex flex-col justify-center items-center gap-5 pt-6'>
          {recipes && recipes.map((element,index)=>{     
            return <ExploreRecipesCard key={element._id} img={element.image} name={element.title} description={element.description} margin={cardMargin[index % 2 === 0 ? 1 : 2]} />
          })}        
        </div>

        {/* explore more button */}
        <div className=' h-[12vh] flex justify-center items-center'>
        <Button sx={{
                       backgroundColor: '#FEBE10',
                       borderRadius: '10px',
                      color: 'black',
                      fontWeight: 550,
                      fontSize: '16px',
                      textTransform: 'none',
                      width:'20%'

   
             }} onClick={()=>{navigate('/signUp')}}>Explore More</Button>
        </div>

   
   
   </>
  )
}

export default ExploreRecipes
