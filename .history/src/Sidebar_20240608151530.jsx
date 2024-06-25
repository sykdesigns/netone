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



const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-gray-500 text-white ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 h-full flex flex-col`}>

        <button className="text-white w-full py-2 bg-blue-500" onClick={handleToggle}>
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
    
 

        <div className="flex p-4">
            
            <div className={`${collapsed ? 'hidden' : 'block'} mt-4 text-center`}></div>
        
            <div className='w-1/2 m-auto flex justify-center'>
              <img src="" alt="" className="w-16 h-16 rounded-full bg-gray-300" />
            </div>
          
            <div className='w-1/2 flex flex-col justify-center'>
              <h2 className="text-base text-center">{ 'User Name' }</h2>
              <p className='text-xs text-center'>AVAILABILITY STATUS</p>
              <button className="bg-orange-500 pt-2 rounded-3xl mt-2 text-xs">Logout</button>
            </div>
            
        </div>

      <nav className="mt-4 flex-grow">

              <div className='flex items-center p-4 border-b'>
              <FaMagnifyingGlass /> 
              <a href="#" className='ml-4'>Search Jobs</a>
              </div>

       
            
              <div className='flex items-center pt-4 pl-4 mb-4'>
              <FaChartColumn />  
              <a href="#" className='ml-4'>Dashboard</a>
              </div>
              
              <div className='flex items-center mb-4 pl-4'>
              <FaFilePdf />
              <a href="#" className='ml-4'>My Resume</a>
              </div>

              <div className='flex items-center mb-4 pl-4'>
              <IoMdSettings />
              <a href="#" className='ml-4'>Account Settings</a>
              </div>

              <div className='flex items-center mb-4 pl-4 pb-4 border-b'>
              <FiActivity />
              <a href="#" className='ml-4'>Activity</a>
              </div>

   

              <div className='flex items-center pt-4 pl-4 mb-4'>
              <IoIosTimer />  
              <a href="#" className='ml-4'>Time Cards</a>
              </div>
                
              <div className='flex items-center mb-4 pl-4'>
              <TbReportMoney />    
              <a href="#" className='ml-4'>Bonus Programs</a>
              </div>

              <div className='flex items-center mb-4 pl-4'>
              <IoDocumentSharp />  
              <a href="#" className='ml-4'>Documents</a>
              </div>

              <div className='flex items-center mb-4 pl-4 pb-4 border-b'>
              <FaHistory />
              <a href="#" className='ml-4'>My Job History</a>
              </div>
             

              <div>
              <a href="#">FAQs</a>
              </div>

              <div>
              <a href="#">Support</a>
              </div>

              <div>
              <a href="#">Contact</a>
              </div>
      </nav>

      </div>
  
      
      
    


     
    
  );
};

export default Sidebar;
