// src/JobDetailsModal.jsx
import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-center z-50">
      <div className="bg-white w-screen h-screen overflow-auto font-custom">
        
        <div className='flex m-4'>
            <div className='w-3/4 bg-pink-100'>
            <p className='text-n1-gray-mid text-xs'>Last Modified: {job.postDate}</p>
            <h1 className='text-xl text-n1-blue'>Job Position Here{job.position}</h1>
            </div>
            <div className='w-1/4 bg-pink-200 flex items-center'>
            <button onClick={onClose} className="text-n1-blue text-xl font-demiBold flex ml-auto">X</button>
            </div>
        </div>
           
    
     

    

                <div>
                <h2 className="text-xl mb-4">Job Details</h2>
                {/* Display job details here */}
                <p>{job.position}</p>
                <p>{job.industry}</p>
                <p>{job.location}</p>
                <p>{job.projectSummary}</p>
                <p>{job.billingRateW2}</p>
                <p>{job.billingRateIC}</p>
                </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
