// src/components/Footer.jsx

import React from "react";


const Footer = () => {

    return (

        <section id="footer" className="flex flex-col justify-center max-w-7xl p-32">
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

            <div className="bg-gray-light w-full flex justify-end">
                <div className="flex flex-col font-custom text-n1-blue">
                    <h3 className="text-lg font-demiBold mb-4">Corporate HQ</h3>
                    <p className="text-sm mb-4 leading-loose">
                        NetOne Talent, Inc.<br />
                        8000 Avalon Blvd.<br />
                        Suite 100<br />
                        Alpharetta, GA<br />
                        30009
                    </p>
                </div>
            </div>

            <div className="bg-gray-light w-full">
                <div className="flex font-custom text-n1-blue gap-6">
                    <img src="../public/ico-social-fb.png"></img>
                    <img src="../public/ico-social-in.png"></img>
                    <img src="../public/ico-social-x.png"></img>
                    <img src="../public/ico-social-youtube.png"></img>
                    <img src="../public/ico-social-insta.png"></img>
                </div>
            </div>

        </section>
    );
}

export default Footer;