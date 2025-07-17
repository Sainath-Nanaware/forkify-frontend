import React, { useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import imageBiryani from "../assets/salad.jpg"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validations/authSchema';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { Button } from '@mui/material';



function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // const email=useRef()
  // const password=useRef()
  const user = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit=async()=>{
    console.log("login button press");
    const credentials = getValues(); // Automatically gives { email, password }
    // const credentials={email:email.current.value,password:password.current.value}
    try {
      const resultAction = await dispatch(login(credentials));
      
      if (login.fulfilled.match(resultAction)) {
      const role = resultAction.payload.data.role;
      // Navigate based on role
      //chef navigation is remaining and please solve guest and user confussion
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'user') {
        navigate('/foodie/dashboard');
      }else if (role === 'chef') {
        navigate('/chef/dashboard');
      } else {
        navigate('/unauthorized');
      }
    } else {
      console.error("Login failed:", resultAction.payload);
    }
  } catch (error) {
    console.error("Login error:", error);
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
              {/* <Link className='font-semibold hover:text-[#FEBE10]'>About Us</Link>
              <Link className='font-semibold hover:text-[#FEBE10]'>Blog</Link>
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/login"}>Login</Link> */}
              <Link className='font-semibold hover:text-[#FEBE10]' to={"/signUp"}>Sign up</Link>

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

      {/* Right Side - Login Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-[#f5f5f5]">
        <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Welcome Back
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FEBE10]"
                {...register('email')}
                // ref={email}
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
                // ref={password}
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
             <Button type='submit' sx={{
                       backgroundColor: '#FEBE10',
                       borderRadius: '6px',
                      color: 'black',
                      fontWeight: 550,
                      fontSize: '16px',
                      textTransform: 'none',
                      width:'100%'

   
             }}>Login</Button>
            <p className='text-center pt-2'>
                Don't have an account? <Link  className='text-blue-700 underline' to={"/signUp"}>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
