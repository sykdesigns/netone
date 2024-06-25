// src/components/Footer.jsx

import React from "react";


const Footer = () => {

    return (

        <section id="footer" className="bg-custom-gradient">
            <div className=" flex flex-col max-w-7xl m-auto p-28 justify-end">
            <div className="bg-gray-light w-full">
                <div className="flex flex-col font-custom text-n1-blue">
                    <h3 className="text-lg font-demiBold mb-4">Company</h3>
                    <p className="text-sm mb-4">About Us</p>
                    <p className="text-sm mb-4">How It Works</p>
                    <p className="text-sm mb-4">FAQs</p>
                    <p className="text-sm mb-4">Support</p>
                    <p className="text-sm mb-4">Contact Us</p>
                </div>
            </div>


            <div className="bg-gray-light w-full mt-32">
                <div className="flex font-custom text-n1-blue gap-5">
                    <img src="../public/ico-social-fb.png"></img>
                    <img src="../public/ico-social-in.png"></img>
                    <img src="../public/ico-social-x.png"></img>
                    <img src="../public/ico-social-youtube.png"></img>
                    <img src="../public/ico-social-insta.png"></img>
                </div>
                <div className="text-xs text-n1-blue mt-4">
                    <p>&copy;2022 NetOne Talent, Inc. | Terms Of Service • Privacy Policy</p>
                </div>
            </div>
            </div>

            {/* <div className="">
                <img src="../public/graphic-leaves.png"></img>
            </div> */}

        </section>
    );
}

export default Footer;