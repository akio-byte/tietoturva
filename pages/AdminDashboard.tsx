import React from 'react';
import { SEO, Hero, Section } from '../components/Shared';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="/admin — Secure Context | Lapland AI Lab"
        description="Kriittinen hallintapaneeli Lapland AI Labin tietoarkkitehtuurissa. Secure Context -vaatimus on aina voimassa."
      />

      <div className="mb-10 glass border border-red-500/40 bg-red-500/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-red-300 font-bold">Tila: Kriittinen</p>
          <h2 className="text-2xl md:text-3xl font-black text-red-100 mt-2">/admin on merkitty kriittiseksi kohteeksi</h2>
          <p className="text-sm text-red-200/80 mt-2">
            Hallintaliittymä toimii vain Secure Context -vaatimuksen alaisena. Vahvista ympäristö ennen käyttöä.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-red-500/20 border border-red-400/40 text-red-100 px-4 py-3 rounded-2xl">
          <span className="inline-flex h-3 w-3 rounded-full bg-red-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest">Secure Context Required</span>
        </div>
      </div>

      <Hero
        title="Admin Secure Context"
        subtitle="Hallintapaneeli on lukittu kriittiseen tilaan. Kaikki muutokset auditoidaan Johtavan arkkitehdin v3.0 -raportin sanomuotojen mukaisesti."
        label="Kriittinen käyttöliittymä"
      />

      <div className="space-y-16">
        <Section title="Pääsynhallinta" colorClass="bg-amber-500">
          Varmista, että kaikki järjestelmänvalvojat käyttävät vahvaa MFA:ta ja että oikeudet
          on sidottu roolipohjaiseen malliin. Jokainen pääsynhallinnan muutos kirjautuu valvontaan
          ja vaatii hyväksynnän kahdelta eri kontrollitasolta.
        </Section>

        <Section title="Loki" colorClass="bg-red-500">
          Kriittiset lokit on lukittu immutable-tilaan. Reaaliaikainen poikkeamahälytys aktivoituu,
          jos lokien eheys rikkoutuu tai jos hallintapyyntö tehdään ilman Secure Context -todennusta.
        </Section>

        <Section title="Minimalismi" colorClass="bg-amber-500">
          Hallintanäkymä näyttää vain välttämättömät hallintatoiminnot. Kaikki ylimääräiset valikot
          on piilotettu, jotta kognitiivinen kuorma pysyy matalana ja riskialttiit toiminnallisuudet
          ovat selkeästi erotettuna.
        </Section>

        <Section title="Suvereniteetti" colorClass="bg-red-500">
          Datan sijainti ja käsittely on sidottu Suomen ja EU:n alueelle. Palvelut ovat eriytetty
          ja tietovirrat vahvistetaan allekirjoitetuilla auditointipisteillä ennen siirtoa.
        </Section>

        <div className="glass border border-amber-500/40 bg-amber-500/10 rounded-3xl p-8">
          <h3 className="text-lg font-black text-amber-200 uppercase tracking-[0.2em]">
            Kriittinen havainto
          </h3>
          <p className="text-sm text-amber-100/80 mt-2 max-w-3xl">
            Johtavan arkkitehdin auditointiraportti (v3.0) tunnistaa järjestelmästä yhden
            korkeimman prioriteetin poikkeaman: hallintaliittymän käyttö ilman todistettua
            Secure Context -ympäristöä.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Hälytyslähde',
                value: 'Auditointipisteraportti v3.0 — JSON-lohko: AdminSecureContext',
              },
              {
                title: 'Vaikutus',
                value: 'Korkea — kriittinen käyttöliittymä altistuu väärinkäytöille.',
              },
              {
                title: 'Suositus',
                value: 'Pakota Secure Context -tunnistus ennen istunnon aktivointia.',
              },
              {
                title: 'Aikajana',
                value: '48h korjausikkuna ennen automaattista hälytyseskalaatiota.',
              },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-amber-500/30 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-widest text-amber-200 font-bold">{item.title}</p>
                <p className="text-sm text-amber-50 mt-2">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
