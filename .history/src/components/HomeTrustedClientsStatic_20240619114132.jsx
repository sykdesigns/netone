import React from 'react';

const HomeTrustedClientsStatic = () => {
  return (

    <section id="trusted_by" className="bg-n1-white p-4">

        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">Trusted Clients</h2>

                <div className="flex items-center w-full p-2 mt-3">
                    <div className='w-1/3'><img src="/clients-logo-talend-color.png" className="w-full" alt="Talend" /></div>
                    <div className='w-1/3'><img src="/clients-logo-GDH-color.png" className="w-full" alt="GDH" /></div>
                    <div className='w-1/3'><img src="/clients-logo-talon-color.png" className="w-full" alt="Talon" /></div>
                </div>

                <div className='flex items-center w-full p-2'>
                    <div className='w-1/3'><img src="/clients-logo-cara-color.png" className="w-full" alt="Cara" /></div>
                    <div className='w-1/3'> <img src="/clients-logo-bresatech-color.png" className="w-full" alt="Bresatech" /></div>
                    <div className='w-1/3'><img src="/clients-logo-advanced-clinical-color.png" className="w-full" alt="Advanced Clinical" /></div>
                </div>

                <div className='w-full flex items-center p-2'>
                    <div className='w-1/3'><img src="/clients-logo-cars-color.png" className="w-full" alt="ORS" /></div>
                    <div className='w-1/3'><img src="/clients-logo-parker-color.png" className="w-full" alt="Kreatr" /></div>
                    <div className='w-1/3'><img src="/clients-logo-smartsheet-color.png" className="w-full" alt="Smartsheet" /></div>
                </div>
        
        </div>

    
    
    </section>

  );
}

export default HomeTrustedClientsStatic;