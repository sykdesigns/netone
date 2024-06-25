// src/components/Footer.jsx

import React from "react";


const Footer = () => {

    return (

        <section id="footer" className="bg-custom-gradient">
            <div className=" flex flex-col max-w-7xl m-auto p-8 lg:p-28">
            <div className="w-full mt-8">
                <div className="flex flex-col font-custom text-n1-blue">
                    <h3 className="text-lg font-demiBold mb-4">Company</h3>
                    <p className="text-sm mb-4">About Us</p>
                    <p className="text-sm mb-4">How It Works</p>
                    <p className="text-sm mb-4">FAQs</p>
                    <p className="text-sm mb-4">Support</p>
                    <p className="text-sm mb-4">Contact Us</p>
                    <p className="text-sm mt-8 mb-4">Terms Of Service</p>
                    <p className="text-sm mb-4">Privacy Policy</p>
                </div>
            </div>


            <div className="bg-gray-light w-full mt-28 lg:mt-32">
                <div className="flex font-custom text-n1-blue gap-5">
                    <img src="https://github.com/sykdesigns/netone/tree/main/public/ico-social-fb.png"></img>
                    <img src="https://github.com/sykdesigns/netone/tree/main/public/ico-social-in.png"></img>
                    <img src="https://github.com/sykdesigns/netone/tree/main/public/ico-social-x.png"></img>
                    <img src="https://github.com/sykdesigns/netone/tree/main/public/ico-social-youtube.png"></img>
                    <img src="https://github.com/sykdesigns/netone/tree/main/public/ico-social-insta.png"></img>
                </div>
                <div className="text-n1-blue mt-4">
                    <p className="text-xs">&copy;2022 NetOne Talent, Inc.</p>
                </div>
            </div>
            </div>

            {/* <div className="">
                <img src="https://github.com/sykdesigns/netone/tree/main/public/graphic-leaves.png"></img>
            </div> */}

        </section>
    );
}

export default Footer;