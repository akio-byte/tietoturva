import React from 'react';
import { SEO, Hero, CTA } from '../components/Shared';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="Sivua ei löydy | Lapland AI Lab"
        description="Hakemaasi sivua ei löytynyt. Palaa etusivulle ja tutustu tietoturvaoppaaseen."
      />
      <Hero
        title="Sivua ei löytynyt"
        subtitle="Reittiä ei ole olemassa tässä oppaassa. Palaa etusivulle ja aloita tietoturvan perusteista."
        label="404"
      />
      <CTA label="Takaisin etusivulle" link="#/" />
    </div>
  );
};

export default NotFound;
