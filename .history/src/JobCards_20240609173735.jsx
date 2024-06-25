import React from 'react';
import { CiBookmark } from "react-icons/ci";

const JobCards = ({ logo, postDate, position, industry, projectSummary, billingRateW2, billingRateIC }) => {
  return (
    <div className='flex flex-col w-80 h-72 bg-n1-white p-4 rounded-lg shadow-lg'>
      <div className='flex justify-center mb-2'>
        <img src={logo} alt="Company Logo" className='w-16 h-16' />
      </div>
      <div className='flex justify-between items-center mb-2'>
        <p className='text-xs text-gray-500'>{postDate}</p>
        <CiBookmark className='text-xl text-gray-500' />
      </div>
      <div className='mb-2'>
        <h2 className='text-lg font-bold'>{position}</h2>
      </div>
      <div className='mb-2'>
        <p className='text-sm text-gray-300'>{industry}</p>
        <p className='text-sm'>{projectSummary}</p>
      </div>
      <div className='flex flex-row mb-2'>
        <p className='text-sm text-gray-400'>W2: {billingRateW2}</p>
        <p className='text-sm text-gray-400'>IC: {billingRateIC}</p>
      </div>
      <div className='flex'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>View Details</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Apply Now</button>
      </div>
    </div>
  );
}

export default JobCards;
