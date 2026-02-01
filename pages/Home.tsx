
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Section } from '../components/Shared';

const Home: React.FC = () => {
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
      title: 'Mobiiliturvallisuus',
      desc: 'Suojaa tärkein työvälineesi. Käytännön ohjeet älypuhelimien tietoturvaan.',
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
            <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
              Esimerkki riskistä: Tietoturva ulkoistetaan ajatuksissa "vain IT-osaston ongelmaksi", jolloin muu organisaatio toimii välinpitämättömästi ja altistuu hyökkäyksille.
            </div>
          </Section>

          <Section 
            title="Näin otat oppaan haltuun"
            importanceTitle="Miksi tämä on tärkeää?"
            importanceDesc="Tietotulva voi uuvuttaa. Järjestelmällinen eteneminen takaa parhaat tulokset organisaatiollesi."
            checklist={[
              "Aloita Kyberperusteista ja varmista MFA-suojaus heti",
              "Käy läpi Yrityksen pika-auditointi tiimin tai johdon kanssa",
              "Ota Arjen rutiinit osaksi viikoittaista tai kuukausittaista toimintaa",
              "Seuraa AI-turvallisuusosiota säännöllisesti uusien uhkien varalta"
            ]}
          >
            Tämä opas on suunniteltu käytännönläheiseksi työkalupakiksi. Suosittelemme etenemään perusasioista kohti syvällisempää AI-ymmärtämistä.
            <div className="mt-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
              Esimerkki riskistä: Yritys lukee oppaan mutta ei vie yhtäkään suositusta käytäntöön, jolloin suojaustaso ei parane lainkaan.
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Home;
