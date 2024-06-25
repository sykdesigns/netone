import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HeroComponent from '../components/HeroComponent';
import HomeGigEconomy from '../components/HomeGigEconomy';
import HomeTrustedClients from '../components/HomeTrustedClients';
import HomeTrustedClientsStatic from '../components/HomeTrustedClientsStatic';
import HomeDemo from '../components/HomeDemo';
import reviews from '../testimonial-data.js';
import Testimonials from '../components/Testimonials.jsx';
import Footer from '../components/Footer.jsx';



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

      <div className="block sm:hidden">
        <HomeTrustedClientsStatic />
      </div>

      <div className='hidden sm:block'>
      <HomeTrustedClients />
      </div>

      <HomeDemo />


      <div className="flex flex-col items-center bg-n1-blue">
     
      <div className="">
        
        <Testimonials reviews={reviews}/>

      </div>
    </div>

    <Footer />
    
    </div>
  );
};

export default HomePage;
