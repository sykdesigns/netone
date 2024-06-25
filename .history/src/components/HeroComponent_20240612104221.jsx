// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';

const HeroComponent = () => {

    return (

        <section id='hero' className='bg-n1-white'>
        <div className='flex max-w-7xl m-auto'>
            <div className='w-1/2 font-custom text-n1-blue flex items-center pl-14'>
                
                <h1 className='text-8xl capitalize tracking-relax font-demiBold'>welcome to the future of work</h1>
              
            </div>

            <div className='w-1/2 font-custom text-n1-blue m-auto flex flex-col items-center justify-center p-4'>
                <div><HeroVid /></div>
                <p className='text-lg m-6 w-2/3'>Cloud based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-12 py-3'>Hire Talent</button>
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;