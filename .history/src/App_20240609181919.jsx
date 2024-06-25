// src/App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';

const App = () => {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <AppHeader />
        <main className="p-4 flex-grow bg-n1-white">

        <JobCards />
       
        </main>
      </div>
    </div>
  );
};

export default App;
a