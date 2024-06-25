// src/componets/HomeDemo.jsx
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const HomeDemo = () => {

return(

        <section id="request_demo" className="w-full bg-n1-blue-light p-8 md:p-16">

            <div className="flex flex-col max-w-7xl m-auto">
            
                <div className="flex sm:flex-col md:flex-row md:items-center md:justify-between p-8 md:p-12">
                    <h3 className="text-xl md:text-2xl text-n1-blue mb-8 w-full md:w-6/12">NetOne Recruiter leverages innovative technology to accelerate speed to hire for all users.</h3>
                    <button className="bg-n1-blue text-n1-white font-custom text-sm rounded-full px-8 py-4 w-1/2 md:w-1/4 flex items-center justify-between">Request A Demo <FaRegArrowAltCircleRight /></button>
                </div>

                <div className="flex sm:flex-col md:flex-row md:mt-4">
                    <div className="w-full md:w-1/3 flex flex-col p-8 md:p-12 text-n1-blue">
                        <img src="../public/ico-demo-rate.png" className="w-16"></img>
                        <h4 className="font-custom font-demiBold mt-2">Recruiter Rate Validation</h4>
                        <p className="text-sm">Our rate analysis tool provides guidance on contract recruiter market bill rates.</p>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col p-8 md:p-12 text-n1-blue">
                        <img src="../public/ico-demo-assessments.png" className="w-12"></img>
                        <h4 className="font-custom font-demiBold mt-2">Behavioral Assessments</h4>
                        <p className="text-sm">Delivers Insights into the Recruiter’s personality and work habits.</p>
                    </div>
                </div>

                <div className="flex sm:flex-col justify-between">
                    <div className="w-full md:w-1/3 flex flex-col p-8 md:p-12 text-n1-blue">
                        <img src="../public/ico-demo-video.png" className="w-12 h-12"></img>
                        <h4 className="font-custom font-demiBold mt-2">Pre-Recorded Video Interviews</h4>
                        <p className="text-sm">Our rate analysis tool provides guidance on contract recruiter market bill rates.</p>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col p-8 md:p-12 text-n1-blue">
                        <img src="../public/ico-demo-tracking.png" className="w-12 h-12"></img>
                        <h4 className="font-custom font-demiBold mt-2">Centralized Project Tracking</h4>
                        <p className="text-sm">Tracks recruiter usage and costs to identify trends and plans for future projects.</p>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col p-8 md:p-12 text-n1-blue">
                        <img src="../public/ico-demo-contract.png" className="w-16 h-12"></img>
                        <h4 className="font-custom font-demiBold mt-2">Independent Contract
                        Validation</h4>
                        <p className="text-sm">Our IC validation protects you from government fines; back taxes & bad press.</p>
                    </div>
                </div>
            </div>

        </section>

);


}

export default HomeDemo;