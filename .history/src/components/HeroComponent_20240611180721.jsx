// src/components/HeroComponet.jsx
import React from 'react';


const HeroComponent = () => {

    return (

        <div className='flex'>
            <div className='w-1/2 font-custom text-n1-blue relative'>
                <h1 className='text-8xl capitalize p-8 tracking-relax font-demiBold'>welcome to the future of work</h1>
                <div className='absolute top-72 left-52 w-1/2 '>
                <img src='../public/graphic_hero.png'></img>
                </div>
            </div>

            <div className='w-1/2 font-custom text-n1-blue m-auto'>
                <p className='text-sm'>Cloud based access to world-class IT professionals and recruiters</p>
                <div className='absolute top-72 left-52 w-1/2 '>
                <img src='../public/graphic_hero.png'></img>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;