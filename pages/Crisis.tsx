import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Crisis: React.FC = () => {
  const relatedItems = Object.values(contentRegistry).filter(item => item.category === 'crisis');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kriisivalmius ja incident response | Lapland AI Lab" 
        description="Yhdistä kriisinhallinta, jatkuvuus ja sosiaalisen manipuloinnin torjunta arktiseksi vasteeksi." 
      />
      <Hero 
        title="Kriisivalmiuden ydin"
        subtitle="Kun tilanne kiristyy, toimintakyky syntyy selkeydestä, harjoittelusta ja luotettavasta viestinnästä."
        category="crisis"
        label="Kriisivalmius ja incident response"
      />

      <div className="space-y-12">
        <Section 
          title="Vaste käynnistyy ihmisistä"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Tekniset toimet ovat tehokkaita vasta, kun roolit, viestintä ja päätökset ovat selkeät."
          checklist={[
            "Nimeä kriisitiimi ja varahenkilöt etukäteen",
            "Sovi viestintäkanavat, jotka toimivat myös häiriössä",
            "Pidä incident response -checklist ajan tasalla"
          ]}
          colorClass="bg-red-500"
        >
          Kriisinhallinta alkaa siitä, että tiimi tietää mitä tehdä, kenelle soittaa ja missä päätökset syntyvät. Tämä sivu kokoaa kriisisisällöt, jotka yhdistävät teknisen vasteen ja inhimillisen suojan.
        </Section>

        {relatedItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center">
               <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
               Kriisi-kategorian syventävät moduulit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedItems.map(item => (
                <Link key={item.slug} to={`/content/${item.slug}`} className="glass p-6 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-red-400">{item.navLabel}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CTA label="Käynnistä kriisiharjoitus" link="/incident-response" />
      </div>
    </div>
  );
};

export default Crisis;
