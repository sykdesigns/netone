// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';
import jobData from './jobData.json';

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
    job.Position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job["Project Summary"].toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.Industries.toLowerCase().includes(searchQuery.toLowerCase())
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
      setCurrentPage(currentPage - 
