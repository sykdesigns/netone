import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HeroComponent from '../components/HeroComponent';
import HomeGigEconomy from '../components/HomeGigEconomy';
import HomeTrustedClients from '../components/HomeTrustedClients';
import HomeDemo from '../components/HomeDemo';
import Carousel from '../components/TestimonialSlider';

const slides = [
  <div className='w-full bg-n1-blue font-custom text-n1-white '>
    <img src='../public/logo-xela.png'></img>
    <p>“As a staffing company, being scalable is mission critical to our success. NetOne Recruiter allows us to support the sudden ebbs and flows of our business which helps us maximize revenue and deliver results to our clients.”</p>
  </div>,
    <div className='w-full bg-n1-gray-dark font-custom text-n1-white '>
    <img src='../public/logo-xela.png'></img>
    <p>“As a staffing company, being scalable is mission critical to our success. NetOne Recruiter allows us to support the sudden ebbs and flows of our business which helps us maximize revenue and deliver results to our clients.”</p>
  </div>
]


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
