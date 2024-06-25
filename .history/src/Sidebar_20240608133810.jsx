// src/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-gray-100 text-white ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 h-full flex flex-col`}>

        <button className="text-white w-full py-2" onClick={handleToggle}>
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
    
    </div>

      <div className="flex p-4">
          
          {/* <div className={`${collapsed ? 'hidden' : 'block'} mt-4 text-center`}></div> */}
       
          <div className='w-1/2 m-auto flex justify-center'>
            <img src="" alt="" className="w-16 h-16 rounded-full bg-gray-300" />
          </div>
        
          <div className='w-1/2 flex flex-col justify-center'>
            <h2 className="text-base text-center">{ 'User Name' }</h2>
            <p className='text-xs text-center'>AVAILABILITY STATUS</p>
            <button className="bg-orange-500 px-4 py-2 rounded-3xl mt-2 text-xs">Logout</button>
          </div>
          
      </div>
  
      
      
      // <nav className="mt-4 flex-grow">
      //   <input type="text" placeholder="Search Jobs" className="w-full py-2 px-4" />
      //   <ul className="space-y-2">
      //     <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">My Resume</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Account Settings</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Activity</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Time Cards</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Bonus Programs</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Documents</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">My Job History</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">FAQs</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Support</li>
      //     <li className="py-2 px-4 hover:bg-gray-700">Contact</li>
      //   </ul>
      // </nav>
    
  );
};

export default Sidebar;
