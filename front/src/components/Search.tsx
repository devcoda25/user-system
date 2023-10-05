import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
  return (
    <div className='flex space-x-1'>
 <div className=" ml- pt-2 relative mx-auto text-gray-600 ">
        <input className=" border-1 border-gray-300 bg-white h-10 w-[500px] px-5 rounded-l-lg text-sm focus:outline-none shadow-md"
          type="search" name="search" placeholder="Search"/>
          <span className=''>
             <button type="submit" className="absolute  bg-gray-400 top-0 my-2  px-2 py-2 h-10 rounded-r-lg w-20">
          <MagnifyingGlassIcon className='w-5  mx-4'/>
         
        </button></span>

       
        
      </div>
     
    </div>
  )
}

export default Search