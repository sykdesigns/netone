// src/Sidebar.jsx
import React, { useState } from 'react';

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
              <button className="bg-orange-500 px-4 py-2 rounded-3xl mt-2 text-xs">Logout</button>
            </div>
            
        </div>

        <nav className="mt-4 flex-grow">

          <div>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"/></svg>
            Search Jobs</a>
          </div>

          <div>
            <a href="#">Dashboard</a>
            <a href="#">My Resume</a>
            <a href="#">Account Settings</a>
            <a href="#">Activity</a>
          </div>

          <div>
            <a href="#">Time Cards</a>
            <a href="#">Bonus Programs</a>
            <a href="#">Documents</a>
            <a href="#">My Job History</a>
          </div>

            <div>
            <a href="#">FAQs</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </nav>

      </div>
  
      
      
    


     
    
  );
};

export default Sidebar;
