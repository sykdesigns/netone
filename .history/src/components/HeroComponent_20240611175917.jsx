// src/components/HeroComponet.jsx
import React from 'react';


const HeroComponent = () => {

    return (

        <div className='flex'>
            <div className='w-1/2 font-custom text-n1-blue relative'>
                <h1 className='text-8xl capitalize font-demiBold p-4'>welcome to the future of work</h1>
                <div className='absolute inset-y-3 '>
                <img src='../public/graphic_hero.png'></img>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;