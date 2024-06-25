// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToJobs = () => {
    navigate('/jobs');
  };

  return (

    <div>
        <HomeHeader />
    </div>
    <div className="flex flex-col items-center justify-center h-screen bg-n1-blue-light">
      <h1 className="text-4xl font-custom text-n1-blue mb-4">Welcome to Our Job Portal</h1>
      <button 
        className="bg-n1-orange text-n1-white px-6 py-3 rounded-full text-xl font-demiBold"
        onClick={handleNavigateToJobs}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default HomePage;
