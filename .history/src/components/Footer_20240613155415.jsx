// src/components/Footer.jsx

import React from "react";


const Footer = () => {

    return (

        <section id="footer">
            <div className="bg-gray-light w-full max-w-7xl p-32">
                <div className="flex flex-col font-custom text-n1-blue">
                    <h3 className="text-lg font-demiBold">Company</h3>
                    <p className="text-sm">About Us</p>
                    <p>How It Works</p>
                    <p>FAQs</p>
                    <p>Support</p>
                    <p>Contact Us</p>
                </div>

            </div>
        </section>
    );
}

export default Footer;