import React from 'react'
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";


const Card = (props) => {
    let review = props.review;
  
    return (

    <div className='flex flex-col'>
      <div className=''>
        <p className='tracking-wider text-sm uppercase text-n1-white'>{review.name}</p>
        <img src={review.image} alt={review.name} className='w-24 mt-16 mb-16'/>
      </div>
    

      <div className='text-n1-white leading-relaxed font-light tracking-wide text-lg w-full md:text-xl md:w-2/3'>
        {review.text}
      </div>

    </div>
  )
}

export default Card