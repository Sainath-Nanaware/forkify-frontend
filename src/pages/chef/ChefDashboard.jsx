import React from 'react'

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
import MailIcon from '@mui/icons-material/Mail';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { Link } from 'react-router-dom';

function ChefDashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
    <div className=''>
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
    </div>
    <div className=' pb flex justify-start items-start h-[16vh] gap-[6vw]'>
    <div className=''>
      <Button onClick={toggleDrawer(true)}><DehazeOutlinedIcon sx={{ color: 'black' }}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    {/* text and*/}
    <div className='  h-[16vh] '>
        <p className=' mt-6 text-xl w-[64vw] font-semibold text-[22px]'>Feeling spicy or sweet? Let your taste buds decide – explore top recipes and share your foodie journey with ratings & reviews!</p>
    </div>
    {/* sort option */}
    <div className='mt-[4vh]'>
             <select
                id="role"
                name="role"
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-800"
                // value={} onChange={handleChangeRole}
            >           
                <option value="">--Select Meal Type--</option>
                <option value="lunch">Lunch</option>
                <option value="breakfast">breakfast</option>
            </select>
    </div>
    </div>

    {/* dishs cards */}
    <div className='pb h-[100vh]'>

    </div>
    </>

  );
}



export default ChefDashboard
