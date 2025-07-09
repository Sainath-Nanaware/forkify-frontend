import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LogoutIcon from '@mui/icons-material/Logout';


import MailIcon from '@mui/icons-material/Mail';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesWithMealTypeThunk } from '../../features/recipes/recipesSlice';
import Pagination from '@mui/material/Pagination';
import RecipeCard from '../../components/RecipeCard';


function ChefDashboard() {
  const navigate=useNavigate();
   // for pagination
  const [page, setPage] = useState(1);
  const limit = 8; //limit recipies per page

  //api call 
  const {allRecipesArray,totalRecipesCount}=useSelector((state)=>state.recipes)
  const dispatch=useDispatch()
  const [mealType,setMealType]=useState('all')
  
  useEffect(()=>{
    const getAllRecipesInfo=async(page,limit)=>{
        console.log(page,limit)
        // always remember asyncThunk not take multiple parameter it's take only one  then we wrap age and limit into single object and pass
        const resultAction=await dispatch(getAllRecipesWithMealTypeThunk({page,limit,mealType}))
    }
    getAllRecipesInfo(page,limit)
  },[page,mealType])
  
  //get redux state  All recipesArray and count
  useEffect(() => {
  console.log("Updated state:", allRecipesArray,"total recipe count:", totalRecipesCount);
  }, [allRecipesArray, totalRecipesCount]);

  // side drawer icons
  const drawerIcons={
        0:<AccountBoxIcon/>,
        1:<TurnedInIcon/> ,
        2:<MenuBookIcon/>,
        3:<ModeEditIcon/>,
        
  }

  //user side drawer routes
  const drawerItem=[
    { text:'Profile', route:'/profile' },
    { text: 'Saved', route:'/savedRecipes' },
    { text: 'Recipes', route: '/chefAllRecipes' },
    { text: 'Create Recipe', route: '/create-recipe' }
  ]

  const handleDrawerOptionClick=(route)=>{
    navigate(route)
  }
 


  // drawer logic 
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerItem.map((element, index) => (
          <ListItem key={element.text} disablePadding>
            <ListItemButton onClick={()=>{handleDrawerOptionClick(element.route)}}>
              <ListItemIcon>
                {drawerIcons[index]}
              </ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Log Out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>{
              localStorage.clear()
              navigate('/login')}}>
              <ListItemIcon>
                {<LogoutIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/"}>Home</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link>
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}
              {/* user setting drawer button  */}
              <Button onClick={toggleDrawer(true)}><AccountCircleIcon sx={{ color: 'black' }}/></Button>


            </div>
        </header>
    </div>


    {/* tag line and select option */}
    <div className='  flex justify-start items-start h-[16vh] gap-[6vw]'>
    <div className=' '>
      {/* <Button onClick={toggleDrawer(true)}><DehazeOutlinedIcon sx={{ color: 'black' }}/></Button> */}
      <Drawer   anchor="right"  PaperProps={{
          sx: {
                      height: '100vh',
                      top: '8vh', // Adjust this to match your header height
                      position: 'fixed',
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      overflow: 'auto',
              },
            }} open={open} onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
    {/* text area*/}
    <div className=' ml-5   h-[16vh] '>
        <p className=' mt-6 text-xl w-[64vw] font-semibold text-[22px]'>Feeling spicy or sweet? Let your taste buds decide – explore top recipes and share your foodie journey with ratings & reviews!</p>
    </div>
    {/* select option */}
    <div className='mt-[4vh]'>
             <select
                id="role"
                name="role"
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-800"
                 value={mealType} onChange={(e)=>{setMealType(e.target.value)}}
            >           
                <option value="all">All</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
            </select>
    </div>
    </div>

    {/* dishs cards */}
    <div className=' h-[122vh] pt-6 flex justify-center items-start flex-wrap gap-6'>
        {/* recipes cards */}

        {allRecipesArray && allRecipesArray.map((element)=>{
            return <Link to={`/recipeDetails/${element._id}`} key={element._id}> <RecipeCard  name={element.title} desc={element.description} img={element.image} /></Link>
        })}


    </div>

      {/* pagination buttons */}
      <div className=' h-[8vh] flex justify-center items-start'>
          <Pagination
            count={Math.ceil(totalRecipesCount / limit)}//total page number
            page={page}//current page
            onChange={(event, value) => setPage(value)}//update page value in state
            color="primary"
          /> 
      </div>
    </>

  );
}



export default ChefDashboard
