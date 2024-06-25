// src/components/AppHeader.jsx
import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const AppHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <div className='w-full h-16 bg-n1-blue-light flex items-center justify-center font-custom gap-2 p-2'>
      <form className='flex-grow flex items-center relative' id='searchJobs'>
        <div className='absolute inset-y-3 left-3 text-n1-gray-mid'>
          <FaMagnifyingGlass />
        </div>
        <input
          type='text'
          placeholder='e.g. industries, position, location'
          className='w-full h-10 pl-8 text-xs border border-n1-gray-mid rounded-lg'
          value={searchQuery}
          onChange={onSearchChange}
        />
      </form>
      <div className='text-md font-demiBold md:text-2xl text-n1-blue flex'>
        <div className='md:hidden flex items-center'>
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
