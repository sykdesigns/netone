import React from 'react'
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className=''>
        <img src={review.image} alt={review.name}/>
      </div>
      
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>


      <div className='text-violet-400 mx-auto mt-5'>
        <LuArrowLeftCircle/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-5'>
        <LuArrowRightCircle/>
      </div>
    </div>
  )
}

export default Card