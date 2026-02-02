
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  const featuredItems = Object.values(contentRegistry).filter(item => item.featured);
  
  const cards = [
    {
      title: 'AI-turvallisuus',
      desc: 'Ymmärrä tekoälyjärjestelmien uudet hyökkäysvektorit ja suojaa organisaatiosi data.',
      link: '/ai-safety',
      color: 'from-emerald-400 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Kyberperusteet',
      desc: 'Hallitse tietoturvan peruspilarit: luottamuksellisuus, eheys ja saatavuus.',
      link: '/cyber-basics',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Auditointi',
      desc: 'Tee nopea pika-auditointi ja selvitä organisaatiosi tietoturvan nykytila.',
      link: '/business-audit',
      color: 'from-indigo-400 to-indigo-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

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
            Lapland AI Labin asiantuntijoiden kuratoima tietopankki, joka auttaa sinua ja yritystäsi navigoimaan turvallisesti nykyajan kyberviidakossa.
          </p>
          <div className="mt-10">
            <Link to="/cyber-basics" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all inline-block shadow-xl shadow-emerald-500/20 text-lg">
              Aloita oppiminen
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card) => (
            <Link
              key={card.link}
              to={card.link}
              className="group glass p-8 rounded-3xl hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2 border border-slate-800"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/50`}>
                <div className="text-white">{card.icon}</div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {card.title}
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">{card.desc}</p>
              <div className="flex items-center text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                Tutustu materiaaliin
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-widest">Suositeltua sisältöä</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link 
                key={item.slug} 
                to={`/content/${item.slug}`}
                className="glass p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <svg className="w-12 h-12 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">{item.navLabel}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.hero.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-2">{item.hero.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">Selaa kategorioittain</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.slug} 
                className="glass p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-600 transition-all"
              >
                <span className={`${cat.color} font-bold text-sm block mb-4`}>{cat.name}</span>
                <div className="flex flex-col gap-2">
                  {Object.values(contentRegistry)
                    .filter(item => item.category === cat.slug)
                    .slice(0, 3)
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
            title="Kenelle tämä opas on?"
            importanceTitle="Miksi tämä on tärkeää?"
            importanceDesc="Tietoturva kuuluu kaikille, mutta vastuut jakautuvat eri tavoin."
            checklist={[
              "Yritysjohdolle: Ymmärrä riskit ja resursoi suojautuminen oikein",
              "IT-tuelle: Varmista tekniset kontrollit ja päivitykset",
              "Henkilöstölle: Tunnista huijaukset ja toimi turvallisesti arjessa"
            ]}
            colorClass="bg-indigo-500"
          >
            Tämä opas ei ole vain teknisille asiantuntijoille. Se on kirjoitettu selkokielellä, jotta jokainen organisaation jäsen ymmärtää roolinsa digitaalisen turvallisuuden ketjussa.
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Home;
