// src/components/HeroComponet.jsx
import React from 'react';


const HeroComponent = () => {

    return (

        <div className='flex max-w-7xl m-auto'>
            <div className='w-1/2 font-custom text-n1-blue relative'>
                <h1 className='text-8xl capitalize p-8 tracking-relax font-demiBold'>welcome to the future of work</h1>
                <div className='absolute top-72 left-52 w-1/2 '>
                <img src='../public/graphic_hero.png'></img>
                </div>
            </div>

            <div className='w-1/2 font-custom text-n1-blue m-auto flex flex-col items-center'>
                <p className='text-sm w-1/2 p-8'>Cloud based access to world-class IT professionals and recruiters.</p>
                <button className='text-n1-white bg-n1-orange rounded-full px-12 py-3'>Hire Talent</button>
            </div>
        </div>
    );
}

export default HeroComponent;