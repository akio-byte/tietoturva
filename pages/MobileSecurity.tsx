
import React from 'react';

const MobileSecurity: React.FC = () => {
  const checklist = [
    "Ota käyttöön etätyhjennys (Find My Device / iCloud)",
    "Päivitä käyttöjärjestelmä heti kun päivitys on saatavilla",
    "Käytä VPN-yhteyttä julkisissa WiFi-verkoissa",
    "Tarkista sovellusten oikeudet (kamera, sijainti, mikrofon)",
    "Älä lataa sovelluksia virallisten kauppojen ulkopuolelta"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-20">
        <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Kurssi 03: Tasku-kyber</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">Mobiiliturva</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Puhelin on portti kaikkeen tietoosi. Pidä se lukittuna ja suojattuna kaikissa tilanteissa.
        </p>
      </div>

      <div className="space-y-24">
        {/* Section 1: Physical Security */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
            1. Fyysinen suojaus ja pääsynhallinta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                Mobiililaite on helppo kadottaa tai varastaa. Vahva pääsykoodi ja biometrinen tunnistus ovat ensimmäinen ja tärkein suojakerros.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-4">Suositellut lukitustavat:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-400">PIN (väh. 6 numeroa)</span>
                    <span className="text-emerald-400 font-bold">Hyvä</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-400">Biometrinen (FaceID/Sormenjälki)</span>
                    <span className="text-emerald-400 font-bold">Suositeltu</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Kuvio-lukitus</span>
                    <span className="text-red-400 font-bold">Vältä</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-[40px] border border-slate-800 text-center">
              <svg className="w-24 h-24 text-purple-500 mx-auto mb-6 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-slate-400 text-sm italic">"Puhelin on tietoturvasi heikoin lenkki, jos se on lukitsematon."</p>
            </div>
          </div>
        </section>

        {/* Section 2: Apps and Permissions */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
            2. Sovellusten hallinta: "Vähemmän on enemmän"
          </h2>
          <div className="glass p-10 rounded-[40px] border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Minimioikeudet</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Tarkista säännöllisesti, mitkä sovellukset käyttävät mikrofoniasi tai sijaintiasi. Monet sovellukset keräävät dataa tarpeettomasti taustalla.
                </p>
                <div className="bg-purple-500/10 p-4 rounded-xl text-purple-400 text-xs font-mono">
                  Asetukset {'>'} Tietosuoja {'>'} Käyttöoikeudet
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Päivitykset</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Mobiilihaavoittuvuuksia löydetään päivittäin. Käyttöjärjestelmäpäivitykset (iOS/Android) sisältävät usein kriittisiä tietoturvakorjauksia.
                </p>
                <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-400 text-xs font-mono">
                  Ota automaattiset päivitykset käyttöön
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why it matters */}
        <section className="bg-purple-950/20 border border-purple-500/30 p-10 rounded-[40px]">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">Miksi tämä on tärkeää?</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nykyaikainen mobiililaite on tehokkaampi kuin kymmenen vuoden takaiset tietokoneet. Se on jatkuvasti yhteydessä verkkoon, se tietää sijaintisi ja sillä on pääsy sähköpostiisi, pankkitiliisi ja sosiaaliseen mediaasi. Mobiiliturva on henkilökohtaisen integriteettisi suojaamista.
          </p>
        </section>

        {/* Practical Checklist */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Käytännön Mobiili-Checklist</h2>
          <div className="glass p-8 rounded-3xl border border-slate-800">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <svg className="w-5 h-5 text-purple-400 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center py-10">
          <a href="/" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-xl shadow-purple-500/20">
            Tarkista mobiililaitteesi turva-asetukset
          </a>
        </section>
      </div>
    </div>
  );
};

export default MobileSecurity;
