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
          <div className="flex flex-wrap justify-center gap-4">
            {jobData.map((job, index) => (
              <JobCards
                key={index}
                postDate={job["Post Date"]}
                position={job.Position}
                industry={job.Industries}
                projectSummary={job["Project Summary"]}
                billingRateW2={job["Billing Rate W2"]}
                billingRateIC={job["Billing Rate IC"]}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
