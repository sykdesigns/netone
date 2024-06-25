// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 9; // Adjust this to change the number of items per page

  useEffect(() => {
  }, [searchQuery, currentPage]);

  // Calculate filtered job data based on the search query
  const filteredJobs = jobData.filter((job) => {
    const positionMatch = job.Position.toLowerCase().includes(searchQuery.toLowerCase());
    const projectSummaryMatch = job["Project Summary"].toLowerCase().includes(searchQuery.toLowerCase());
    const industriesMatch = job.Industries.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = job.Location.toLowerCase().includes(searchQuery.toLowerCase());

    return positionMatch || projectSummaryMatch || industriesMatch || locationMatch;
  });

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Calculate the number of results shown so far
  const resultsSoFar = currentPage * itemsPerPage;

  // Pagination control handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
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
            <div className='text-n1-white bg-n1-orange rounded-full w-8 h-8 flex'>{filteredJobs.length}</div>
             
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
        </main>
      </div>
    </div>
  );
};

export default App;
