// src/components/HomeBlock1.jsx
import React from "react";


const HomeBlock1 = () => {

    return (

        <section id='block1' className='bg-n1-blue'>

            <div className="w-full flex flex-col items-center text-n1-white p-12">
                <h2 className="text-2xl uppercase tracking-wider font-custom mb-2">we power the gig economy</h2>
                <p>By connecting talent leaders directly to our community of contract recruiters with an easy-to-use, seamless, digital platform.</p>
            </div>

        
        <div className="flex items-center justify-center">
            <div className="w-1/3 text-n1-white flex items-center justify-center">
            <div className="w-16 h-16 bg-n1-white rounded-full flex items-center justify-center"><img src="../public/ico_scalability.png"</div>
            <h3>Maximize Scalability</h3>
            </div>
            <div className="w-1/3 text-n1-white flex items-center justify-center">Minimize Risk</div>
            <div className="w-1/3 text-n1-white flex items-center justify-center">Manage Costs</div>
        </div>
     
        </section>
    );
}


export default HomeBlock1;