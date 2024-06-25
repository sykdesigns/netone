// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';

const HeroComponent = () => {

    return (

        <section id='hero' className='bg-n1-white bg-custom-gradient'>
        <div className='flex max-w-screen-2xl m-auto '>
            <div className='w-1/2 font-custom text-n1-blue flex flex-col pl-14 pt-14 pb-14 gap-4'>
                
                <h1 className='text-8xl tracking-relax font-demiBold'>Welcome to the Future of Work<span className='text-n1-orange font-bold'>.</span></h1>
                <p className='text-2xl flex p-4'>Cloud-based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-12 py-3 w-full'>Hire Talent</button>
              
            </div>

            <div className='w-1/2 font-custom text-n1-blue m-auto flex flex-col items-center justify-center p-4'>
                <div><HeroVid /></div>
               
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;