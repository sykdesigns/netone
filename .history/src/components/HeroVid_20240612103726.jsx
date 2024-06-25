// src/components/HeroVid.jsx
import React from 'react';

const HeroVid = () => {
  return (
    <div className="flex justify-center items-center w-80 h-80 overflow-hidden rounded-full mx-auto">
    <video className="w-full h-full object-cover" autoPlay muted loop>
      <source src="../public/hero-vid-02.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className='w-90 h-90 rounded-full bg-n1-blue'></div>
  );
};

export default HeroVid;
