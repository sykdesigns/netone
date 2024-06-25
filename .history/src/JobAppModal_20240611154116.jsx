// src/JobAppModal.jsx
import React from 'react';

const JobAppModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-gray-800 opacity-60"></div>
      
      <div className="relative w-screen h-screen md:w-[800px] bg-white overflow-auto text-n1-blue transform transition-transform duration-1000 ease-in-out md:translate-x-0">
        <div className="flex bg-n1-blue-light">
          <div className="w-3/4 p-4">
            <p className="text-n1-gray-dark text-xs pl-3">{job["Post Date"]}</p>
            <h1 className="text-xl font-custom font-demiBold text-n1-blue pl-3">{job.Position}</h1>
          </div>
          <div className="w-1/4 flex items-center p-4">
            <button
              onClick={onClose}
              className="bg-n1-orange rounded-full w-6 h-6 flex items-center justify-center text-sm text-n1-white font-custom font-demiBold ml-auto"
            >
              X
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full m-8">
          <h2 className="font-custom font-demiBold">Your Preferred Employment Status:</h2>
          <p>Please select your required preferred employment status.</p>

          <form>
            <div className='flex items-center m-4'>
            <input type='radio' className='w-5 h-5 mr-2'></input>
            <label>W2 with NetOne Recruiter</label>
            </div>

            <div className='flex items-center m-4'>
            <input type='radio' className='w-5 h-5 mr-2'></input>
            <label>Independent Contractor</label>
            </div>
          </form>
        </div>

       

        <div className="flex p-4 items-center justify-center mt-2 font-custom">
          <button className="border border-n1-blue bg-n1-white px-7 py-2 rounded-full" onClick={onClose}>Close</button>
          <button className="ml-2 bg-n1-orange px-7 py-2 rounded-full text-n1-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobAppModal;
