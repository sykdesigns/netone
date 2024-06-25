// src/components/AppHeader.jsx
import React from 'react';


const HomeHeader = () => {
  return (
    <div className='w-full h-16 bg-n1-blue-light flex items-center justify-center font-custom gap-2 p-2'>
      
      <div className='text-md font-demiBold md:text-2xl text-n1-blue flex'>
        <div className='md:hidden flex items-center'>
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;