// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HeroComponent = () => {

    return (

        <section id='hero' className='bg-n1-white bg-custom-gradient'>
        <div className='flex max-w-screen-2xl m-auto'>
            <div className='w-1/2 font-custom text-n1-blue flex flex-col pl-10 md:pl-14 lg:pt-10 lg:pb-14 gap-4 pt-6 pb-6'>
                
                <h1 className='text-4xl lg:text-8xl tracking-relax font-demiBold'>Welcome to the Future of Work<span className='text-n1-orange font-bold'>.</span></h1>
                {/* <p className='sm:text-xl md:text-2xl flex sm:p-2 md:p-4'>Cloud-based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-8 py-3 w-full flex items-center justify-between'>Hire Talent <FaRegArrowAltCircleRight /></button> */}
              
            </div>

            <div className='hidden w-1/2 font-custom text-n1-blue m-auto lg:flex flex-col items-center justify-center p-4'>
                <div><HeroVid /></div>
               
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;