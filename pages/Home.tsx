
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const cards = [
    {
      title: 'AI-turvallisuus',
      desc: 'Puolustusstrategiat tekoälyjärjestelmien suojaamiseen ja vastuulliseen käyttöön.',
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
      desc: 'Kokonaisvaltainen opas digitaaliseen puolustautumiseen ja uhkien torjuntaan.',
      link: '/cyber-basics',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Mobiiliturvallisuus',
      desc: 'Kattava opas älypuhelimien ja tablettien suojaamiseen arjen tilanteissa.',
      link: '/mobile-security',
      color: 'from-purple-400 to-purple-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <Seo
        title="Tietoturvaopas | Lapland AI Lab"
        description="Lapland AI Labin tietoturvaopas yhdistää AI-turvallisuuden, kyberperusteet ja mobiiliturvan yhdeksi selkeäksi oppaaksi."
      />
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Tietoturvan <br/><span className="aurora-text">Uusi Aikakausi</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Lapland AI Labin digitaalinen turvaopas yhdistää pohjoisen kestävyyden ja huippuluokan teknologisen asiantuntemuksen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card) => (
            <Link
              key={card.link}
              to={card.link}
              className="group glass p-8 rounded-3xl hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/50`}>
                <div className="text-white">{card.icon}</div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {card.title}
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">{card.desc}</p>
              <div className="flex items-center text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                Lue aineisto
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="glass rounded-[40px] p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Turvallisuus on yhteinen matka</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-12">
              Maailmassa, jossa tekoäly ja automaatio ovat arkipäivää, tietoturva on luottamuksen peruskivi. 
              Me autamme sinua ymmärtämään uhkakuvia ja rakentamaan kestäviä ratkaisuja.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="text-emerald-400 font-bold mb-2">01. Proaktiivisuus</div>
                <p className="text-sm text-slate-400">Ennakoimme uusia hyökkäysvektoreita ennen kuin ne aktivoituvat.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="text-blue-400 font-bold mb-2">02. Läpinäkyvyys</div>
                <p className="text-sm text-slate-400">AI-järjestelmien toiminnan on oltava tarkastettavissa ja selitettävissä.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
