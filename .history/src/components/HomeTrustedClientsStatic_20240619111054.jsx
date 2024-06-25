import React from 'react';

const HomeTrustedClients = () => {
  return (
    <section id="trusted_by" className="bg-n1-white p-8 lg:p-16">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-2xl font-custom tracking-wide text-n1-blue mb-4">Trusted By:</h2>
      </div>

      <div className="w-full overflow-hidden">

        <div className="scroll-container">
          <div className="scroll-row">
            <img src="/clients-logo-bresatech-color.png" className="w-32" alt="Bresatech" />
            <img src="/clients-logo-advanced-clinical-color.png" className="w-36" alt="Advanced Clinical" />
            <img src="/clients-logo-cara-color.png" className="w-36" alt="Cara" />
            <img src="/clients-logo-cars-color.png" className="w-36" alt="Cars" />
            <img src="/clients-logo-cupertino-color.png" className="w-36" alt="Cupertino" />
            <img src="/clients-logo-GDH-color.png" className="w-36" alt="GDH" />
            <img src="/clients-logo-kreatr-color.png" className="w-36" alt="Kreatr" />
            <img src="/clients-logo-ors-color.png" className="w-36" alt="ORS" />
         </div>
        </div>
    </div>
    </section>

  );
}