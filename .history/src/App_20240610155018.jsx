// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Current Search Query:', searchQuery);
  }, [searchQuery]);

  // Calculate filtered job data based on the search query
  const filteredJobs = jobData.filter((job) => {
    const positionMatch = job.Position.toLowerCase().includes(searchQuery.toLowerCase());
    const projectSummaryMatch = job["Project Summary"].toLowerCase().includes(searchQuery.toLowerCase());
    const industriesMatch = job.Industries.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = job.Location.toLowerCase().includes(searchQuery.toLowerCase());

    return positionMatch || projectSummaryMatch || industriesMatch || locationMatch;
  });

  console.log('Filtered Jobs:', filteredJobs);

  // Get the current items to show
  const currentItems = filteredJobs.slice(0, itemsToShow);

  // Handle loading more items
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setItemsToShow(12); // Reset to initial number of items on new search
  };

  return (
    <div className="flex h-full w-full">
      <div className='hidden md:flex'>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <AppHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <main className="p-2 flex-grow bg-n1-white">
          <div className="flex justify-between items-center">
            <div className="text-n1-blue text-xs m-3 font-demiBold">
              <div className='flex items-center gap-2'>
                <div className='text-n1-white bg-n1-orange rounded-full w-8 h-8 flex items-center justify-center text-sm'>{filteredJobs.length}</div>
                <h1 className='text-lg'>Jobs Available</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 max-w-full">
            {currentItems.map((job, index) => (
              <JobCards
                key={index}
                postDate={job["Post Date"]}
                position={job.Position}
                industry={job.Industries}
                location={job.Location}
                projectSummary={job["Project Summary"]}
                billingRateW2={job["Billing Rate W2"]}
                billingRateIC={job["Billing Rate IC"]}
              />
            ))}
          </div>
          {itemsToShow < filteredJobs.length && (
            <div className="flex justify-center mt-4">
              <button 
                className="text-n1-orange text-xs px-4 py-2 rounded-full" 
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
