import React from 'react';
import { SEO, PageLayout, CTA } from '../components/Shared';

const NotFound: React.FC = () => {
  return (
    <PageLayout className="text-center">
      <SEO 
        title="Sivua ei löytynyt | Lapland AI Lab" 
        description="Hakemaasi sivua ei löytynyt. Palaa etusivulle jatkamaan tietoturvaoppaan parissa." 
      />
      <div className="glass border border-slate-800 rounded-3xl p-12">
        <p className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sivua ei löytynyt</h1>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Hakemaasi osoitetta ei ole olemassa tai se on siirretty. Palaa etusivulle ja jatka oppaan parissa.
        </p>
        <CTA label="Takaisin etusivulle" link="/" />
      </div>
    </PageLayout>
  );
};

export default NotFound;
