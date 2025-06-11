import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imageBiryani from "../assets/salad.jpg"
import { Button } from '@mui/material'
import { signUpSchema } from '../validations/authSchema';
import { useForm } from 'react-hook-form';
import {  signUp } from '../features/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

function SignUp() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit= async()=>{
    
    const userCredentials = getValues(); // Automatically gives {username, email, password }
    try {
      const resultAction = await dispatch(signUp(userCredentials));
      console.log("result action:",resultAction)
      if (signUp.fulfilled.match(resultAction)) {
        console.log("register")
        navigate('/login')
      } else {
        console.error("Sign up failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("Sign up error:", error);
    }
  }
  return (
    <div>
        {/* header */}
        <header className='  h-[8vh] bg-gray-80 flex bg-[#f5f5f5] sticky top-0 z-50'>
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
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link> */}
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link> */}
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> 
              {/* <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link> */}

            </div>
        </header>
        {/* Login form */}
        <div className="h-[80vh] w-screen flex">

        {/* Left Side - Image */}
        <div  className=" w-1/2 h-[90vh] ">
        <img
          src={imageBiryani}
          alt="Delicious Food Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - sign up Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-[#f5f5f5]">
        <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Create your account
          </h2>

          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEBE10]"
                {...register('username')}
              />
              {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}

            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEBE10]"
                {...register('email')}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEBE10]"
                {...register('password')}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Role
              </label>
             <select
                id="role"
                name="role"
                {...register('role')}
                className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-800"
             >           
                <option value="user">Guest</option>
                <option value="chef">Chef</option>
             </select>
            </div>

            <Button type='submit' sx={{
                       backgroundColor: '#FEBE10',
                       borderRadius: '6px',
                      color: 'black',
                      fontWeight: 550,
                      fontSize: '16px',
                      textTransform: 'none',
                      width:'100%'

   
             }}> Sign up</Button>
            {/* <button
              type="submit"
              className="w-full bg-[#FEBE10] font-semibold py-2 rounded-lg hover:bg-[#FEBE10] transition duration-300"
            >
              Sign up
            </button> */}
             <p className='text-center pt-2'>
                Already have an account? <Link  className='text-blue-700 underline' to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
