// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24; // 3x3 layout

  // Calculate filtered job data based on the search query
  const filteredJobs = jobData.filter((job) =>
      job.Position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job["Project Summary"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.Industries.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(jobData.length / itemsPerPage);

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
        <AppHeader />
        <main className="p-2 flex-grow bg-n1-white">

        <div className="flex justify-between items-center">

            <div className="text-n1-blue text-xs m-3">
              Showing <span className='text-n1-orange'>{Math.min(resultsSoFar, jobData.length)}</span>  Jobs of <span className='text-n1-orange'> {jobData.length}</span>
            </div>
            {/* <div className="flex items-center text-xs">
              <button
                className="bg-n1-orange text-n1-white px-2 py-1 rounded-full m-1 text-xs"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  className={`px-2 py-1 m-1 rounded-full text-xs ${currentPage === page + 1 ? 'bg-n1-orange text-n1-white' : 'bg-n1-white text-n1-blue'}`}
                  onClick={() => handlePageClick(page + 1)}
                >
                  {page + 1}
                </button>
              ))}
              <button
                className="bg-n1-orange text-n1-white px-2 py-1 rounded-full m-1 text-xs"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div> */}
          </div>

          <div className="flex flex-wrap gap-4 max-w-full">
            {currentItems.map((job, index) => (
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
