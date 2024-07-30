import React from 'react';
import Logo from '../../assets/Logo.png';
import './Login.css';

const Login = () => {
  return (

    
    <div className='mainScreen '>


      <div className="bar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>



      <div className="w-full flex justify-center items-center h-screen">
        <div className='w-[400px] py-[30px] px-[20px] bg-white rounded-3xl shadow-lg'>
          <h1 className='text-center text-[45px] mb-6'>Login</h1>

          <div className='mb-4'>
            <div className='flex flex-col'>
              <label htmlFor="username" className='block text-base mb-2 text-left'>Username</label>
              {/* Ensuring input takes full width */}
              <input type='text' id='username' className='border text-base px-3 py-2 w-full rounded-2xl' />
            </div>
          </div>

          <div className='mb-6'>
            <div className='flex flex-col'>
              <label htmlFor="password" className='block text-base mb-2 text-left'>Password</label>
              {/* Ensuring input takes full width */}
              <input type='password' id='password' className='border text-base px-3 py-2 w-full rounded-2xl' />
            </div>
          </div>

          <div className='mb-6 flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <a href='#' className='text-blue-500 hover:underline'>Forgot Password</a>
          </div>

          <button className='border-2 rounded-lg w-full py-3 bg-blue-500 text-white hover:bg-blue-600'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
