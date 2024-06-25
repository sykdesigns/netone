// src/components/TestimonialSlider.jsx

import React from "react";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";


export default function Carousel({ children: slides }) {
    return (
        <div className="overflow-hidden relative">
            <div className="flex"{slides}></div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className="">
                    <LuArrowLeftCircle size={40} />
                </button>
                <button className="">
                    <LuArrowRightCircle size={40} />
                </button>
            </div>
        </div>
    )
}