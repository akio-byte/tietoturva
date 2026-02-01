import React from 'react';
import CTA from '../components/CTA';
import PageLayout from '../components/PageLayout';
import RiskCards from '../components/RiskCards';
import Section from '../components/Section';
import Seo from '../components/Seo';

const BusinessAudit: React.FC = () => {
  return (
    <PageLayout>
      <Seo
        title="Pika-auditointi | Lapland AI Lab"
        description="Pika-auditointi auttaa tunnistamaan yrityksen suurimmat tietoturvariskit ja priorisoimaan korjaavat toimet."
      />

      <div className="mb-16">
        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Yrityksen tilannekuva</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">Pika-auditointi</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Tiivis ja käytännönläheinen katsaus organisaation kriittisiin tietoturvapintoihin. Tarkoitus on löytää
          nopeimmat parannuskohteet, jotka nostavat suojaustasoa heti.
        </p>
      </div>

      <Section
        title="Nykytilan kartoitus"
        description="Ensimmäinen vaihe on selkeä näkymä siihen, missä data liikkuu ja ketkä siihen pääsevät."
        importance="Ilman ajantasaista tilannekuvaa korjaukset kohdistuvat väärin ja riskit jäävät piiloon."
        checklist={[
          'Listaa kriittiset järjestelmät ja palveluntarjoajat.',
          'Tunnista pääkäyttäjät ja ulkoiset kumppanit.',
          'Dokumentoi, missä arkaluonteinen data sijaitsee.'
        ]}
      />

      <Section
        title="Ihmisten toimintamallit"
        description="Teknologia ei yksinään riitä. Arjen prosessit ja rutiinit määrittävät todellisen turvallisuustason."
        importance="Suurin osa tietoturvapoikkeamista alkaa inhimillisestä virheestä tai ohjeiden epäselvyydestä."
        checklist={[
          'Varmista, että MFA on käytössä kaikissa kriittisissä palveluissa.',
          'Tarkista perehdytysmateriaalien ajantasaisuus.',
          'Sovi selkeä ilmoituskanava poikkeamille.'
        ]}
      />

      <Section
        title="Nopeat tekniset parannukset"
        description="Auditoinnin aikana sovitaan konkreettiset korjaukset, jotka voidaan toteuttaa viikossa."
        importance="Pienetkin tekniset muutokset, kuten lokien valvonta tai varmuuskopioinnin varmistus, vähentävät riskiä heti."
        checklist={[
          'Ota käyttöön automaattinen varmuuskopiointi.',
          'Rajaa ylläpitäjien oikeudet minimitasolle.',
          'Aktivoi hälytykset epäilyttävistä kirjautumisista.'
        ]}
      />

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Riskit, jotka löytyvät usein</h2>
        <RiskCards
          items={[
            {
              title: 'Unohtuneet käyttäjätilit',
              description:
                'Vanhojen työntekijöiden tunnukset jäävät aktiivisiksi, mikä kasvattaa sisäistä uhkaa ja altistaa tilien kaappauksille.'
            },
            {
              title: 'Varjo-IT ja hallitsemattomat työkalut',
              description:
                'Tiimit käyttävät työkaluja, joita ei ole arvioitu turvallisuuden näkökulmasta tai joita ei monitoroida.'
            }
          ]}
        />
      </div>

      <CTA
        title="Valmis ottamaan seuraavan askeleen?"
        subtitle="Lapland AI Lab"
        description="Käynnistä pika-auditointi ja saat selkeän toimenpidelistan, jonka avulla organisaation turvataso nousee nopeasti."
        buttonLabel="Siirry arjen rutiineihin"
        buttonHref="/routines"
      />
    </PageLayout>

import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const BusinessAudit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietoturva-auditointi pk-yritykselle | Lapland AI Lab" 
        description="10 minuutin itsearviointi yrityksen tietoturvasta: ihminen, laitteet ja varmuuskopiot." 
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
          importanceDesc="Tekniikka ei auta, jos työntekijä klikkaa haitallista linkkiä."
          checklist={[
            "Järjestä säännölliset kalastelutreenit",
            "Luo selkeä ohje tietoturvaloukkauksille",
            "Määrittele vastuuhenkilö tietoturva-asioille"
          ]}
        >
          Tietoturvakulttuuri alkaa johdosta. Jos työntekijät eivät tiedä, miten toimia epäilyttävissä tilanteissa, koko organisaatio on vaarassa.
        </Section>

        <Section 
          title="Laitteet ja ohjelmistot"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Hyökkääjät etsivät tunnettuja aukkoja vanhoista versioista."
          checklist={[
            "Ota automaattiset päivitykset käyttöön",
            "Listaa kaikki yrityksen käytössä olevat laitteet",
            "Poista välittömästi vanhentuneet työntekijätunnukset"
          ]}
          colorClass="bg-blue-500"
        >
          Ovatko yrityksesi laitteet ja sovellukset ajan tasalla? Hallitsematon laitekanta on suuri tietoturvariski.
        </Section>

        <Section 
          title="Varmuuskopiot"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kiristysohjelman iskiessä vain varmuuskopio pelastaa."
          checklist={[
            "Käytä 3-2-1 sääntöä (3 kopiota, 2 mediaa, 1 offsite)",
            "Testaa varmuuskopioiden palautus kerran vuodessa",
            "Eristä varmuuskopiot muusta verkosta (air-gap)"
          ]}
          colorClass="bg-purple-500"
        >
          Varmuuskopiointi on yrityksen viimeinen pelastusrengas. Jos tieto häviää tai se lukitaan, pystytkö jatkamaan liiketoimintaa?
        </Section>

        <CTA label="Tee itsearviointi ja saa tulokset" />
      </div>
    </div>
  );
};

export default BusinessAudit;
