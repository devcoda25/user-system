import React from 'react'
import loginPhoto from '../pic.png'


function PhotoCard() {
  return (
    <div className='bg-gray-100 w-[450px] ml-2 h-[600px] flex-col rounded-l-lg '>
        <div className='w-[400px] h-[300px] object-cover' >
             <img className='w-full h-full ' src={loginPhoto} alt='login'/> </div>
        <div className='flex-col  mx-16 mt-[100px] '>
            <div>
                <h1 className=' font-semibold'>Welcome Back!</h1>
            </div>
            <div>
            <h6>We  missed  You , login  to  acess Your  account</h6>
            </div>
        </div>

    </div>
  )
}

export default PhotoCard