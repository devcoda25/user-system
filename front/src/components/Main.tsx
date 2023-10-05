import React from 'react';
import Profilepic from '../alex.jpg';
import { User } from './User';
import Search from './Search';

interface MainProps {
  user: User | null;
}

function Main({ user }: MainProps) {
  if (user === null) {
    return <div>No user logged in</div>;
  }

  return (
    <div className='flex-col mt-6 ml-[25px]'>
      <Search />
      <div className='items-center justify-center'>
        <h1 className='text-black  px-4 mt-4 justify-center items-center'>My Profile</h1>

        <div className='flex flex-col mt-4'>
          <img src={Profilepic} alt='Profile picture' className='w-[100px] h-[100px] rounded-full' />
          <h2 className='text-black text-center mt-4'>{user.firstName} {user.lastName}</h2>
          <h3 className='text-gray-500 text-center mt-2'>{user.email}</h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
