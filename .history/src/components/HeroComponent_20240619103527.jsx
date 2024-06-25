// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HeroComponent = () => {

    return (

        <section id='hero' className='bg-n1-white bg-custom-gradient flex justify-center'>

            <div className='sm:hidden font-custom text-n1-blue sm:flex flex-col pt-4'>
                <div><HeroVid /></div>
               
            </div>

        <div className='flex max-w-screen-2xl'>
            <div className='w-11/12 sm:w-1/2 font-custom text-n1-blue flex flex-col m-auto sm:pl-20 sm:pt-10 sm:pb-14 gap-6 p-6'>
                
                <h1 className='text-4xl text-center sm:text-left lg:text-8xl tracking-relax font-demiBold'>Welcome to the Future of Work<span className='text-n1-orange font-bold'>.</span></h1>
                <p className='text-md lg:text-2xl flex text-center sm:text-left'>Cloud-based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-5 py-3 w-full flex items-center justify-between'>Hire Talent <FaRegArrowAltCircleRight className='text-lg' /></button>
              
            </div>

            <div className='hidden w-1/2 font-custom text-n1-blue m-auto sm:flex flex-col items-center justify-center p-4'>
                <div><HeroVid /></div>
               
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;