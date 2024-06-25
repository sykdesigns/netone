// src/components/HEroVid.jsx
import React from 'react';

const HeroVid = () => {
  return (
    <div className="flex justify-center items-center w-64 h-64 overflow-hidden rounded-full mx-auto">
      <video className="w-full h-full object-cover" controls>
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVid;
