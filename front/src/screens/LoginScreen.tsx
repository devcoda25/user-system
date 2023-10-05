import React, { useState } from 'react';

import { LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import See from '../pic.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';




function Loginscreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('handleLogin function called'); 
    try {
      const response = await login({ email, password }); // Use the login function from your api.tsx file

      // Handle the response here, e.g., redirect the user or show a success message
      console.log('Login successful', response);
      navigate(`/dashboard?user=${encodeURIComponent(JSON.stringify(response))}`);
    } catch (error) {
      // Handle login errors, e.g., display an error message to the user
      console.error('Login failed', error);
    }
  };
  return (
    <div>
      <div className='w-[1000px] h-[500px] mx-auto mt-[100px] justify-between px-10 flex bg-gray-50 rounded-lg'>
        <div className='flex-col'>
          <div className='h-[400px] object-cover'>
            <img className='w-full h-[400px]' src={See} alt='See' />
          </div>
          <div className='flex-col'>
            <h2 className='text-black'>Welcome back</h2>
            <h4>Manage your account and personal info</h4>
          </div>
        </div>
        <div className='py-10 w-[400px] my-10'>
          <h2 className='text-black'>Welcome back</h2>
          <h4>Manage your account and personal info</h4>
          <div className='flex-col mt-8'>
            <label className='relative text-gray-400 focus-within:text-gray-600 block'>
              <EnvelopeIcon className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3' viewBox='0 0 20 20' fill='currentColor' />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email@kemuscorp.com'
                className='form-input border  rounded-sm py-3 px-4  border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className='relative text-gray-400 focus-within:text-gray-600 block mt-8'>
              <LockClosedIcon className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3' viewBox='0 0 20 20' fill='currentColor' />
              <input
                type={passwordVisible ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
                className='form-input border  rounded-sm py-3 px-4  border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className='absolute top-1/2 transform -translate-y-1/2 right-3'
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeIcon className='w-6 h-6' /> : <EyeSlashIcon className='w-6 h-6' />}
              </button>
            </label>

            <div className='justify-end items-end'>
              <h4 className='text-blue-400 items-end'>Forgot Password</h4>
            </div>

            <button  onClick={handleLogin} className='bg-blue-400 w-full mt-4 h-10 rounded-lg text-white' type='button' >
              Login
            </button>

            <div className='flex justify-between'>
              <div className='flex space-x-4'>
                Don't have an account! <h5 className='text-base text-blue-400'>signup here</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
