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

            <div className="flex flex-col w-full m-12">

                
                <h2 className="font-custom font-demiBold">Your Preferred Employment Status:</h2>
                <p>Please select your required preferred employment status.</p>
              

                <form>
                    <div className='flex items-center m-4'>
                    <input type='radio' id='w2' name='employment_status' value='W2' className='w-5 h-5 mr-2'></input>
                    <label>W2 with NetOne Recruiter</label>
                    </div>

                    <div className='flex items-center m-4'>
                    <input type='radio' id='ic' name='employment_status' value='IC' className='w-5 h-5 mr-2'></input>
                    <label>Independent Contractor</label>
                    </div>
                </form>
            </div>

            <div className='flex flex-col m-12'>

                <h2 className="font-custom font-demiBold">Upload a cover letter <span className='text-n1-orange text-xs font-light'>*Optional</span></h2>
                <p className='mb-12'>Upload files</p>

                <form>
                
                    <div class="flex justify-center">
                        <label for="dropzone-file" class="flex justify-center w-9/12 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">PDF or DOC (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 

            </form>
          </div>
        
        

            <div className="flex p-4 items-center justify-center mt-2 font-custom">
            <button className="border border-n1-blue bg-n1-white px-7 py-2 rounded-full" onClick={onClose}>Cancel</button>
            <button className="ml-2 bg-n1-orange px-7 py-2 rounded-full text-n1-white">Submit Application</button>
            </div>
      
      
      </div>
    </div>
  );
};

export default JobAppModal;
