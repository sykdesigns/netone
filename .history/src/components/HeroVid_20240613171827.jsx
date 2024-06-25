// src/components/HeroVid.jsx
import React from 'react';

const HeroVid = () => {
  return (
    <div className="flex justify-center items-center sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden mx-auto border-solid border-n1-blue-light border-8">
    <video className="w-full h-full object-cover" autoPlay muted loop>
      <source src="../public/hero-vid-02.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  );
};

export default HeroVid;
