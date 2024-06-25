import React, { useState } from 'react';
import { RiInputField } from 'react-icons/ri';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import jobData from '../jobData.json';





const AppHeader = () => {


    return (

        <div className='w-full h-16 bg-n1-blue-light flex items-center justify-center font-custom gap-2 p-2'>

            <form className='flex-grow flex items-center relative'>   
                <div className='absolute inset-y-3 left-3 text-n1-gray-mid'> 
                <FaMagnifyingGlass /> 
                </div>
                <input 
                type='text' 
                placeholder='Search Jobs' 
                className='w-full h-10 pl-8 text-xs border border-n1-gray-mid rounded-lg'
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