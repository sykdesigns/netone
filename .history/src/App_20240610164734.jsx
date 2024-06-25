import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from '../jobData.json';
import { FaFilter } from "react-icons/fa";
import FilterModal from './FilterModal'; // Import the filter modal component

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    positions: [],
    industries: [],
    durations: [],
    hoursPerWeek: [],
    backgroundCheck: false,
    travelRequirements: false,
    locationRange: [0, 50],
    billingRateRange: [0, 125]
  });

  useEffect(() => {
    console.log('Current Search Query:', searchQuery);
  }, [searchQuery]);

  // Calculate filtered job data based on the search query and filters
  const filteredJobs = jobData.filter((job) => {
    const positionMatch = filters.positions.length ? filters.positions.includes(job.Position) : true;
    const industryMatch = filters.industries.length ? filters.industries.includes(job.Industries) : true;
    const durationMatch = filters.durations.length ? filters.durations.includes(job.Duration) : true;
    const hoursPerWeekMatch = filters.hoursPerWeek.length ? filters.hoursPerWeek.includes(job.HoursPerWeek) : true;
    const backgroundCheckMatch = filters.backgroundCheck ? job.BackgroundCheck : true;
    const travelRequirementsMatch = filters.travelRequirements ? job.TravelRequirements : true;
    const locationMatch = filters.locationRange.length ? job.Location <= filters.locationRange[1] : true;
    const billingRateMatch = filters.billingRateRange.length ? job["Billing Rate W2"] >= filters.billingRateRange[0] && job["Billing Rate W2"] <= filters.billingRateRange[1] : true;

    return positionMatch && industryMatch && durationMatch && hoursPerWeekMatch && backgroundCheckMatch && travelRequirementsMatch && locationMatch && billingRateMatch;
  });

  const currentItems = filteredJobs.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setItemsToShow(12); // Reset to initial number of items on new search
  };

  const handleToggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setIsFilterModalOpen(false);
    setItemsToShow(12); // Reset to initial number of items on new filter
  };

  const handleResetFilters = () => {
    setFilters({
      positions: [],
      industries: [],
      durations: [],
      hoursPerWeek: [],
      backgroundCheck: false,
      travelRequirements: false,
      locationRange: [0, 50],
      billingRateRange: [0, 125]
    });
    setIsFilterModalOpen(false);
    setItemsToShow(12); // Reset to initial number of items on reset filter
  };

  return (
    <div className="flex h-full w-full">
      <div className='hidden md:flex'>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <AppHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <main className="p-2 flex-grow bg-n1-white">
          <div className="m-2 font-custom">
            <div className='flex items-center m-3'>
              <div className='text-n1-white bg-n1-orange rounded-full w-8 h-8 flex items-center justify-center text-sm mr-2'>{filteredJobs.length}</div>
              <h1 className='text-lg text-n1-blue font-demiBold'>Jobs Available</h1>
              <FaFilter className='text-lg ml-auto text-n1-orange' onClick={handleToggleFilterModal} />
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
                className="text-n1-orange text-xs px-4 py-2 font-demiBold" 
                onClick={handleLoadMore}
              >
                Load More...
              </button>
            </div>
          )}
        </main>
      </div>
      {isFilterModalOpen && (
        <FilterModal
          filters={filters}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
          onClose={handleToggleFilterModal}
        />
      )}
    </div>
  );
};

export default App;
