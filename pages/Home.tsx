
import React from 'react';
import Seo from '../components/Seo';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const cards = [
    {
      title: 'AI-turvallisuus',
      desc: 'Ymmärrä tekoälyjärjestelmien uudet hyökkäysvektorit ja suojaa organisaatiosi data.',
      link: '/ai-safety',
      color: 'from-emerald-400 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20a10.003 10.003 0 006.203-2.538l.054.09A10.003 10.003 0 0112 21a10.003 10.003 0 01-9.203-5.462l.054-.09A10.003 10.003 0 0112 11z" />
        </svg>
      )
    },
    {
      title: 'Mobiiliturvallisuus',
      desc: 'Suojaa tärkein työvälineesi. Käytännön ohjeet älypuhelimien tietoturvaan.',
      link: '/mobile-security',
      color: 'from-purple-400 to-purple-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Yritysauditointi',
      desc: 'Valmistaudu auditointiin ja rakenna todennettava turvakulttuuri.',
      link: '/company-audit',
      color: 'from-emerald-400 to-blue-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 7h10M7 17h10M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      title: 'Turvarutiinit',
      desc: 'Rakenna päivittäinen rytmi, joka pitää kontrollit jatkuvasti kunnossa.',
      link: '/security-routines',
      color: 'from-blue-400 to-purple-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <Seo
        title="Lapland AI Lab | Tietoturvaopas"
        description="Lapland AI Labin digitaalinen turvaopas kokoaa AI-turvan, kyberperusteet, mobiiliturvan, auditoinnit ja rutiinit yhteen pohjoiseen tyyliin."
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Pohjoisen <br/><span className="aurora-text">Digitaalinen Turvaopas</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Lapland AI Labin asiantuntijoiden kokoama tietopankki tekoäly- ja kyberturvallisuuteen. Rakenna kestävä suoja nykyajan uhkia vastaan.
          </p>
          <div className="mt-10">
            <Link to="/cyber-basics" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-all inline-block shadow-lg shadow-emerald-500/20">
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

        <div className="glass rounded-[40px] p-12 border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Miksi tietoturva on tärkeää juuri nyt?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-12 italic">
              "Digitaalinen toimintaympäristö muuttuu nopeammin kuin koskaan. Tekoälyn tuomat uudet uhat vaativat uudenlaista osaamista ja valppautta."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-emerald-400 font-bold mb-2">01. Luottamus</div>
                <p className="text-sm text-slate-400">Asiakkaiden ja kumppaneiden luottamus rakentuu tiedon eheyden varaan.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="text-blue-400 font-bold mb-2">02. Jatkuvuus</div>
                <p className="text-sm text-slate-400">Oikeat turvakäytännöt varmistavat liiketoiminnan ja palveluiden häiriöttömyyden.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
