import React from 'react';
import { SEO, Hero, PageLayout, Section, CTA } from '../components/Shared';

const Routines: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Tietoturvan tarkistuslistat | Lapland AI Lab" 
        description="Viikoittaiset, kuukausittaiset ja vuosittaiset rutiinit digitaaliseen turvaan." 
      />
      <Hero 
        title="Turvallisuuden arjen rutiinit"
        subtitle="Tietoturva ei ole projekti, se on jatkuva tapa. Tässä ovat listat, joilla pidät huolen, ettei unohduksia tapahdu."
        label="Viikko- ja kuukausitason tarkistuslistat"
      />

      <div className="space-y-12">
        <Section 
          title="Maanantai-check (Viikoittainen)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Pienet rutiinit estävät suuret katastrofit."
          checklist={[
            "Tarkista onko laitteissa odottavia päivityksiä",
            "Käy läpi sähköpostin roskapostikansio (varoitusmerkit)",
            "Varmista että varmuuskopiointi on rullannut"
          ]}
        >
          Viikon startti on paras aika varmistaa, että perustekniikka on kunnossa ja valvonta aktiivista.
        </Section>

        <Section 
          title="Kuukauden huolto (Kuukausittainen)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Ajan myötä järjestelmiin kertyy turhaa painolastia."
          checklist={[
            "Poista turhat tiedostot ja sovellukset",
            "Tarkista jaetut tiedostolinkit",
            "Vaihda kriittiset salasanat tarvittaessa"
          ]}
          colorClass="bg-blue-500"
        >
          Syvempi katsaus kerran kuussa varmistaa, että pääsynhallinta on ajan tasalla ja turhat riskit poistettu.
        </Section>

        <Section 
          title="Vuosittainen suursiivous"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Vuodessa uhat ja tarpeet muuttuvat."
          checklist={[
            "Päivitä organisaation tietoturvaohjeistus",
            "Vaihda fyysiset lukot tai kulkukortit tarvittaessa",
            "Uusi tietoturvakoulutus koko tiimille"
          ]}
          colorClass="bg-purple-500"
        >
          Strategisella tasolla on katsottava eteenpäin kerran vuodessa. Onko organisaatiosi valmis kohtaamaan uudet haasteet?
        </Section>

        <CTA label="Tilaa rutiinimuistutus sähköpostiin" />
      </div>
    </PageLayout>
  );
};

export default Routines;
