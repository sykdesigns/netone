// src/components/HomeBlock1.jsx
import React from "react";


const HomeBlock1 = () => {

    return (

        <section id='block1' className='bg-n1-blue'>

            <div className="w-full flex flex-col items-center text-n1-white p-12">
                <h1 className="text-2xl uppercase tracking-wider">we power the gig economy</h1>
                <p>By connecting talent leaders directly to our community of contract recruiters with an easy-to-use, seamless, digital platform.</p>
            </div>

        
        <div className="flex">
            <div className="w-1/3 text-n1-white">Maximize Scalability</div>
            <div className="w-1/3 text-n1-white">Minimize Risk</div>
            <div className="w-1/3 text-n1-white">Manage Costs</div>
        </div>
     
        </section>
    );
}


export default HomeBlock1;