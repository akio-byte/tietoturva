
import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const Routines: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietoturvan tarkistuslistat | Lapland AI Lab" 
        description="Viikoittaiset, kuukausittaiset ja vuosittaiset rutiinit sekä poikkeustilanneharjoittelu." 
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
          importanceDesc="Pienet rutiinit estävät suuret katastrofit ennen kuin ne ehtivät alkaa."
          checklist={[
            "Tarkista onko laitteissa odottavia käyttöjärjestelmäpäivityksiä",
            "Käy läpi sähköpostin roskapostikansio (tunnista uudet huijaukset)",
            "Varmista että kriittinen varmuuskopiointi on rullannut onnistuneesti"
          ]}
        >
          Viikon startti on paras aika varmistaa, että perustekniikka on kunnossa ja valvonta aktiivista uuden viikon haasteita varten.
        </Section>

        <Section 
          title="Kuukauden huolto (Kuukausittainen)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Ajan myötä järjestelmiin kertyy turhaa painolastia ja vanhentuneita oikeuksia."
          checklist={[
            "Poista turhat tiedostot ja käyttämättömät sovellukset",
            "Tarkista jaetut tiedostolinkit (ovatko vielä tarpeellisia?)",
            "Vaihda kriittiset salasanat tai tarkista salasanaohjelman terveys"
          ]}
          colorClass="bg-blue-500"
        >
          Syvempi katsaus kerran kuussa varmistaa, että pääsynhallinta on ajan tasalla ja turhat riskit on siivottu pois.
        </Section>

        <Section 
          title="Matkustajan muistilista (Tarvittaessa)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Tietoturvariski moninkertaistuu toimiston ulkopuolella. Varkaudet ja vakoilu ovat yleisiä matkalla."
          checklist={[
            "Ota mukaan vain välttämättömät laitteet (Clean Travel)",
            "Varmuuskopioi kaikki tiedot ennen lähtöä ja jätä kopio kotiin",
            "Käytä tietosuojakalvoa (Privacy Screen) kannettavassa ja puhelimessa",
            "Älä koskaan jätä laitteita vartioimatta hotellihuoneeseen tai autoon"
          ]}
          colorClass="bg-indigo-500"
        >
          <p className="mb-4">Työmatka on hyökkääjälle otollinen hetki. Väsynyt matkustaja tekee virheitä, ja laitteet ovat alttiina varkauksille.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Kilpailija tai vakooja kuvaa kannettavan näytön lentokoneessa tai junassa, saaden haltuunsa luottamuksellista strategiamateriaalia.
          </div>
        </Section>

        <Section 
          title="Poikkeustilanneharjoitus (Incident Response)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Paniikki on pahin vihollinen hyökkäyksen sattuessa. Harjoittelu luo selkäydinmuistin."
          checklist={[
            "Järjestä simuloitu kalasteluhyökkäys organisaatiollesi",
            "Suorita varmuuskopioiden palautuskoe täysin tyhjään laitteeseen",
            "Päivitä kriittisten henkilöiden yhteystietolista (myös offline)",
            "Käy läpi opit ja päivitä toimintaohjeet havaintojen perusteella"
          ]}
          colorClass="bg-emerald-500"
        >
          <p className="mb-4">Tiedätkö mitä tehdä, jos yrityksesi tiedostot lukitaan tänään? Harjoittele vastausta ennen kuin se on välttämätöntä.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Yritys palauttaa varmuuskopion vasta hyökkäyksen jälkeen, mutta huomaa vasta silloin, että kopio on korruptoitunut kuukausia sitten.
          </div>
        </Section>

        <Section 
          title="Vuosittainen suursiivous"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Vuodessa uhat, työntekijät ja liiketoiminnan tarpeet muuttuvat."
          checklist={[
            "Päivitä organisaation koko tietoturvaohjeistus vastaamaan nykyhetkeä",
            "Vaihda fyysiset lukot tai päivitä kulkukorttien oikeudet",
            "Järjestä uusi tietoturvakoulutus koko tiimille uusista AI-uhista"
          ]}
          colorClass="bg-purple-500"
        >
          Strategisella tasolla on katsottava eteenpäin kerran vuodessa. Onko organisaatiosi valmis kohtaamaan tulevan vuoden uudet haasteet?
        </Section>

        {/* TODO: Tilaa muistutus -ominaisuus lisätään myöhemmässä julkaisussa. */}
        <CTA label="Tilaa muistutus (Tulossa)" />
      </div>
    </div>
  );
};

export default Routines;
