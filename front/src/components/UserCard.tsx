import React from 'react';


type UserCardProps = {
  Profilepic: string;
  Firstname: string;
  Middlename: string;
  Lastname: string;
  user_age: number;
  PlaceofResidence:string;
  
  email:string;
  contact:string
  
}

const UserCard: React.FC<UserCardProps> = ({ Profilepic, Firstname, Middlename, Lastname, user_age,
    PlaceofResidence,contact,email }) => {
  return (
    <div className=' bg-gray-100 rounded-md shadow-md flex-col space-y-4 mx-4'>
        <div className=' mx-4 mt-2 w-[100px] h-[100px] object-contain justify-center  items-center'>
        <img className='rounded-full w-full h-full  mt-4' src={Profilepic} alt="Profile" />

        </div>
     <div className='mx-4'>
        <h4> {Firstname}</h4>
        <h4> {Middlename}</h4>
        <h4> {Lastname}</h4>
        <h4> {PlaceofResidence}</h4>
        <h4>{email}</h4>
        
        <h4> {contact}</h4>
        <h4>{user_age}</h4>



     

   

     </div>
     
    </div>
  )
}

export default UserCard;
