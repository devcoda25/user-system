import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import UsersCard from '../components/UsersCard';

import { getAllUsers } from '../api';

interface User {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  user_age: number;
  placeOfResidence: string;
  email: string;
  contact: string;
}

function ViewUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setIsLoading(true);
      const usersData = await getAllUsers();
      setUsers(usersData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <div className='flex-col mt-6 ml-[25px]'>
      <Search />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UsersCard users={users} /> // Pass the users prop to the UsersCard component
      )}
    </div>
  );
}

export default ViewUsers;
