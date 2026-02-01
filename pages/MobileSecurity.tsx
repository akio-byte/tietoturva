
import React from 'react';

const MobileSecurity: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-20">
        <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Liikkuva Turvallisuus</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">Mobiiliturva</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Kattava suoja älypuhelimille ja tableteille – laitteista, jotka kulkevat aina mukanasi.
        </p>
      </div>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Kriittiset riskit</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Mobiililaitteet ovat usein heikoimmin suojattuja, vaikka ne sisältävät valtavasti 
              henkilökohtaista ja työhön liittyvää arkaluonteista tietoa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-200 font-medium">Laitteen fyysinen katoaminen</span>
              </div>
              <div className="flex items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M12 10h.01" />
                  </svg>
                </div>
                <span className="text-slate-200 font-medium">Turvattomat WiFi-verkot</span>
              </div>
            </div>
          </div>
          <div className="glass p-1 rounded-[40px]">
            <div className="bg-slate-900 rounded-[38px] p-10">
              <h3 className="text-xl font-bold text-white mb-8">Pääsynhallinta</h3>
              <div className="space-y-6 text-sm">
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">PIN (6+ merkkiä)</span>
                  <span className="text-emerald-400 font-bold">Suositeltu</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Biometrinen tunnistus</span>
                  <span className="text-emerald-400 font-bold">Hyväksytty</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Kuvio-lukitus</span>
                  <span className="text-red-400 font-bold">Heikko</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-10">Sovellusten minimioikeudet</h2>
        <div className="bg-slate-950 border border-slate-800 p-10 rounded-[40px]">
          <p className="text-slate-400 mb-8 leading-relaxed">
            Lataa sovelluksia vain virallisista kaupoista (Google Play, Apple App Store). 
            Tarkista oikeudet: tarvitseeko laskin todella pääsyn yhteystietoihisi tai sijaintiisi?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-3">Päivitykset</h4>
              <p className="text-sm text-slate-400">Pidä käyttöjärjestelmä ja sovellukset aina ajan tasalla automaattisesti.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-3">VPN</h4>
              <p className="text-sm text-slate-400">Käytä aina VPN-yhteyttä, kun olet julkisessa tai avoimessa verkossa.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-purple-600 p-1 rounded-[40px]">
        <div className="bg-slate-950 rounded-[38px] p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Valmiina turvaamaan laitteesi?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto italic">
            "Mobiiliturva ei ole staattinen tila, vaan jatkuva prosessi. Lapland AI Lab auttaa pitämään yhteytesi suojattuna."
          </p>
          <a href="/" className="inline-block bg-purple-600 text-white font-bold px-12 py-4 rounded-full hover:bg-purple-500 transition-all">
            Takaisin aloitukseen
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSecurity;
