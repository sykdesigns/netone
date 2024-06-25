// src/JobDetailsModal.jsx
import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center z-50">
      <div className="bg-white w-screen h-screen overflow-auto font-custom">
        
        <div className='flex flex-col justify-center'>
            <p className='text-n1-gray-mid text-xs'>Last Modified: {job.postDate}</p>
            <h1 className='text-xl text-n1-blue'>Job Position Here{job.position}</h1>
            <button onClick={onClose} className="text-n1-blue text-xl font-demiBold justify-start">X</button>
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
