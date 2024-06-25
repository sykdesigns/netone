// src/components/AppHeader.jsx
import React from 'react';
import logo from '../assets/logo-netOne.png';


const HomeHeader = () => {
  return (
    <div className='w-full flex items-center font-custom'>

        <div className='w-1/2'>
            <img src={ logo }></img>
        </div>
      
    

         
    </div>
  
  );
}

export default HomeHeader;