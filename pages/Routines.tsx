import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Routines: React.FC = () => {
  const relatedItems = Object.values(contentRegistry).filter(item => item.category === 'routines');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietoturvan tarkistuslistat | Lapland AI Lab" 
        description="Viikoittaiset, kuukausittaiset ja vuosittaiset rutiinit sekä poikkeustilanneharjoittelu." 
      />
      <Hero 
        title="Turvallisuuden arjen rutiinit"
        subtitle="Tietoturva ei ole projekti, se on jatkuva tapa. Tässä ovat listat, joilla pidät huolen, ettei unohduksia tapahdu."
        category="routines"
        label="Viikko- ja kuukausitason tarkistuslistat"
      />

      <div className="space-y-12">
        <Section 
          title="Maanantai-check (Viikoittainen)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Pienet rutiinit estävät suuret katastrofit ennen kuin ne ehtivät alkaa."
          checklist={[
            "Tarkista onko laitteissa odottavia käyttöjärjestelmäpäivityksiä",
            "Käy läpi sähköpostin roskapostikansio (tunnista uudet huijaukset)",
            "Varmista että kriittinen varmuuskopiointi on rullannut onnistuneesti"
          ]}
        >
          Viikon startti on paras aika varmistaa, että perustekniikka on kunnossa ja valvonta aktiivista uuden viikon haasteita varten.
        </Section>

        {relatedItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center">
               <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
               Rutiinit-kategorian syventävät moduulit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedItems.map(item => (
                <Link key={item.slug} to={`/content/${item.slug}`} className="glass p-6 rounded-2xl border border-slate-800 hover:border-slate-500/50 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-white">{item.navLabel}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CTA label="Tilaa muistutus (Tulossa)" />
      </div>
    </div>
  );
};

export default Routines;