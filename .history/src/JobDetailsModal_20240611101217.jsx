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
            <h1 className='text-xl font-demiBold text-n1-blue'>Job Position Here{job.position}</h1>
            </div>
            <div className='w-1/4 flex items-center p-4'>
            <button onClick={onClose} className="text-n1-blue text-xl font-demiBold flex ml-auto">X</button>
            </div>
        </div>

        <div className='flex'>
            <div className="w-full text-lg p-4">
            <h2 className='font-demiBold'>Job Details</h2>
            </div>
        </div>
        
        <div className='p-5 bg-n1-blue-light'>

           <div className='w-1/3 flex flex-col text-right gap-4'>
                <p>Start Date:</p>
  
                <p>Duration:</p>
     
                <p>Billing Rate:</p>
     
                <p>Onsite / Remote:</p>
     
                <p>Hours Per Week:</p>
            </div>

            <div className='w-2/3 flex flex-col text-left gap-4'>
                <p>{startDate}</p>
            
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

        <div className='flex p-4 bg-n1-blue-light h-48 items-center'>
            <div className='w-full font-demiBold'>
                <p className='mb-8'>Industries:</p>
                <p className='mb-8'>Roles / Skills:</p>
                <p>ATS / CRM:</p>
            </div>
        </div>

        <div className='flex p-4'>
            <h2 className='font-demiBold'>
                Project Summary
            </h2>
            <p className='text-sm'></p>
        </div>

        <div className='flex p-4 items-center justify-center mt-4'>
            <button className='border border-n1-blue bg-n1-white text-base px-7 py-2 rounded-full'>Close</button>
            <button className='ml-2 bg-n1-blue text-base px-7 py-2 rounded-full text-n1-white'>Apply Now</button>
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
