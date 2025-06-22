import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createRecipeThunk } from '../../features/recipes/recipesSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function PreviewRecipe() {
    const dispach=useDispatch()
    const location = useLocation();
    const navigate=useNavigate()
  const recipeDetails= location.state || {};
  console.log("recipe details in preview recipe:",recipeDetails)
  
  const tagBg={
    1:'bg-pink-200',
    2:'bg-orange-200',
    3:'bg-yellow-200',
    4:'bg-orange-200',
    5:'bg-blue-200'
  }

  function handlePublish(){
    const formData = new FormData();
    formData.append('title',recipeDetails.title);
    formData.append('description',recipeDetails.description);
    formData.append('image', recipeDetails.image)
    formData.append('ingredients', JSON.stringify(recipeDetails.ingredients));
    formData.append('steps', JSON.stringify(recipeDetails.steps));
    formData.append('mealType', JSON.stringify(recipeDetails.mealType));
    formData.append('tags', JSON.stringify(recipeDetails.tags));
    const callCreateRecipeApi=async()=>{
      try{
        console.log("in call function ")
        const result=await dispach(createRecipeThunk(formData))
        console.log("result:",result)
        if (createRecipeThunk.fulfilled.match(result)) {
          navigate('/chef/dashboard')            
          toast.success("Recipe publish successfully")
          localStorage.removeItem("formData")
        } else {
            console.error("create recipe failed:", result.payload);
        }
      }catch(error){
        console.log(error)
      }
    }
    callCreateRecipeApi()
  }


   return (
   <>
      {/* headers */}
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
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/"}>Home</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Log Out</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}
              {/* user setting drawer button  */}

            </div>
        </header>
      </div>

      {/* image and description */}
      <div className='  h-[60vh] flex pl-[7vw] pr-[5vw] '>
        {/* image */}
        <div className='  w-[40%] h-[100%] flex justify-center items-center'>
          <img  className='w-80 h-80 object-cover  rounded-2xl'src={recipeDetails.imageURL} alt="recipeImage" />
        </div>
        {/* description */}
        <div className='  w-[60%] h-[100%] flex flex-col justify-center items-center'>
          <p className='  truncate w-[100%] text-[32px] mt-10 font-bold'>{recipeDetails.title}</p>
          <p className='  h-[8vh] w-[100%]  flex justify-start items-center gap-4 '>
            {recipeDetails?.tags?.length > 0 ? (
                recipeDetails.tags.map((element, index) => (
                  <p key={index} className={` p-[3px] text-[14px] rounded-xl font-semibold ${tagBg[index] || 'bg-green-200'}`}>
                    {element}
                  </p>
                ))
              ) : (
                <p>{ }</p>
              )}
          </p>
          {/* NOTE: make limit of description on backend with limeted caharecter */}
          <p className=' text-[18px] h-[30vh]  w-[100%] font-[500]  '>{recipeDetails.description}</p>
        </div>
      </div>
       {/* ingrediants and steps */}
      <div className=' h-[90vh]   bg-[#f5f5f5] flex pl-[7vw] pr-[5vw] gap-4 '>
         {/* steps */}
         <div className=' h-[100%] w-[60%] p-[10px]   rounded-2xl'>
            <p className='  text-[18px] font-bold shadow-sm  bg-amber-200 rounded-sm pl-[20px]  sticky top-0 z-2 '>STEPS</p>
            <div className="h-[80vh] pt-4 pl-4 flex flex-col justify-start items-start gap-5 overflow-y-auto ">
              {recipeDetails?.steps?.length > 0 ? (
                recipeDetails.steps.map((element, index) => (
                  <div
                    key={index}
                    className="pl-2 flex justify-start items-center gap-2 rounded-xl border-2 border-[#2A7B9B] p-3"
                  >
                    <input type="checkbox" className="w-6 h-6 accent-blue-200" />
                    <p className="max-w-xl text-[18px] font-semibold">
                      Step {index + 1}:&nbsp;&nbsp;{element}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No steps available.</p>
              )}
            </div>
         </div>

         {/* ingrediants */}
         <div className='  border-2 border-amber-600 rounded-2xl h-[100%] w-[40%] pt-[10px] pl-[14px]  bg-ingrediants'>
            <p className='  text-[18px] font-bold '>INGREDIENTS</p>
            <div className="h-[80vh] pt-2 pl-4 overflow-y-auto">
              {recipeDetails?.ingredients?.length > 0 ? (
                recipeDetails.ingredients.map((element, index) => (
                  <p
                    className="max-w-sm text-[18px] font-semibold pt-4"
                    key={index}
                  >
                    {index + 1}.&nbsp;&nbsp;{element}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">No ingredients available.</p>
              )}
            </div>
         </div>
         
      </div>
      <div className='  h-[16vh] flex justify-start items-center pl-[8vw] gap-[32vw]'>
        <button className='border-2 border-yellow-800  hover:bg-yellow-800 hover:text-white p-2 rounded-2xl font-semibold' onClick={()=>{navigate('/create-recipe'),{state:{...recipeDetails}}}}>Edit Recipe</button>
        {/* IMPORTANT NOTE : make local storage form data free before publish form */}
        <button className='border-2 border-green-800  hover:bg-green-800 hover:text-white p-2 rounded-2xl font-semibold' onClick={()=>{handlePublish()}}>Publish Recipe</button>

      </div>

   </>
  )
}

export default PreviewRecipe
