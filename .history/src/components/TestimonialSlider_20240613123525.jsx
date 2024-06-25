// src/components/TestimonialSlide.jsx
import React from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <div className="content">
            <img src="/logo-xela.png" alt="Xela Logo" className="logo" />
            <p>“As a staffing company, being scalable is mission critical to our success. NetOne Recruiter allows us to support the sudden ebbs and flows of our business which helps us maximize revenue and deliver results to our clients.”</p>
          </div>
        </div>
        {/* Add more slides here */}
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        {/* Add more dots corresponding to the number of slides */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
