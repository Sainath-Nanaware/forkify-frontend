// import React from 'react'
// import { Link } from 'react-router-dom'

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function CreateRecipe() {
  const navigate=useNavigate()
 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    ingredients: [''],
    steps: [''],
    mealType: '',
    tags: '',
  });
   useEffect(()=>{
    const  savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
    setFormData(JSON.parse(savedFormData)); 
  }   
  },[])
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log("Event target:",e.target)
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleListChange = (field, index, value) => {
    const updatedList = [...formData[field]];
    updatedList[index] = value;
    setFormData({ ...formData, [field]: updatedList });
  };

  const addToList = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeToList=(field,indexToRemove)=>{
    // console.log(field,indexToRemove)
    const updatedArray=formData[field].splice(indexToRemove, 1);
    // console.log(updatedArray)
    setFormData({...formData,[field]:[...formData[field]]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeDetails={
        title: formData.title,
        description: formData.description||'not provided',
        imageURL: formData.image instanceof File ? URL.createObjectURL(formData.image):null,//create only previewPage image preivew purpose
        image:formData.image||null,
        ingredients:formData.ingredients ||[],
        steps: formData.steps||[],
        mealType: [formData.mealType]||[],
        tags:formData.tags.split(',').map(item => item.trim()),
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate('/previewRecipe',
      {state:{
        ...recipeDetails
      }}
    )
    console.log(formData);
    
  };

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
    {/* Top image tag line */}
    <div className=" w-[80vw] mx-auto bg-white  flex rounded-2xl shadow-lg overflow-hidden mt-8">
      <img
        className="w-[28vw] h-56 object-cover"
        src="https://images.unsplash.com/photo-1528712306091-ed0763094c98" // replace with your image
        alt="Chef cooking"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Make Your Favorite Recipe!</h2>
        <p className="text-gray-600 mb-4">
          Show the world your culinary skills. Publish your favorite recipe and inspire food lovers globally!
        </p>
        <p className="text-yellow-800 w-[20vw] text-[18px] py-2 rounded-xl ">
          Create New Recipe Now!
        </p>
      </div>
    </div>

  <div className=" flex justify-center gap-10 items-start pt-[28px] pl-[3vw] pb-[40px] ">
    {/* steps diagram */}
    <div className="h-[100vh] w-[20vw] flex flex-col justify-center items-center gap-4">
      <p className="border-2 bg-yellow-600 p-2  text-white text-[30px]  rounded-2xl font-semibold">Create Recipe</p>
      <p ><KeyboardDoubleArrowDownIcon/></p>
      <p className=" bg-gray-200 p-2 text-[22px]  rounded-2xl font-semibold" >Preview Recipe</p>
      <p><KeyboardDoubleArrowDownIcon/></p>
      <p className="border-gray-200 bg-gray-200 p-2 text-[20px]  rounded-2xl font-semibold">Publish</p>

    </div>

    {/* create recipe form */}
    <form onSubmit={handleSubmit} className=" max-w-3xl    p-6 bg-white rounded-2xl shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-yellow-600">Create New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title <span className="text-gray-500">(max 100 chars)</span></label>
        <input
          type="text"
          name="title"
          maxLength={100}
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description <span className="text-gray-500">(max 300 chars)</span></label>
        <textarea
          name="description"
          maxLength={300}
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg h-24 resize-none focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Upload Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="block w-full" required />
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-sm font-medium mb-2">Ingredients</label>
        {formData.ingredients.map((ing, i) => (
          <p className="relative">
          <input
            key={i}
            type="text"
            maxLength={100}
            value={ing}
            onChange={(e) => handleListChange('ingredients', i, e.target.value)}
            className="w-full mb-2 border border-gray-300 p-2 rounded-lg"
            placeholder={`Ingredient ${i + 1}`}
            
          />
          <button className="absolute  right-1 text-xl font-semibold bottom-2 hover:text-red-700 p-2  rounded-xl"
            onClick={()=>{removeToList('ingredients',i)}}
          >X</button>
          </p>
        ))}
        <button
          type="button"
          onClick={() => addToList('ingredients')}
          className="text-sm text-yellow-600 hover:underline"
        >
          + Add another ingredient
        </button>
      </div>

      {/* Steps */}
      <div>
        <label className="block text-sm font-medium mb-2">Steps</label>
        {formData.steps.map((step, i) => (
        <p className="relative">
          <textarea
            key={i}
            value={step}
            maxLength={300}
            onChange={(e) => handleListChange('steps', i, e.target.value)}
            className="w-full mb-2 border border-gray-300 p-2 rounded-lg"
            placeholder={`Step ${i + 1}`}
          />
          <button className="absolute  right-1 text-xl font-semibold top-1 hover:bg-gray-300 hover:text-red-700 p-1  rounded-xl"
            onClick={()=>{removeToList('steps',i)}}
          >X</button>
        </p>
        ))}
        <button
          type="button"
          onClick={() => addToList('steps')}
          className="text-sm text-yellow-600 hover:underline"
        >
          + Add another step
        </button>
      </div>

      {/* Meal Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Meal Type</label>
        <select
          name="mealType"
          value={formData.mealType}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg"
          required
        >
          <option value="">Select a meal type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      {/* Tags */}
      <div className=" ">
        <label className="block text-sm font-medium mb-1">Tags <span className="text-gray-500">(comma separated)</span></label>
        <input
          type="text"
          name="tags"
          maxLength={30}
          value={formData.tags}
          onChange={handleChange}
          className="w-[50vw] border border-gray-300 p-2 rounded-lg"
        />
      </div>

      <div className="text-center">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-xl">
          Preview Recipe
        </button>
      </div>
    </form>
    </div>
    </>
  );
}




// Must read:
// 1. perform preview logic we can change form data into recipe detail becasue of tag and mealtype array
// 2.at tme pass dat to preview page we pass recipeDetail Array and in case we reGet data use localStorage
// 3.use local storage data in create recipe page but in PreviewRecipe page we use recipeDetail Array pass by navigate(state)
// 4.before publish recipe clear form data from localStorage 