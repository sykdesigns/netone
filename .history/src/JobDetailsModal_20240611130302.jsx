// src/JobDetailsModal.jsx
import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-center z-50">
      <div className="bg-white w-screen h-screen overflow-auto text-n1-blue">
        
        <div className='flex bg-n1-blue-light'>
            <div className='w-3/4 p-4 font-custom'>
            <p className='text-n1-gray-dark text-xs'>{job["Post Date"]}</p>
            <h1 className='text-xl font-demiBold text-n1-blue'>{job.Position}</h1>
            </div>
            <div className='w-1/4 flex items-center p-4'>
            <button onClick={onClose} className="bg-n1-orange rounded-full w-8 h-8 flex items-center text-n1-white text-xl font-demiBold flex ml-auto">X</button>
            </div>
        </div>

        <div className='flex'>
            <div className="w-full text-lg p-4">
            <h2 className='font-demiBold'>Job Details:</h2>
            </div>
        </div>
        
        <div className='flex flex-col gap-4 pl-7 pt-4 pb-4 bg-n1-blue-light'>

                <div className='w-full'><span className='font-demiBold'>Start Date:</span> {job["Start Date"]}</div>
                <div className='w-full'><span className='font-demiBold'>Duration:</span> {job.Duration}</div>
                <div className='w-full'><span className='font-demiBold'>Billing Rate W2:</span> {job["Billing Rate W2"]}</div>
                <div className='w-full'><span className='font-demiBold'>Billing Rate IC:</span> {job["Billing Rate IC"]}</div>
                <div className='w-full'><span className='font-demiBold'>Onsite / Remote:</span> {job["Location"]}</div>
                <div className='w-full'><span className='font-demiBold'>Hours Per Week:</span> {job["Hours per week"]}</div>
  
        </div>


        <div className='flex flex-col gap-4 pl-7 pt-4 pb-4'>

                <div className='w-full'><span className='font-demiBold'>Background Check:</span> {job["Background Check"]}</div>
                <div className='w-full'><span className='font-demiBold'>Travel Requirements:</span> {job["Travel Requirement"]}</div>
                <div className='w-full'><span className='font-demiBold'>Language:</span> {job.Languages}</div>

        </div>


        <div className='flex flex-col gap-4 pl-7 pt-4 pb-4 bg-n1-blue-light'>

                <div className='w-full'><span className='font-demiBold'>Industries:</span> {job.Industries}</div>
                <div className='w-full'><span className='font-demiBold'>Roles / Skills:</span> {job["Roles\/Skills"]}</div>
                <div className='w-full'><span className='font-demiBold'>ATS / CRM:</span> {job["ATS\/CRM"]}</div>

        </div>


        <div className='flex flex-col gap-4 pl-7 pt-4 pb-4 pr-3'>

                <div className='w-full leading-relaxed'><span className='font-demiBold'>Project Summary:</span> {job["Project Summary"]}</div>

        </div>

        <div className='flex p-4 items-center justify-center mt-4'>
            <button className='border border-n1-blue bg-n1-white px-7 py-2 rounded-full' onClick={onClose}>Close</button>
            <button className='ml-2 bg-n1-orange px-7 py-2 rounded-full text-n1-white'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
