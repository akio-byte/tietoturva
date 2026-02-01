import React from 'react';
import Seo from '../components/Seo';

const CompanyAudit: React.FC = () => {
  const evidencePillars = [
    {
      title: "Prosessit",
      desc: "Dokumentoidut käytännöt, vastuunjaot ja hyväksyntäketjut."
    },
    {
      title: "Tekniset kontrollit",
      desc: "Lokitus, pääsynhallinta, varmuuskopiointi ja valvontaratkaisut."
    },
    {
      title: "Ihmiset",
      desc: "Koulutus, roolitus ja jatkuva tietoisuuden ylläpito."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Seo
        title="Yritysauditointi | Lapland AI Lab"
        description="Yritysauditoinnin ja vaatimustenmukaisuuden selkeä malli: valmistautuminen, evidenssit ja jatkuva parantaminen."
      />
      <div className="mb-20">
        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Kurssi 04: Luottamuksen Todiste</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">Yritysauditointi</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Auditointi ei ole vain tarkastus, vaan tapa todentaa toiminnan laatu. Kun näytät, miten suojaat dataa, vahvistat asiakkaiden ja kumppaneiden luottamusta.
        </p>
      </div>

      <div className="space-y-24">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></span>
            1. Auditointivalmius: mitä tarkastaja etsii
          </h2>
          <div className="glass p-8 rounded-3xl border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-6">
              Auditointi keskittyy näyttöön. Tarvitset todennettavat prosessit, tekniset kontrollit sekä henkilöstön ymmärryksen siitä, mitä pitää tehdä ja miksi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evidencePillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
            2. Evidenssikartta: mitä keräät ja miten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
              <h3 className="text-blue-400 font-bold text-xl mb-6">Pakolliset dokumentit</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>- Tietoturvapolitiikka ja roolikuvaukset</li>
                <li>- Riskirekisteri ja päätöspöytäkirjat</li>
                <li>- Incident-raportit ja palautumissuunnitelma</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[32px]">
              <h3 className="text-emerald-400 font-bold text-xl mb-6">Tekniset todisteet</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>- Lokiraportit ja hälytykset</li>
                <li>- Pääsynhallinnan audit-trailit</li>
                <li>- Varmuuskopioiden palautustestit</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-emerald-950/20 border border-emerald-500/30 p-10 rounded-[40px]">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">Miksi tämä on tärkeää?</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Vaatimustenmukaisuus ei synny auditointipäivänä, vaan arjen rutiineissa. Kun evidenssi kertyy jatkuvasti, auditointi muuttuu stressistä vahvistetuksi kilpailueduksi.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Auditoinnin pikachecklist</h2>
          <div className="glass p-8 rounded-3xl border border-slate-800">
            <ul className="space-y-4">
              {[
                "Nimeä auditointivastaava ja tee roolitus näkyväksi",
                "Päivitä riskirekisteri vähintään neljännesvuosittain",
                "Varmista lokien säilytys ja hälytyskynnykset",
                "Testaa palautuminen ja dokumentoi tulokset",
                "Harjoittele auditointipäivän haastattelut etukäteen"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center py-10">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all text-xl shadow-xl shadow-emerald-500/20">
            Varaa auditointivalmennus
          </button>
        </section>
      </div>
    </div>
  );
};

export default CompanyAudit;
