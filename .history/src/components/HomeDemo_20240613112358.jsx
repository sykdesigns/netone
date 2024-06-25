// src/componets/HomeDemo.jsx
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomeDemo = () => {

return(

        <section id="request_demo" className="w-full p-12">
            <div>
                <h3>NetOne Recruiter leverages innovative technology to accelerate speed to hire for all users.</h3>
                <button className="bg-n1-blue text-n1-white font-custom text-sm px-12 py-4 flex items-center">Request A Demo <span className="ml-auto"><FaRegArrowAltCircleRight /></span></button>
            </div>
        </section>

);


}

export default HomeDemo;