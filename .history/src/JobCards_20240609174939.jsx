import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { MdWork } from "react-icons/md";

const JobCards = ({ logo, postDate, position, industry, projectSummary, billingRateW2, billingRateIC }) => {
  return (
    <div className='flex flex-col w-80 h-72 bg-n1-white p-4 rounded-lg shadow-lg'>
      
        <div className='flex mb-2 text-2xl items-start'>
        <MdWork />
        <div className='flex flex-col ml-6'>
        <p className='text-xs text-n1-gray-mid'>3 days ago</p>
        <h2 className='text-lg text-n1-black text-demiBold'>Technical Recruiter</h2>
        </div>
        <div className='ml-auto'>
        <CiBookmark className='text-xl text-gray-500' />
        </div>
        </div>

       
        
        
      
     


      <div className='mb-2'>
        <p className='text-sm text-gray-300'>{industry}</p>
        <p className='text-sm'>{projectSummary}</p>
      </div>

      <div className='flex flex-row justify-center mb-2'>
        <p className='text-sm text-gray-400'>W2: {billingRateW2}</p>
        <p className='text-sm text-gray-400'>IC: {billingRateIC}</p>
      </div>

      <div className='flex justify-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4'>View Details</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Apply Now</button>
      </div>
    
    
    </div>
  );
}

export default JobCards;
