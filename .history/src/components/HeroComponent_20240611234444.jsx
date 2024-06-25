// src/components/HeroComponet.jsx
import React from 'react';


const HeroComponent = () => {

    return (

        <section id='hero' className='to-blue-700'>
        <div className='flex max-w-7xl m-auto'>
            <div className='w-2/3 font-custom text-n1-blue relative'>
                <h1 className='text-8xl capitalize p-8 tracking-relax font-demiBold'>welcome to the future of work</h1>
                <div className='absolute top-40 left-52 w-1/2 '>
                <img src='../public/graphic_hero.png'></img>
                </div>
            </div>

            <div className='w-1/3 font-custom text-n1-blue m-auto flex flex-col items-center'>
                <p className='text-lg mb-6'>Cloud based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-12 py-3'>Hire Talent</button>
            </div>
        </div>
        </section>
    );
}

export default HeroComponent;