import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const MobileSecurity: React.FC = () => {
  const relatedItems = Object.values(contentRegistry).filter(item => item.category === 'mobile');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Mobiiliturvallisuus ja viestintä | Lapland AI Lab" 
        description="Suojaa älypuhelimesi, tablettisi ja viestintäsi julkisissa verkoissa ja huolehdi fyysisestä turvasta." 
      />
      <Hero 
        title="Tasku-kyber: Suojaa liikkuva toimisto"
        subtitle="Puhelimesi on todennäköisesti henkilökohtaisin ja samalla haavoittuvin laitteesi. Pidä se lukittuna ja valvottuna."
        category="mobile"
        label="Taskussa kulkevan tiedon suojaus"
      />

      <div className="space-y-12">
        <Section 
          title="Fyysinen pääsy: Ensimmäinen este"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kadonnut puhelin on avoin ovi kaikkeen dataasi, sähköposteihisi ja pankkitileihisi."
          checklist={[
            "Käytä vahvaa biometriaa (kasvot/sormenjälki) aina",
            "Käytä vähintään 6-numeroista PIN-koodia, ei kuvioita",
            "Ota etätyhjennys (Find My / Android Find) käyttöön heti"
          ]}
        >
          Fyysinen turvallisuus on usein mobiililaitteiden heikoin lenkki. Laitteen varastaminen tai katoaminen on arkipäiväinen riski, joka on taklattava etukäteen.
        </Section>

        {relatedItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center">
               <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
               Mobiili-kategorian syventävät moduulit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedItems.map(item => (
                <Link key={item.slug} to={`/content/${item.slug}`} className="glass p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-purple-400">{item.navLabel}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CTA label="Mobiiliturvan pikaohje (A4 - Tulossa)" />
      </div>
    </div>
  );
};

export default MobileSecurity;