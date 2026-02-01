
import React from 'react';
import Seo from '../components/Seo';

const CyberBasics: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Seo
        title="Kyberperusteet | Lapland AI Lab"
        description="Kokonaisvaltainen opas CIA-malliin, hyökkäysvektoreihin ja pohjoisiin kyberturvan käytäntöihin."
      />
      <div className="mb-20">
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Perusteet & Puolustus</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 text-balance">Kyberperusteet</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Kokonaisvaltainen lähestymistapa digitaalisten järjestelmien ja tiedon eheyden turvaamiseen.
        </p>
      </div>

      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">CIA-malli: Turvallisuuden pyramidi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl text-center border-t-4 border-emerald-500">
            <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3">Luottamuksellisuus</h4>
            <p className="text-sm text-slate-400">Vain ne henkilöt, joilla on oikeus, pääsevät käsiksi tietoon.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center border-t-4 border-blue-500">
            <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3">Eheys</h4>
            <p className="text-sm text-slate-400">Tiedot pysyvät oikeina ja muuttumattomina koko elinkaaren ajan.</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center border-t-4 border-purple-500">
            <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-white mb-3">Saatavuus</h4>
            <p className="text-sm text-slate-400">Järjestelmät ovat valtuutettujen käytettävissä aina tarvittaessa.</p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-10">Hyökkäysvektorit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
            <h3 className="text-red-400 font-bold text-lg mb-6">Sosiaalinen manipulointi</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                <span>Phishing: Kalasteluviestit</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                <span>Baiting: Houkuttelu (esim. USB-tikut)</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
            <h3 className="text-blue-400 font-bold text-lg mb-6">Tekniset uhat</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Ransomware: Kiristysohjelmat</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Zero-day: Tuntemattomat haavoittuvuudet</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black border border-slate-800 p-12 rounded-[40px] text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Pohjoinen Puolustuslinja</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-slate-400 text-lg">
          <p>
            Käytä vähintään 12 merkin salasanoja. Ota käyttöön monivaiheinen tunnistautuminen (MFA). 
            Noudata 3-2-1 varmuuskopiointisääntöä.
          </p>
          <div className="pt-6">
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-emerald-400 transition-colors">
              Lataa PDF-opas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberBasics;
