// src/components/HomeBlock1.jsx
import React from "react";


const HomeBlock1 = () => {

    return (

        <section id='block1' className='bg-n1-blue p-12 w-full flex items-center'>
        <div className="max-w-screen-2xl flex flex-col text-n1-white">
            <h1 className="text-2xl uppercase tracking-wide">we power the gig economy</h1>
            <p>By connecting talent leaders directly to our community of contract recruiters with an easy-to-use, seamless, digital platform.</p>
        </div>

        <div className="flex flex-col">
        <div className=" w-full p-8">
            <div className="w-1/3 text-n1-white">Maximize Scalability</div>
            <div className="w-1/3 text-n1-white">Minimize Risk</div>
            <div className="w-1/3 text-n1-white">Manage Costs</div>
        </div>
        </div>
        </section>
    );
}


export default HomeBlock1;