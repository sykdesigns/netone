import React, { useState } from 'react';
import { RiInputField } from 'react-icons/ri';
import { FaMagnifyingGlass } from "react-icons/fa6";






const AppHeader = () => {


    return (

        <div className='max-w-screen-2xl h-24 bg-n1-blue-light flex items-center font-custom'>
            
            <div className='text-2xl text-n1-blue ml-12'>
                <h1>Open Jobs</h1>
            </div>
  
            <div className='ml-3 bg-n1-orange text-n1-blue-light py-1 px-3 rounded-xl'>
                {'26'}
            </div>
    
  
            <form className='ml-6 flex-grow flex items-center relative'>   
                <div className='absolute inset-y-3 left-3 text-n1-gray-mid'> 
                <FaMagnifyingGlass /> 
                </div>
                <input 
                type='text' 
                placeholder='Search Jobs' 
                className='w-9/12 h-10 pl-10 mr-12 text-xs border border-gray-300'
                />
            </form>
        </div>

    );
}


export default AppHeader;