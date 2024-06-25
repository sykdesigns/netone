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
            <a href="#">Search Jobs</a>
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
