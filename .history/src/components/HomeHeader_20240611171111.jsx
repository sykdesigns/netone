// src/components/AppHeader.jsx
import React from 'react';


const HomeHeader = () => {
  return (
    <div className='w-full h-16 bg-n1-blue-light flex items-center justify-center font-custom gap-2 p-2'>


      
      <div className='text-md font-demiBold md:text-2xl text-n1-blue flex'>
        <div className='md:hidden flex items-center'>
          <RxHamburgerMenu />

          <header className="w-full h-16 bg-n1-blue-light flex items-center justify-center font-custom p-4">
      <h1 className="text-4xl text-n1-blue font-demiBold">Welcome to Our Job Portal</h1>
    </header>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;