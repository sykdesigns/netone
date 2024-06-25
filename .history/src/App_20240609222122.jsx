// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3x3 layout

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(jobData.length / itemsPerPage);

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

  return (
    <div className="App flex h-screen max-w-screen-2xl">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <AppHeader />
        <main className="p-4 flex-grow bg-n1-white">
          <div className="flex flex-wrap justify-center gap-0">
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
          <div className="flex justify-between items-center m-20">
            <div className="text-n1-blue text-xs">
              Showing <span className='text-n1-orange'>{currentItems.length}</span>  Results of <span className='text-n1-orange'> {jobData.length}</span>
            </div>
            <div className="flex items-center text-xs">
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
