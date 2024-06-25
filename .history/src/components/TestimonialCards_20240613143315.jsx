import React from 'react'
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";


const Card = (props) => {
    let review = props.review;
  
    return (

    <div className='flex flex-col'>
      <div className=''>
        <p className='tracking-wider text-xl uppercase text-n1-white'>{review.name}</p>
        <img src={review.image} alt={review.name} className='w-32 mt-16 mb-16'/>
      </div>
    

      <div className='text-n1-white w-2/3'>
        {review.text}
      </div>

    </div>
  )
}

export default Card