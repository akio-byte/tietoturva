
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  // Generoidaan featured-kortit suoraan registrystä SOPIMUKSEN mukaan
  const featuredItems = Object.values(contentRegistry).filter(item => item.featured);
  
  const categories = [
    { name: "Kyber", color: "text-blue-400", slug: "kyber" },
    { name: "AI", color: "text-emerald-400", slug: "ai" },
    { name: "Mobiili", color: "text-purple-400", slug: "mobile" },
    { name: "Kriisi", color: "text-red-400", slug: "crisis" },
    { name: "Tietosuoja", color: "text-indigo-400", slug: "privacy" },
    { name: "Rutiinit", color: "text-slate-400", slug: "routines" }
  ];

  return (
    <div className="relative overflow-hidden">
      <SEO 
        title="Lapland AI Lab | Tietoturvaopas" 
        description="Kattava opas kyber- ja AI-turvallisuuteen pk-yrityksille ja opiskelijoille Lapland AI Labin asiantuntijoilta." 
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Pohjoisen <br/><span className="aurora-text">Digitaalinen Turvaopas</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Lapland AI Labin asiantuntijoiden kuratoima tietopankki, joka auttaa organisaatiota navigoimaan turvallisesti nykyajan kyberviidakossa.
          </p>
          <div className="mt-10">
            <Link to="/cyber-basics" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all inline-block shadow-xl shadow-emerald-500/20 text-lg">
              Aloita perusteista
            </Link>
          </div>
        </div>

        {/* Nostetut sisällöt dynaamisesti registrystä */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {featuredItems.map((item) => (
            <Link
              key={item.slug}
              to={`/content/${item.slug}`}
              className="group glass p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 border border-slate-800"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {item.navLabel}
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3">
                {item.hero.subtitle}
              </p>
              <div className="flex items-center text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                Syvenny aiheeseen
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">Selaa kategorioittain</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.slug} 
                className="glass p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-600 transition-all"
              >
                <span className={`${cat.color} font-bold text-sm block mb-4 uppercase`}>{cat.name}</span>
                <div className="flex flex-col gap-2">
                  {Object.values(contentRegistry)
                    .filter(item => item.category === cat.slug)
                    .map(item => (
                      <Link 
                        key={item.slug} 
                        to={`/content/${item.slug}`}
                        className="text-xs text-slate-500 hover:text-emerald-400 transition-colors truncate"
                      >
                        {item.navLabel}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          <Section 
            title="Tietoturva on jatkuva prosessi"
            importanceTitle="Miksi tämä on tärkeää?"
            importanceDesc="Tietotulva voi uuvuttaa, mutta järjestelmällisyys pelastaa."
            checklist={[
              "Päivitä osaamistasi säännöllisesti",
              "Tee pika-auditointi neljännesvuosittain",
              "Ota uudet AI-työkalut hallitusti käyttöön"
            ]}
            colorClass="bg-indigo-500"
          >
            Tämä opas on rakennettu kasvamaan. Seuraamme teknologian kehitystä ja päivitämme sisältöjä vastaamaan uusia uhkia, kuten tekoälypohjaista sosiaalista manipulointia.
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Home;
