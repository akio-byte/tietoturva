import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Privacy: React.FC = () => {
  const relatedItems = Object.values(contentRegistry).filter(item => item.category === 'privacy');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietosuoja ja Datan Hallinta | Lapland AI Lab" 
        description="Varmista organisaatiosi digitaalinen itsemääräämisoikeus ja datan suojaus pohjoisilla standardeilla." 
      />
      <Hero 
        title="Digitaalinen Itsemääräämisoikeus"
        subtitle="Datan hallinta on nykyajan suvereniteetin peruskivi. Suojaa yksityisyytesi monikerroksisella arkkitehtuurilla."
        category="privacy"
        label="Datan hallinta & Yksityisyys"
      />

      <div className="space-y-12">
        <Section 
          title="Zero Trust -periaate tietosuojassa"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Luottamuksen puute järjestelmätasolla on paras tae sille, ettei data valu vääriin käsiin."
          checklist={[
            "Auditioi kuka pääsee käsiksi asiakasdataan",
            "Ota käyttöön päästä-päähän-salaus kaikessa viestinnässä",
            "Määrittele datan säilytysajat tiukasti lain mukaan"
          ]}
          colorClass="bg-indigo-500"
        >
          Zero Trust (nollaluottamus) tarkoittaa, että mikään yhteys tai käyttäjä ei ole oletusarvoisesti luotettu, vaikka se olisi sisäverkossa. Jokainen pyyntö on todennettava ja valtuutettava erikseen.
        </Section>

        {relatedItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-8 flex items-center">
               <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
               Tietosuoja-kategorian syventävät moduulit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedItems.map(item => (
                <Link key={item.slug} to={`/content/${item.slug}`} className="glass p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-indigo-400">{item.navLabel}</h4>
                  <p className="text-slate-500 text-xs line-clamp-2">{item.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <CTA label="Tietosuojan pika-auditointi" link="/business-audit" />
      </div>
    </div>
  );
};

export default Privacy;