// src/components/TestimonialSlider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

// Install modules
SwiperCore.use([Autoplay, Pagination]);

const TestimonialSlider = () => {
  return (
    <div className="bg-blue-800 p-8 text-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="/logo-xela.png" alt="Xela Logo" className="w-32 h-auto mb-4" />
            <p className="text-lg">“As a staffing company, being scalable is mission critical to our success. NetOne Recruiter allows us to support the sudden ebbs and flows of our business which helps us maximize revenue and deliver results to our clients.”</p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components here for additional testimonials */}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
