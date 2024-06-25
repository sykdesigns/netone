import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import { SiChianetwork } from "react-icons/si";

const JobCards = ({ logo, postDate, position, industry, projectSummary, billingRateW2, billingRateIC }) => {
  return (
    <div className='flex flex-col w-80 h-72 bg-n1-blue-light p-4 rounded-lg shadow-lg'>
      
        <div className='flex mb-2 text-2xl items-start'>

        <div className='bg-n1-blue w-12 h-12 rounded-full flex items-center justify-center text-n1-blue-light'>    
        <SiChianetwork />
        </div>
        <div className='flex flex-col ml-6'>
        <p className='text-xs text-n1-gray-dark'>3 days ago</p>
        <h2 className='text-lg text-n1-blue font-demiBold'>Technical Recruiter</h2>
        </div>
        <div className='ml-auto'>
        <CiBookmark className='text-xl text-n1-blue' />
        </div>
        </div>

       
        
        
      
     


      <div className='ml-1 mr-1 mt-1'>
        <p className='text-xs text-n1-blue-mid mb-1'>RPO/Recruiting</p>
        <p className='text-sm text-n1-blue mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna...</p>
      </div>

   
    
        <div className='flex ml-1'>
        <p className='text-sm text-n1-blue font-demiBold mr-4'>W2: $55.00</p>
        <p className='text-sm text-n1-blue font-demiBold'>IC: $58.00</p>
        </div>
  

      <div className='flex justify-center mt-4'>
        <button className='bg-n1-white border-2 border-n1-blue-mid text-n1-blue text-xs px-4 py-2 rounded-full mr-2'>View Details</button>
        <button className='bg-n1-blue text-n1-white text-xs rounded-full px-4 py-2'>Apply Now</button>
      </div>
    
    
    </div>
  );
}

export default JobCards;
