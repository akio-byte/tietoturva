import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const BusinessAudit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietoturva-auditointi pk-yritykselle | Lapland AI Lab" 
        description="10 minuutin itsearviointi yrityksen tietoturvasta: ihminen, laitteet, varmuuskopiot ja hankinnat." 
      />
      <Hero 
        title="Pika-auditointi pk-yrityksille"
        subtitle="10 kysymystä, jotka paljastavat organisaatiosi tietoturvan suurimmat aukot. Ei teknistä jargon-höttöä, vain faktoja."
        label="5–10 min itsearvio pk-yrityksille"
      />

      <div className="space-y-12">
        <Section 
          title="Ihminen ja prosessit"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Tekniikka ei auta, jos työntekijä klikkaa haitallista linkkiä huomaamattaan."
          checklist={[
            "Järjestä säännölliset kalastelutreenit koko henkilöstölle",
            "Luo selkeä ja tunnettu ohje tietoturvaloukkauksille",
            "Määrittele vastuuhenkilö tietoturva-asioille organisaatiossa"
          ]}
        >
          Tietoturvakulttuuri alkaa johdosta. Jos työntekijät eivät tiedä, miten toimia epäilyttävissä tilanteissa, koko organisaatio on suuressa vaarassa.
        </Section>

        <Section 
          title="Laitteet ja ohjelmistot"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Hyökkääjät etsivät tunnettuja aukkoja vanhoista versioista ja hallitsemattomista laitteista."
          checklist={[
            "Ota automaattiset päivitykset käyttöön keskitetysti",
            "Pidä ajan tasalla olevaa listaa kaikista yrityksen laitteista",
            "Poista välittömästi vanhentuneet työntekijätunnukset poistumisprosessissa"
          ]}
          colorClass="bg-blue-500"
        >
          Ovatko yrityksesi laitteet ja sovellukset ajan tasalla? Hallitsematon laitekanta (BYOD ilman valvontaa) on suuri tietoturvariski.
        </Section>

        <Section 
          title="Hankinnat ja kolmannet osapuolet"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Yrityksen turva on vain niin vahva kuin sen heikoin alihankkija tai kumppani."
          checklist={[
            "Lisää tietoturvaliite kaikkiin uusiin kumppanisopimuksiin",
            "Määrittele kumppaneiden pääsynhallinta (least privilege -periaate)",
            "Tarkista pilvipalveluiden turva-asetukset säännöllisesti",
            "Arvioi toimitusketjun riskit kriittisille palveluille"
          ]}
          colorClass="bg-indigo-500"
        >
          <p className="mb-4">Nykyaikainen yritys nojaa kymmeniin ulkopuolisiin palveluihin. Varmista, että kumppanisi noudattavat samoja turvastandardeja kuin sinä.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Alihankkijan varastettu tunnus antaa hyökkääjälle pääsyn suoraan yrityksesi sisäverkkoon tai asiakasdataan.
          </div>
        </Section>

        <Section 
          title="Varmuuskopiot"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kiristysohjelman iskiessä vain toimiva varmuuskopio pelastaa yrityksen toiminnot."
          checklist={[
            "Käytä 3-2-1 sääntöä (3 kopiota, 2 eri mediaa, 1 offsite/pilvi)",
            "Testaa varmuuskopioiden palautus käytännössä kerran vuodessa",
            "Eristä varmuuskopiot muusta verkosta, jos mahdollista"
          ]}
          colorClass="bg-purple-500"
        >
          Varmuuskopiointi on yrityksen viimeinen pelastusrengas. Jos tieto häviää tai se lukitaan, pystytkö jatkamaan liiketoimintaa ilman lunnaita?
        </Section>

        <CTA label="Tee itsearviointi (Kyselytulokset - Tulossa)" />
      </div>
    </div>
  );
}; export default BusinessAudit;