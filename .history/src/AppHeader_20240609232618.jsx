import React, { useState } from 'react';
import { RiInputField } from 'react-icons/ri';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";
import jobData from '../jobData.json';





const AppHeader = () => {


    return (

        <div className='w-screen h-24 bg-n1-blue-light flex items-center font-custom p-12'>
            
            <div className='text-2xl text-n1-blue'>
                <h1>Open Jobs</h1>
            </div>
  
            <div className='ml-3 bg-n1-orange text-n1-white py-1 px-3 rounded-full w-8 h-8 text-sm flex items-center justify-center'>
            {jobData.length}
            </div>
    
  
            <form className='ml-6 flex-grow flex items-center relative'>   
                <div className='absolute inset-y-3 left-3 text-n1-gray-mid'> 
                <FaMagnifyingGlass /> 
                </div>
                <input 
                type='text' 
                placeholder='Search Jobs' 
                className='w-8/12 h-10 pl-10 mr-12 text-xs border border-gray-300 rounded-lg'
                />
            </form>
        
        
            <div className='flex flex-row items-center'>
                <div className='text-xl text-n1-orange'><MdViewList /></div>
                <div className='ml-1 text-xl text-n1-orange'><MdViewModule /> </div>
            </div>
        
        
        
        </div>

    
     
    

    );
}


export default AppHeader;