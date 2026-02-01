import React from 'react';
import Seo from '../components/Seo';

const SecurityRoutines: React.FC = () => {
  const cadence = [
    {
      title: "Päivittäin",
      color: "text-emerald-400",
      items: ["Seuraa hälytykset ja poikkeamat", "Tarkista kriittiset palvelut", "Varmista varmuuskopioiden onnistuminen"]
    },
    {
      title: "Viikoittain",
      color: "text-blue-400",
      items: ["Käy läpi haavoittuvuusskannit", "Keskustele havaituista riskeistä tiimin kanssa", "Päivitä pääsynhallintalistat"]
    },
    {
      title: "Kuukausittain",
      color: "text-purple-400",
      items: ["Testaa palautumissuunnitelma", "Päivitä politiikat ja ohjeistukset", "Järjestä tietoturva-kahvitunti"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Seo
        title="Turvarutiinit | Lapland AI Lab"
        description="Turvarutiinit ovat jatkuvaa suojaa: päivittäiset, viikoittaiset ja kuukausittaiset tehtävät sekä harjoitukset."
      />
      <div className="mb-20">
        <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Kurssi 05: Jatkuva Suoja</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">Turvarutiinit</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Kyberturva ei ole projekti vaan rytmi. Kun rutiinit ovat selkeitä, uhkat tunnistetaan ajoissa ja toiminta pysyy hallittuna.
        </p>
      </div>

      <div className="space-y-24">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
            1. Turvakalenteri: rytmitä tekeminen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cadence.map((block) => (
              <div key={block.title} className="glass p-6 rounded-2xl border border-slate-800">
                <h3 className={`text-lg font-bold mb-4 ${block.color}`}>{block.title}</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></span>
            2. Harjoitukset ja häiriötilanteet
          </h2>
          <div className="glass p-10 rounded-[40px] border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Tabletop-harjoitukset</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Käy läpi hyökkäysskenaariot rauhallisesti. Dokumentoi päätökset ja vastuuhenkilöt ennen kuin tilanne on päällä.
                </p>
                <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-400 text-xs font-mono">
                  Suositus: 1 harjoitus / kvartaali
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Incident-päiväkirja</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Yksi paikka kaikille havainnoille: mitä tapahtui, miten reagoitiin ja mitä opittiin.
                </p>
                <div className="bg-purple-500/10 p-4 rounded-xl text-purple-400 text-xs font-mono">
                  Kirjaa 24h sisällä
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-950/20 border border-purple-500/30 p-10 rounded-[40px]">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">Miksi tämä on tärkeää?</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Kun poikkeama tapahtuu, aikaa ei ole hukattavaksi. Selkeä rytmi tekee toiminnasta ennustettavaa ja varmistaa, että kriittiset kontrollit pysyvät aina kunnossa.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Rutiinien tarkistuslista</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Pidä hälytysrajat ja yhteystiedot ajan tasalla",
              "Jaa viikoittainen tilannekuva johdolle",
              "Päivitä käyttöoikeudet roolimuutosten jälkeen",
              "Seuraa kriittisten laitteiden päivitysstatusta",
              "Tee kuukausittainen tietoturvakatselmus",
              "Järjestä henkilöstölle lyhyt turvallisuusvinkki"
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-slate-800 flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-10">
          <a href="#/company-audit" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-xl shadow-purple-500/20">
            Rakenna auditointivalmis rutiini
          </a>
        </section>
      </div>
    </div>
  );
};

export default SecurityRoutines;
