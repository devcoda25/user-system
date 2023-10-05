import React, { useState } from 'react';
import { deleteUser , editUser } from '../api';
import { TrashIcon } from '@heroicons/react/24/solid';
import { PencilIcon } from '@heroicons/react/24/outline';
import Profilepic from '../alex.jpg';
import Modal from 'react-modal';

import { CreateUserDTO } from 'src/user/create-user.dto';

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



const UsersCard: React.FC<{ users: User[] }> = ({ users }) => {
  const [user, setUser] = useState<User[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [createUserDTO, setCreateUserDTO] = useState<CreateUserDTO | null>(null);


  async function handleDeleteUser(id: number) {
    try {
      await deleteUser(id);
      setUser(users.filter(user => user.id !== id));
      // Handle successful deletion, e.g., update the UI or show a success message
    } catch (error) {
      // Handle error, e.g., show an error message
    }
  }

  async function handleEditUser(id: number) {
    setEditUserId(id);
    setModalIsOpen(true);
  }

  async function handleSave() {
    if (editUserId && createUserDTO) {
      await editUser(editUserId, createUserDTO);
      setModalIsOpen(false);
      // Update users
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className='w-full mt-4 px-4 mx-4'>
      <table className='w-[800px]'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4'>Profile</th>
            <th className='px-4'>Age</th>
            <th className='px-4'>Residence</th>
            <th className='px-4'>Email</th>
            <th className='px-4'>Contact</th>
            <th className='px-4'>Delete</th>
            <th className='px-4'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr className='border-b py-4 h-4 my-4' key={user.id}>
              <td className='px-4'>
                <img
                  className='w-[30px] h-[30px] rounded-full'
                  src={Profilepic}
                  alt='Profile'
                />
              </td>
              <td className='px-4 py-4'>{user.user_age}</td>
              <td className='px-4 py-4'>{user.placeOfResidence}</td>
              <td className='px-4 py-4'>{user.email}</td>
              <td className='px-4 py-4'>{user.contact}</td>
              <td className='px-4 py-4'>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className='w-4 hover:text-red-500'
                >
                  <TrashIcon />
                </button>
              </td>
              <td className='px-4 py-4'>
                <button  onClick={() => handleEditUser(user.id)}  className='w-4 hover:text-green-500'>
                  <PencilIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Edit User</h2>
        <form>
          <input type="text" name="firstname" placeholder="First name" onChange={(e) => setCreateUserDTO({...createUserDTO, firstname: e.target.value})}/>
          {/* More inputs... */}
          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default UsersCard;
