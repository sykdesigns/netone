import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HeroComponent from '../components/HeroComponent';
import HomeGigEconomy from '../components/HomeGigEconomy';
import HomeTrustedClients from '../components/HomeTrustedClients';
import HomeDemo from '../components/HomeDemo';
import Carousel from '../components/TestimonialSlider';


const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToJobs = () => {
    navigate('/jobs');
  };

  return (
    <div className="">
      <HomeHeader />
      <HeroComponent />
      <HomeGigEconomy />
      <HomeTrustedClients />
      <HomeDemo />
    
  
      {/* <button 
        className="bg-n1-orange text-n1-white px-6 py-3 rounded-full text-xl font-demiBold"
        onClick={handleNavigateToJobs}
      >
        Search Jobs
      </button> */}
    </div>
  );
};

export default HomePage;
