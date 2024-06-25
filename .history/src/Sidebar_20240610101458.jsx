// src/Sidebar.jsx
import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { IoDocumentSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbPhone } from "react-icons/tb";

const Sidebar = () => {

  return (

<div className="bg-n1-blue text-n1-white w-64 flex flex-col font-custom">
        
        <div className="flex p-4 w-64">
            <div className='w-1/2 m-auto flex justify-center'>
              <img src="" alt="" className="w-24 h-24 rounded-full bg-gray-300" />
            </div>
          
            <div className='w-1/2 flex flex-col justify-center'>
              <h2 className="text-lg text-center tracking-wide mb-1">{ 'User Name' }</h2>
              <p className='text-xs text-center font-medium mb-1'>AVAILABILITY STATUS</p>
              <button className="bg-n1-orange uppercase text-n1-white hover:text-n1-blue py-2 text-xs mt-2 rounded-full">Logout</button>
            </div>
        </div>

      <nav className="mt-4 flex-grow ml-4 mr-4 tracking-wide text-base font-medium">

              <div className='flex items-center pl-4 pb-4 pt-2 border-b mb-5'>
              <FaMagnifyingGlass /> 
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Search Jobs</a>
              </div>


              <div className='flex items-center pl-4 mb-5'>
              <FaChartColumn />  
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Dashboard</a>
              </div>
              
              <div className='flex items-center mb-5 pl-4'>
              <FaFilePdf />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>My Resume</a>
              </div>

              <div className='flex items-center mb-5 pl-4'>
              <IoMdSettings />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Account Settings</a>
              </div>

              <div className='flex items-center mb-5 pl-4 pb-4 border-b'>
              <FiActivity />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Activity</a>
              </div>

   

              <div className='flex items-center pl-4 mb-5'>
              <IoIosTimer />  
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Time Cards</a>
              </div>
                
              <div className='flex items-center mb-5 pl-4'>
              <TbReportMoney />    
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Bonus Programs</a>
              </div>

              <div className='flex items-center mb-5 pl-4'>
              <IoDocumentSharp />  
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Documents</a>
              </div>

              <div className='flex items-center mb-5 pl-4 pb-4 border-b'>
              <FaHistory />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>My Job History</a>
              </div>
             

              <div className='flex items-center pl-4 mb-5'>
              <FaQuestionCircle />  
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>FAQs</a>
              </div>

              <div className='flex items-center mb-5 pl-4'>
              <BiSupport />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Support</a>
              </div>

              <div className='flex items-center mb-5 pl-4 pb-4'>
              <TbPhone />
              <a href="#" className='ml-4 hover:text-n1-blue-mid'>Contact</a>
              </div>
             
  
    </nav>
  </div>

    


     
    
  );
};

export default Sidebar;