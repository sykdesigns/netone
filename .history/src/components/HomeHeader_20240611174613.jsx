// src/components/AppHeader.jsx
import React from 'react';



const HomeHeader = () => {
  return (
    <div className='w-full flex items-center font-custom p-4 shadow-md'>

        <div className='w-32'>
            <img src='../public/logo-netOne.png'></img>
        </div>

        <nav className='font-custom text-n1-blu flex'>
            <div>Find Contractors</div>
            <div>Find Work</div>
            <div>Log In</div>

        </nav>
      
    

         
    </div>
  
  );
}

export default HomeHeader;