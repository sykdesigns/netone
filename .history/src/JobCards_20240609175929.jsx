import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import { SiChianetwork } from "react-icons/si";

const JobCards = ({ logo, postDate, position, industry, projectSummary, billingRateW2, billingRateIC }) => {
  return (
    <div className='flex flex-col w-80 h-72 bg-n1-white p-4 rounded-lg shadow-lg'>
      
        <div className='flex mb-2 text-2xl items-start'>

        <div className='bg-n1-blue-light w-12 h-12 rounded-full border-2 border-n1-blue-mid flex items-center justify-center text-n1-blue'>    
        <SiChianetwork />
        </div>
        <div className='flex flex-col ml-6'>
        <p className='text-xs text-n1-gray-dark'>3 days ago</p>
        <h2 className='text-lg text-n1-black font-demiBold'>Technical Recruiter</h2>
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
        <p className='text-sm text-n1-blue font-demiBold'>W2: {billingRateW2}</p>
        <p className='text-sm text-n1-blue font-demiBold'>IC: {billingRateIC}</p>
      </div>

      <div className='flex justify-center'>
        <button className='bg-n1-white border-2 border-n1-blue-mid text-n1-blue text-xs px-4 py-2 rounded-full mr-2'>View Details</button>
        <button className='bg-n1-blue text-n1-white text-xs rounded-full px-4 py-2'>Apply Now</button>
      </div>
    
    
    </div>
  );
}

export default JobCards;
