// src/components/HomeGigEconomy.jsx
import React from "react";


const HomeGigEconomy = () => {

    return (

        <section id='gig-economy' className='bg-n1-blue'>

            <div className="w-full flex flex-col items-center text-n1-white p-12">
                <h2 className="text-xl sm:text-2xl uppercase text-center tracking-wider font-custom mb-2">we power the gig economy</h2>
                <p className="tracking-wide leading-relaxed text-sm sm:text-lg w-11/12 text-center">By connecting talent leaders directly to our community of contract recruiters with an easy-to-use, seamless, digital platform.</p>
            </div>

        
        <div className="flex lg:flex-row flex-col items-start justify-center max-w-7xl m-auto lg:h-72 h-full flex-shrink-0">

            <div className="w-full lg:w-1/3 lg:h-3/4 text-n1-white flex flex-col items-center m-auto lg:border-solid lg:border-r">
            <div className="w-16 h-16 bg-n1-white rounded-full flex items-center justify-center mb-6"><img src="../public/ico_scalability.png" className="w-8"></img></div>
            <h3 className="font-demiBold font-custom mb-2">Maximize Scalability</h3>
            <p className="text-sm tracking-wide text-center w-11/12 sm:w-1/2 mb-8">Create your company profile, post jobs and engage immediately with available recruiters.</p>
            </div>

            <div className="w-full lg:w-1/3 lg:h-3/4 text-n1-white flex flex-col items-center m-auto lg:border-solid lg:border-r">
            <div className="w-16 h-16 bg-n1-white rounded-full flex items-center justify-center mb-4"><img src="../public/ico_risk.png" className="w-8"></img></div>
            <h3 className='font-demiBold font-custom mb-2'>Minimize Risk</h3>
            <p className="text-s sm:text-lg tracking-wide text-center w-11/12 sm:w-1/2 mb-8">All recruiters complete NetOne Recruiter’s skill screening assessment.</p>
            </div>

            <div className="w-full lg:w-1/3 lg:h-3/4 text-n1-white flex flex-col items-center m-aut mb-12">
            <div className="w-16 h-16 bg-n1-white rounded-full flex items-center justify-center mb-4"><img src="../public/ico_costs.png" className="w-5"></img></div>
            <h3 className='font-demiBold font-custom mb-2'>Manage Costs</h3>
            <p className="text-sm tracking-wide text-center w-11/12 sm:w-1/2">There are no subscription fees - hourly billing commences once a recruiter is selected and begins working.</p>
            </div>

            
        </div>
     
        </section>
    );
}


export default HomeGigEconomy;