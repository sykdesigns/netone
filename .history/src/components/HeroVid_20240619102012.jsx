// src/components/HeroVid.jsx
import React from 'react';

const HeroVid = () => {
  return (
    <div className="flex justify-center items-center w-56 h-60 lg:w-56 lg:h-96 rounded-full overflow-hidden mx-auto border-solid border-n1-blue-light border-8">
    <video className="w-full h-full object-cover" autoPlay muted loop>
      <source src="../public/hero-vid-02.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  );
};

export default HeroVid;
