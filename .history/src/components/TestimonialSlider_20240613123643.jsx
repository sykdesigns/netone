// src/components/TestimonialSlider.jsx
import React, { useEffect } from 'react';
import './TestimonialSlider.css';
import './TestimonialSlider.js'; // Ensure this path is correct

const TestimonialSlider = () => {
  useEffect(() => {
    // Ensure the slider function runs when the component mounts
    const script = document.createElement('script');
    script.src = './TestimonialSlider.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
