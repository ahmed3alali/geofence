import React from 'react';
import Logo from '../../assets/Logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";


const Login = () => {

const navigate = useNavigate();

const handleClick=()=>{

navigate('/dashboard');

};

  return (

    
    <div className='mainScreen'>




      <div className="bar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>



      <div className="w-full flex justify-center items-center h-screen">
        <div className='w-[400px] py-[30px] px-[20px] bg-white rounded-3xl shadow-lg'>
          <h1 className='text-center text-[45px] mb-6 font-titleFont font-bold'>Login</h1>

          <div className='mb-4'>
            <div className='flex flex-col'>
              <label htmlFor="username" className='block text-base mb-2 text-left font-custom font-light'>Username</label>
              {/* Ensuring input takes full width */}
              <input type='text' id='username' className='border text-base px-3 py-2 w-full rounded-2xl' />
            </div>
          </div>

          <div className='mb-6'>
            <div className='flex flex-col'>
              <label htmlFor="password" className='block text-base mb-2 text-left font-custom font-light'>Password</label>
              {/* Ensuring input takes full width */}
              <input type='password' id='password' className='border text-base px-3 py-2 w-full rounded-2xl' />
            </div>
          </div>

          <div className='mb-6 flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe' className='font-custom font-light'>Remember Me</label>
            </div>
            <a href='#' className='text-blue-500 hover:underline font-custom font-light'>Forgot Password</a>
          </div>

          <button className='border-2 rounded-lg w-full py-3 bg-blue-500 text-white hover:bg-blue-600 font-light font-custom' onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
