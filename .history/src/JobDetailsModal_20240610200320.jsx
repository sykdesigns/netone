// src/JobDetailsModal.jsx
import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-center z-50">
      <div className="bg-white w-screen h-screen overflow-auto font-custom text-n1-blue">
        
        <div className='flex bg-n1-blue-light'>
            <div className='w-3/4 p-4'>
            <p className='text-n1-gray-mid text-xs'>Last Modified: {job.postDate}</p>
            <h1 className='text-xl text-n1-blue'>Job Position Here{job.position}</h1>
            </div>
            <div className='w-1/4 flex items-center p-4'>
            <button onClick={onClose} className="text-n1-blue text-xl font-demiBold flex ml-auto">X</button>
            </div>
        </div>

        <div className='flex'>
            <div className="w-full text-xl p-4">
            <h2 className='font-demiBold'>Job Details</h2>
            </div>
        </div>
        
        <div className='flex p-4'>
            
            <div className='w-1/2'>
                <p className='font-demiBold'>Start Date: </p>
            </div>
            
            <div className='w-1/2'>
                <p className='font-demiBold'>Duration:</p>
            </div>
        </div>

        <div className='flex p-4'>

            <div className='w-1/2'>
                <p className='font-demiBold'>Onsite / Remote:</p>
            </div>
            
            <div className='w-1/2'>
                <p className='font-demiBold'>Hours Per Week:</p>
            </div>
        </div>

        <div className='flex p-4'>
            <div className='w-full'>
                <p className='font-demiBold'>Billing Rate:</p>
            </div>
        </div>

        <div className='flex flex-col p-4'>

            <div className='w-full mb-8'>
                <p className='font-demiBold'>Background Check:</p>
            </div>
            
            <div className='w-full mb-8'>
                <p className='font-demiBold'>Travel Requirements:</p>
            </div>
            
            <div className='w-full'>
                <p className='font-demiBold mb-8'>Language:</p>
            </div>
        </div>

        <div className='flex p-4 bg-n1-blue-light'>
            <div className='w-full font-demiBold'>
                <p className='mb-8'>Industries:</p>
                <p className='mb-8'>Roles / Skills:</p>
                <p>ATS / CRM:</p>
            </div>
        </div>

    
     

    

                
                {/* Display job details here */}
                <p>{job.position}</p>
                <p>{job.industry}</p>
                <p>{job.location}</p>
                <p>{job.projectSummary}</p>
                <p>{job.billingRateW2}</p>
                <p>{job.billingRateIC}</p>
               
      </div>
    </div>
  );
};

export default JobDetailsModal;
