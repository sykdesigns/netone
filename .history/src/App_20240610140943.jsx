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
    console.log('Current Search Query:', searchQuery);
    console.log('Current Page:', currentPage);
  }, [searchQuery, currentPage]);

  // Calculate filtered job data based on the search query
  const filteredJobs = jobData.filter((job) =>
    job.Position?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job["Position"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.Industries?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Filtered Jobs:', filteredJobs);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  console.log('Current Items:', currentItems);

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  console.log('Total Pages:', totalPages);

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
            <div className="text-n1-blue text-xs m-3">
              Showing <span className='text-n1-orange'>{Math.min(resultsSoFar, filteredJobs.length)}</span> Jobs of <span className='text-n1-orange'>{filteredJobs.length}</span>
            </div>
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
          <div className="flex justify-between items-center mt-4">
            <div className="text-n1-blue text-sm">
              Showing <span className="text-n1-orange">{Math.min(resultsSoFar, filteredJobs.length)}</span> Results of <span className="text-n1-orange">{filteredJobs.length}</span>
            </div>
            <div className="flex items-center">
              <button
                className="bg-n1-orange text-n1-white px-2 py-1 rounded m-1"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  className={`px-2 py-1 m-1 rounded ${currentPage === page + 1 ? 'bg-n1-orange text-n1-white' : 'bg-n1-white text-n1-blue'}`}
                  onClick={() => handlePageClick(page + 1)}
                >
                  {page + 1}
                </button>
              ))}
              <button
                className="bg-n1-orange text-n1-white px-2 py-1 rounded m-1"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
