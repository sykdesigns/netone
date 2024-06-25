// src/components/HomeHeader.jsx
import React from 'react';



const HomeHeader = () => {
  return (
    <div className='w-full flex font-custom p-6 md:p-6 bg-n1-white border-solid border-b border-n1-blue-light'>

        <div className='w-32'>
            <img src='../public/logo-netOne.png'></img>
        </div>

        <nav className='font-custom text-n1-blue flex ml-auto items-center text-sm gap-6'>
            <div>Find Contractors</div>
            <div>Find Work</div>
            <div>Log In</div>
            <button className='text-n1-white text-sm bg-n1-blue rounded-full px-6 py-2'>Sign Up</button>

        </nav>
      
    

         
    </div>
  
  );
}

export default HomeHeader;