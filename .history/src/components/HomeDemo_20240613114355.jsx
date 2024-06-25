// src/componets/HomeDemo.jsx
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomeDemo = () => {

return(

        <section id="request_demo" className="w-full">
            
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-n1-blue w-5/12">NetOne Recruiter leverages innovative technology to accelerate speed to hire for all users.</h3>
                <button className="bg-n1-blue text-n1-white font-custom text-sm rounded-full px-8 py-4 w-1/4 flex items-center justify-between">Request A Demo <FaRegArrowAltCircleRight /></button>
            </div>

            <div className="flex mt-12">
                <div className=" w-1/3 flex flex-col p-12 text-n1-blue">
                    <img src="../public/ico-demo-rate.png" className="w-16"></img>
                    <h4 className="font-custom font-demiBold mt-2">Recruiter Rate Validation</h4>
                    <p className="text-sm">Our rate analysis tool provides guidance on contract recruiter market bill rates.</p>
                </div>

                <div className=" w-1/3 flex flex-col p-12 text-n1-blue">
                    <img src="../public/ico-demo-assessments.png" className="w-12"></img>
                    <h4 className="font-custom font-demiBold mt-2">Behavioral Assessments</h4>
                    <p className="text-sm">Delivers Insights into the Recruiter’s personality and work habits.</p>
                </div>
            </div>

            <div className="flex">
                <div className=" w-1/3 flex flex-col p-12 text-n1-blue">
                    <img src="../public/ico-demo-rate.png" className="w-16"></img>
                    <h4 className="font-custom font-demiBold mt-2">Recruiter Rate Validation</h4>
                    <p className="text-sm">Our rate analysis tool provides guidance on contract recruiter market bill rates.</p>
                </div>

                <div className=" w-1/3 flex flex-col p-12 text-n1-blue">
                    <img src="../public/ico-demo-assessments.png" className="w-12"></img>
                    <h4 className="font-custom font-demiBold mt-2">Behavioral Assessments</h4>
                    <p className="text-sm">Delivers Insights into the Recruiter’s personality and work habits.</p>
                </div>

                <div className=" w-1/3 flex flex-col p-12 text-n1-blue">
                    <img src="../public/ico-demo-assessments.png" className="w-12"></img>
                    <h4 className="font-custom font-demiBold mt-2">Behavioral Assessments</h4>
                    <p className="text-sm">Delivers Insights into the Recruiter’s personality and work habits.</p>
                </div>
            </div>

        </section>

);


}

export default HomeDemo;