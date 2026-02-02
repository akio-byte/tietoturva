import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const CyberBasics: React.FC = () => {
  const relatedItems = Object.values(contentRegistry).filter(item => item.category === 'kyber');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kyberturvallisuuden perusteet | Lapland AI Lab" 
        description="Opi tietoturvan peruspilarit: CIA-malli, MFA, salasanojen hallinta ja päivitysten merkitys." 
      />
      <Hero 
        title="Kyberturvallisuuden peruspilarit"
        subtitle="Kaikki turvallisuus alkaa kolmesta sanasta: Luottamuksellisuus, Eheys ja Saatavuus. Täältä löydät perussäännöt arkeen."
        category="kyber"
        label="Digitaalisen turvan kivijalka"
      />

      <div className="space-y-12">
        <Section 
          title="CIA-malli: Tietoturvan perusmalli"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Se auttaa ymmärtämään, mitä oikeastaan suojaamme ja miksi."
          checklist={[
            "Määrittele tärkein tietosi organisaatiossasi",
            "Tarkista säännöllisesti kuka tietoon pääsee käsiksi",
            "Varmista varmuuskopioilla, ettei tieto muutu vahingossa"
          ]}
          colorClass="bg-emerald-500"
        >
          CIA-malli (Confidentiality, Integrity, Availability) on kansainvälinen standardi tietoturvan suunnitteluun. Se varmistaa, että tieto pysyy salassa, oikeana ja käytettävissä.
        </Section>

        <Section 
          title="Tiedon luokittelu"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kaikkea tietoa ei voi suojata samalla tavalla. Resurssit on kohdistettava kriittisimpään."
          checklist={[
            "Julkinen tieto: Markkinointimateriaalit (ei vaadi salausta)",
            "Sisäinen tieto: Intranet-uutiset (vain henkilöstölle)",
            "Luottamuksellinen: Asiakastiedot ja sopimukset (vaatii vahvan tunnistautumisen)",
            "Salainen: Liikesalaisuudet (vaatii tiukan, rajatun pääsynhallinnan)"
          ]}
          colorClass="bg-indigo-500"
        >
          <p className="mb-4">Tietojen luokittelu auttaa hahmottamaan, missä suurin riski piilee. Älä käytä aikaa lounaslistan salaamiseen, vaan keskitä voimat asiakasrekisteriin.</p>
        </Section>

        {relatedItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center">
               <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
               Kyber-kategorian syventävät moduulit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedItems.map(item => (
                <Link key={item.slug} to={`/content/${item.slug}`} className="glass p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-blue-400">{item.navLabel}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CTA label="Tee pika-auditointi" link="/business-audit" />
      </div>
    </div>
  );
};

export default CyberBasics;