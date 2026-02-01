import React from 'react';
import { SEO, Hero, PageLayout, Section, CTA } from '../components/Shared';

const BusinessAudit: React.FC = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default BusinessAudit;
