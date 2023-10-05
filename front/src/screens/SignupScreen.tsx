import React, { useState,useEffect } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import See from '../pic.png';
import {
  register
} from '../api'

import { CreateUserDTO } from 'src/user/create-user.dto';
import { UserType } from 'src/user/user.entity';
import { User } from '../components/User';



import { useNavigate } from 'react-router-dom';


function Signupscreen() {
  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfResidence, setPlaceOfResidence] = useState('');
  const [email, setEmail] = useState('');
  const [contactList, setContactList] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const contact = contactList
  

  
  const [userType, setUserType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addContact = () => {
    setContactList([...contactList, '']);
  };

  
  const removeContact = (index: Number) => {
    setContactList((prevContactList) =>
      prevContactList.filter((_, i) => i !== index)
    );
  };
  
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const createUserDTO = {
      firstName,
      middleName,
      lastName,
      dateOfBirth: new Date(dateOfBirth),

      placeOfResidence,
      email,
      contact,
      userType: userType as UserType,
      password,
      user_age:0
      
    };
    const registeredUser = await register(createUserDTO);

    // Set the user state variable.
    setUser(registeredUser);

    // Navigate to the dashboard page.
    navigate("/");
  
  };
  

  const createUserDTO = {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    placeOfResidence,
    email,
    contactList,
    userType,
    
  };

  return (
    <div>
      <div className='  mx-auto   px-10 flex bg-gray-50 rounded-lg'>
        <div className='flex-col'>
          <div className='h-[800px] object-cover'>
            <img className='w-[500px] h-[600px] mt-8' src={See} alt='See' />
          </div>
          <div className='flex-col mr-[200px]'>
            <h2 className='text-black'>Welcome New User</h2>
            <h4>Register for a new account</h4>
          </div>
        </div>
        <div className='py-10 w-[400px] my-10'>
          <h2 className='text-black'>Welcome</h2>
          <h4>Signup here for a new account</h4>
          <form className='flex flex-col mt-6 ml-5 mx-10 w-[500px]' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='form-input mt-2 border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
          type='text'
          placeholder='Middle Name'
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className='form-input mt-2 border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='form-input mt-2 border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
          type='date'
          placeholder='Date of Birth'
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className='form-input mt-2 border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
          type='text'
          placeholder='Place of Residence'
          value={placeOfResidence}
          onChange={(e) => setPlaceOfResidence(e.target.value)}
          className='form-input border mt-2 rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-input border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400
           text-gray-500 mt-2 appearance-none w-full pl-10 focus:outline-none'
        />
        <input
  type='password'
  placeholder='Password'
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className='form-input border rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
/>
        <div>
        {contactList.map((contact, index) => (
          <input
            key={index}
            type='text'
            placeholder='Contact'
            value={contact}
            onChange={(e) =>
              setContactList(
                contactList.map((contact, i) =>
                  i === index ? e.target.value : contact
                )
              )
            }
            className='form-input border  mt-2 rounded-sm py-3 px-4 border-gray-300 placeholder-gray-400 text-gray-500 appearance-none w-full pl-10 focus:outline-none'
          />
        ))}
        <div className='flex justify-between'>
        <button type='button' onClick={addContact} className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[200px] rounded-md'>
          Add Contact
        </button>
        <button
  type='button'
  onClick={(event) => removeContact(Number((event.target as HTMLButtonElement).value))}
  className='bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 w-[200px] rounded-md'
>
  Remove Contact
</button>



        </div>
        </div>
       
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className='mb-4 border p-2  mt-4 rounded-md'
        >
          <option value='Admin'>Admin</option>
          <option value='User'>User</option>
          <option value='Superuser'>Superuser</option>
        </select>
        <button type='submit' className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
          Register
        </button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Signupscreen;
