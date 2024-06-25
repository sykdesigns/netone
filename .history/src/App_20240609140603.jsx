// src/App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';

const App = () => {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <AppHeader />
        <main className="p-4 flex-grow bg-gray-100">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default App;
