// src/components/HomeTrustedClients

import React from "react";

const HomeTrustedClients = () => {

    return (
    
        <section id="trusted_by">

            <div className="w-full flex text-n1-blue">
                <div className="w-full flex items-center justify-center p-8 bg-n1-white">
                    <h2 className="text-2xl font-demiBold font-custom tracking-wide">Trusted By:</h2>
                    <div>
                        <img src="../public/clients-logo-bresatech-color.png"></img>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default HomeTrustedClients;