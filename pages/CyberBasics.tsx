
import React from 'react';

const CyberBasics: React.FC = () => {
  const steps = [
    { title: "Vahvat salasanat", desc: "Käytä vähintään 16 merkin salalauseita ja hallitse niitä muistiohjelmalla." },
    { title: "MFA on pakollinen", desc: "Ota monivaiheinen tunnistautuminen käyttöön kaikissa palveluissa." },
    { title: "3-2-1 Varmuuskopiointi", desc: "3 kopiota, 2 mediaa, 1 fyysisesti eri paikassa." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-20">
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Kurssi 02: Perusta Kuntoon</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">Kyberturvallisuuden perusteet</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Tietoturva ei ole pelkkää tekniikkaa – se on asennetta, prosesseja ja jatkuvaa valppautta.
        </p>
      </div>

      <div className="space-y-24">
        {/* CIA Triad Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">CIA-malli: Turvallisuuden pyramidi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl text-center border-t-4 border-emerald-500 border border-slate-800">
              <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Luottamuksellisuus</h4>
              <p className="text-sm text-slate-400">Tieto on vain niiden saatavilla, joilla on siihen nimenomainen oikeus.</p>
            </div>
            <div className="glass p-8 rounded-3xl text-center border-t-4 border-blue-500 border border-slate-800">
              <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Eheys</h4>
              <p className="text-sm text-slate-400">Tieto säilyy muuttumattomana ja luotettavana koko elinkaarensa ajan.</p>
            </div>
            <div className="glass p-8 rounded-3xl text-center border-t-4 border-purple-500 border border-slate-800">
              <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">Saatavuus</h4>
              <p className="text-sm text-slate-400">Järjestelmät ja tiedot ovat käytettävissä aina kun niitä tarvitaan.</p>
            </div>
          </div>
        </section>

        {/* Threats */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Tämän päivän uhkakuvat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px] hover:border-red-500/30 transition-colors">
              <h3 className="text-red-400 font-bold text-xl mb-6">Sosiaalinen manipulointi</h3>
              <p className="text-slate-400 mb-6">Ihminen on usein ketjun heikoin lenkki. Hyökkääjät hyödyntävät kiirettä, auktoriteettia tai uteliaisuutta.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-slate-300 text-sm italic">
                  <span>- Kalasteluviestit (Phishing)</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-300 text-sm italic">
                  <span>- Puheluhuijaukset (Vishing)</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px] hover:border-blue-500/30 transition-colors">
              <h3 className="text-blue-400 font-bold text-xl mb-6">Tekniset hyökkäykset</h3>
              <p className="text-slate-400 mb-6">Automaattiset työkalut etsivät jatkuvasti päivittämättömiä laitteita ja avoimia portteja.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-slate-300 text-sm italic">
                  <span>- Kiristysohjelmat (Ransomware)</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-300 text-sm italic">
                  <span>- Palvelunestohyökkäykset (DDoS)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="bg-blue-950/20 border border-blue-500/30 p-10 rounded-[40px]">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Miksi tämä on tärkeää?</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Digitaalinen turvallisuus on liiketoiminnan jatkuvuuden edellytys. Yksi ainoa onnistunut kalasteluviesti voi pysäyttää koko organisaation toiminnan viikoiksi ja aiheuttaa korvaamattomia mainehaittoja.
          </p>
        </section>

        {/* Defense Checklist */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Pohjoinen Puolustuslinja - Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-slate-800">
                <h4 className="text-emerald-400 font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-10">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-full transition-all text-xl shadow-xl shadow-blue-500/20">
            Lataa täysi kyberturvaopas (PDF)
          </button>
        </section>
      </div>
    </div>
  );
};

export default CyberBasics;
