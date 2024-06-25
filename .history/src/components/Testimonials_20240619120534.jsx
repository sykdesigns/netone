// src/components/TestimonialSlider.jsx

import React from "react";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";
import Card from './TestimonialCards';
import { useState } from 'react';


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (

    <div className='flex flex-col p-12 md:p-24 transition-all duration-700 max-w-7xl'>

        <Card review = {reviews[index]}></Card>
     

      <div className='flex text-xl text-n1-white font-bold items-center justify-end mt-12'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-n1-orange mr-4'>
            <LuArrowLeftCircle/>
        </button>

        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-n1-orange'>
            <LuArrowRightCircle/>
        </button>
      </div>
    </div>
  )
}

export default Testimonials

