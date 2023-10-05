
import React from 'react';
import {  FaLock ,FaUserAlt} from 'react-icons/fa';


function Login() {
  return (
    <div className="flex-col items-center    h-[800px] space-y-6">
      <div className='mt-4'>
        <h1>Welcomeback</h1>
        <h1>login to acess your account</h1>
      </div>
         <div className="flex items-center space-x-2 mb-4">
           <FaUserAlt className="text-gray-400" />
           <input
             type="text"
             placeholder="Username"
             className="border border-gray-300 px-3 w-[400px]  py-2 rounded-md focus:outline-none focus:border-blue-500"
           />
         </div>
         <div className="flex items-center space-x-2 mb-4">
           <FaLock className="text-gray-400" />
           <input
             type="password"
             placeholder="Password"
             className="border border-gray-300 w-[400px] px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
           />
         </div>
         <button className="bg-blue-500 text-white   w-[400px] px-3 py-2 rounded-md">
           Login
         </button>
       </div>
  )
}

export default Login