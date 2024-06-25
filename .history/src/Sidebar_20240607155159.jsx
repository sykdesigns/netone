// src/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-gray-800 text-white ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 h-full flex flex-col`}>

      <button className="bg-gray-600 text-white w-full py-2" onClick={handleToggle}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>

      <div className="p-4">

        <img src="" alt="Profile" className="w-12 h-12 rounded-full mx-auto bg-gray-200" />
        <div className={`${collapsed ? 'hidden' : 'block'} mt-4 text-center`}>
          <h2 className="text-lg">User Name</h2>
          <p>AVAILABILITY STATUS</p>
          <button className="bg-red-500 px-4 py-2 rounded mt-2">Logout</button>
        </div>
      </div>
      <nav className="mt-4 flex-grow">
        
      </nav>
    </div>
  );
};

export default Sidebar;
