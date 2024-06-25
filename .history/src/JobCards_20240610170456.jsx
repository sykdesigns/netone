// src/JobCards.jsx
import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { SiChianetwork } from "react-icons/si";

const JobCards = ({ postDate, position, industry, projectSummary, billingRateW2, billingRateIC, location }) => {

  // Function to calculate the number of days since the post date
  const calculateDaysSincePost = (dateString) => {
    const postDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate - postDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const daysSincePost = calculateDaysSincePost(postDate);

  return (
    <div className='flex flex-col lg:w-80 lg:h-70 bg-n1-blue-light p-4 rounded-lg shadow-md'>
      <div className='flex mb-2 text-2xl items-start'>
        <div className='bg-n1-white w-12 h-12 rounded-full flex items-center justify-center text-n1-blue'>    
          <SiChianetwork />
        </div>
        <div className='flex flex-col ml-6'>
          <p className='text-xs text-n1-gray-dark'>{daysSincePost} days ago</p>
          <h2 className='text-base text-n1-blue font-demiBold'>{position}</h2>
          <p className='text-xs text-n1-blue-mid capitalize font-demiBold'>Location: {location}</p>
        </div>
        <div className='ml-auto'>
          <CiBookmark className='text-xl text-n1-blue' />
        </div>
      </div>
      <div className='ml-1 mr-1 mt-1'>
        <p className='text-xs text-n1-blue-mid mb-1'>{industry}</p>
        <p className='text-sm text-n1-blue mb-1 line-clamp-4'>{projectSummary}</p>
      </div>
      <div className='flex ml-1'>
        <p className='text-sm text-n1-blue font-demiBold mr-4'>W2: {billingRateW2}</p>
        <p className='text-sm text-n1-blue font-demiBold'>IC: {billingRateIC}</p>
      </div>
      <div className='flex mt-4 ml-auto'>
        <button className='bg-n1-white border-2 border-n1-blue-mid text-n1-blue text-xs px-4 py-2 rounded-full mr-2' onClick={handleToggleJobDetailsModal}>View Details</button>
        <button className='bg-n1-blue text-n1-white text-xs rounded-full px-4 py-2'>Apply Now</button>
      </div>
    </div>
  );
}

export default JobCards;
