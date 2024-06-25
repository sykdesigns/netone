// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HeroComponent = () => {

    return (

        <section id='hero' className='bg-n1-white bg-custom-gradient'>
        <div className='flex max-w-screen-2xl m-auto'>
            <div className='w-full lg:w-1/2 font-custom text-n1-blue flex flex-col lg:pl-10 lg:pt-10 lg:pb-14 gap-4 p-6'>
                
                <h1 className='text-4xl lg:text-8xl tracking-relax font-demiBold'>Welcome to the Future of Work<span className='text-n1-orange font-bold'>.</span></h1>
                <p className='text-xl lg:text-2xl flex'>Cloud-based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-4 py-3 w-full flex items-center justify-between'>Hire Talent <FaRegArrowAltCircleRight /></button>
              
            </div>

            <div className='hidden w-1/2 font-custom text-n1-blue m-auto lg:flex flex-col items-center justify-center p-4'>
                <div><HeroVid /></div>
               
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;