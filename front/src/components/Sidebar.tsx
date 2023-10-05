import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  Cog8ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<string>>;
}

function Sidebar({ setSelectedComponent }: SidebarProps) {
  const handleHomeClick = () => {
    setSelectedComponent('home');
  };

  

  const handleViewUsersClick = () => {
    setSelectedComponent('viewusers');
  };

  const handleViewProfileClick = () => {
    setSelectedComponent('viewProfile');
  };

  const handleProfileSettingsClick = () => {
    setSelectedComponent('profileSettings');
  };

  return (
    <div className='flex'>
      <div className='top-0 z-10 h-full w-[250px] shadow-md border-l-2 bg-white items-center'>
        <div className='h-[60px] border-b-2 w-full'>
          <h1 className='mx-6 py-4 font-bold text-2xl justify-items items-center'>
            Dashboard
          </h1>
        </div>
        <div className=''>
          <h6 className='font-light mx-4 px-4 py-4'>Menu</h6>
          <ul className='mx-1'>
            <li className='flex space-x-4 mt-2 px-4 py-2 hover:bg-gray-100 hover:border-l-4'>
              <button onClick={handleHomeClick}>
                <HomeIcon className='w-6' />
                <h4>Home</h4>
              </button>
            </li>
          
            <li className='flex space-x-4 mt-2 px-4 py-2 hover:bg-gray-100 hover:border-l-4'>
              <button onClick={handleViewUsersClick}>
                <UserGroupIcon className='w-6' />
                <h4>View Users</h4>
              </button>
            </li>
            <li className='flex space-x-4 mt-2 px-4 py-2 hover:bg-gray-100 hover:border-l-4'>
              <button onClick={handleViewProfileClick}>
                <UserIcon className='w-6' />
                <h4>View Profile</h4>
              </button>
            </li>
            <li className='flex space-x-4 mt-2 px-4 py-2 hover:bg-gray-100 hover:border-l-4'>
              <button onClick={handleProfileSettingsClick}>
                <Cog8ToothIcon className='w-6' />
                <h4>Profile Settings</h4>
              </button>
            </li>
            <li className='flex space-x-4 mt-24 px-4 py-2 hover:bg-gray-100 hover:border-l-4'>
              <Link to='/logout'>
                <ArrowLeftOnRectangleIcon className='w-6' />
                <h4>Logout</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
