// src/components/HeroComponet.jsx
import React from 'react';
import HeroVid from './HeroVid';

const HeroComponent = () => {

    return (

        <section id='hero' className='to-blue-700'>
        <div className='flex max-w-7xl m-auto'>
            <div className='w-1/2 font-custom text-n1-blue'>
                
                <h1 className='text-8xl capitalize p-8 tracking-relax font-demiBold'>welcome to the future of work</h1>
              
            </div>

            <div className='w-1/2 font-custom text-n1-blue m-auto flex flex-col items-center'>
                <div><HeroVid /></div>
                <p className='text-lg mb-6'>Cloud based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-12 py-3'>Hire Talent</button>
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;