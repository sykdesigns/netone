// src/JobDetailsModal.jsx
import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-center z-50">
      <div className="bg-white w-screen h-screen overflow-auto font-custom">
        
        <div className='flex bg-n1-blue-light'>
            <div className='w-3/4 p-4'>
            <p className='text-n1-gray-mid text-xs'>Last Modified: {job.postDate}</p>
            <h1 className='text-xl text-n1-blue'>Job Position Here{job.position}</h1>
            </div>
            <div className='w-1/4 flex items-center p-4'>
            <button onClick={onClose} className="text-n1-blue text-xl font-demiBold flex ml-auto">X</button>
            </div>
        </div>

        <div className='flex text-n1-blue'>
            <div className="w-full text-xl p-4">
            <h2>Job Details:</h2>
            </div>
        </div>
        
        <div className='flex p-4'>
            
            <div className='w-1/2'>
                <p>Start Date:</p>
            </div>
            
            <div className='w-1/2'>
                <p>Duration:</p>
            </div>
        </div>

        <div className='flex p-4'>

            <div className='w-1/2'>
                <p>Onsite / Remote:</p>
            </div>
            
            <div className='w-1/2'>
                <p>Hours Per Week:</p>
            </div>
        </div>

        <div className='flex p-4'>
            <div className='w-full'>
                <p>Billing Rate:</p>
            </div>
        </div>

        <div className='flex flex-col p-4'>

            <div className='w-full mb-8'>
                <p>Background Check:</p>
            </div>
            
            <div className='w-full mb-8'>
                <p>Travel Requirements:</p>
            </div>
            
            <div className='w-full'>
                <p>Language:</p>
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
