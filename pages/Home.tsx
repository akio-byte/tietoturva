import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  // Generoidaan featured-kortit suoraan registrystä
  const featuredItems = Object.values(contentRegistry).filter(item => item.featured);
  
  const categories = [
    { name: "Kyber", color: "text-blue-400", slug: "kyber" },
    { name: "AI", color: "text-emerald-400", slug: "ai" },
    { name: "Mobiili", color: "text-purple-400", slug: "mobile" },
    { name: "Kriisi", color: "text-red-400", slug: "crisis" },
    { name: "Tietosuoja", color: "text-indigo-400", slug: "privacy" },
    { name: "Rutiinit", color: "text-slate-400", slug: "routines" }
  ];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'ai': return (
        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
      case 'crisis': return (
        <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
      case 'mobile': return (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
      default: return (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#020617]">
      <SEO 
        title="Lapland AI Lab | Tietoturvaopas" 
        description="Kattava opas kyber- ja AI-turvallisuuteen pk-yrityksille ja opiskelijoille Lapland AI Labin asiantuntijoilta." 
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-24 relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] animate-fade-in">
            Lapland AI Lab Academy
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Pohjoisen <br/><span className="aurora-text">Digitaalinen Turva</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Lapland AI Labin asiantuntijoiden kuratoima tietopankki, joka auttaa organisaatiota navigoimaan turvallisesti nykyajan kyberviidakossa.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cyber-basics" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/20 text-lg">
              Aloita perusteista
            </Link>
            <Link to="/business-audit" className="w-full sm:w-auto glass hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl transition-all">
              Tee pika-auditointi
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {featuredItems.map((item) => (
            <Link
              key={item.slug}
              to={`/content/${item.slug}`}
              className="group glass p-8 rounded-[2.5rem] hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 border border-slate-800 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-slate-900/80 rounded-2xl flex items-center justify-center mb-10 border border-slate-700 group-hover:border-emerald-500/30 transition-colors shadow-inner">
                {getIconForCategory(item.category)}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {item.navLabel}
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3 text-sm flex-grow">
                {item.hero.subtitle}
              </p>
              <div className="flex items-center text-emerald-400 font-bold text-xs tracking-widest uppercase">
                Lue lisää
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-2xl font-black text-white mb-16 text-center uppercase tracking-[0.3em]">Sisältökirjasto</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.slug} 
                className="glass p-8 rounded-3xl text-center border border-slate-800 hover:border-slate-600 transition-all group"
              >
                <span className={`${cat.color} font-black text-xs block mb-6 uppercase tracking-widest group-hover:scale-110 transition-transform`}>{cat.name}</span>
                <div className="flex flex-col gap-3">
                  {Object.values(contentRegistry)
                    .filter(item => item.category === cat.slug)
                    .map(item => (
                      <Link 
                        key={item.slug} 
                        to={`/content/${item.slug}`}
                        className="text-[10px] text-slate-500 hover:text-emerald-400 transition-colors truncate font-bold uppercase tracking-wider"
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
              "Päivitä osaamistasi säännöllisesti AI-assistenttimme avulla",
              "Tee pika-auditointi neljännesvuosittain",
              "Ota uudet AI-työkalut hallitusti käyttöön"
            ]}
            colorClass="bg-indigo-500"
          >
            Tämä opas on rakennettu kasvamaan. Seuraamme teknologian kehitystä ja hyödynnämme tekoälyä sisällön rikastamisessa. Kysy rohkeasti oikean alakulman assistentilta neuvoa!
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Home;