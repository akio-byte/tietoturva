
import React from 'react';
import { SEO, Hero, Section, RiskCard, CTA } from '../components/Shared';

const SocialEngineering: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Sosiaalinen manipulointi ja phishing | Lapland AI Lab" 
        description="Opi tunnistamaan kalasteluviestit, puheluhuijaukset ja sosiaalisen manipuloinnin tekniikat." 
      />
      <Hero 
        title="Sosiaalinen manipulointi"
        subtitle="Tekniikka on usein vahvempaa kuin ihminen. Hyökkääjät tietävät tämän ja pyrkivät murtamaan suojat tunteiden, kiireen ja auktoriteetin kautta."
        label="Ihmisen heikkouksien hyödyntäminen"
      />

      <div className="space-y-12">
        <Section 
          title="Kalastelu (Phishing) ja valeviestit"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kalastelu on edelleen yleisin reitti suuriin tietomurtoihin ja kiristysohjelmiin."
          checklist={[
            "Tarkista aina lähettäjän todellinen sähköpostiosoite",
            "Älä klikkaa linkkejä suoraan; mene palveluun selaimen kautta",
            "Älä avaa odottamattomia tiedostoliitteitä",
            "Ilmoita epäilyttävistä viesteistä IT-tuelle"
          ]}
        >
          <p className="mb-8">Kalasteluviestit näyttävät tulevan tutulta taholta, kuten pankilta, esimieheltä tai tunnetulta palvelulta. Ne pyrkivät saamaan sinut kirjautumaan valesivustolle.</p>
          <RiskCard 
            title="Sähköpostikalastelu"
            example="Tilisi on lukittu! Kirjaudu sisään tästä vahvistaaksesi tietosi 24h kuluessa."
            description="Hyökkääjä luo kiireen tunteen saadakseen sinut toimimaan harkitsemattomasti ja paljastamaan tunnuksesi."
          />
        </Section>

        <Section 
          title="Puheluhuijaukset (Vishing) ja kiire"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Puhelu luo painetta ja auktoriteetin tuntua, jolloin ihminen tekee virheitä helpommin."
          checklist={[
            "Muista: Pankki tai poliisi ei koskaan pyydä salasanoja puhelimessa",
            "Jos epäilet soittajaa, katkaise puhelu heti",
            "Soita itse takaisin viralliseen asiakaspalvelunumeroon",
            "Älä asenna puhelun aikana pyydettyjä etähallintaohjelmia"
          ]}
          colorClass="bg-blue-500"
        >
          Huijari soittaa ja esiintyy pankin työntekijänä, IT-tukena tai viranomaisena. He voivat käyttää teknologiaa, joka saa soittajan numeron näyttämään aidolta (spoofing).
        </Section>

        <Section 
          title="Somesta kerätty tieto (OSINT)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Huijarit rakentavat luottamusta ja uskottavuutta julkisilla tiedoillasi."
          checklist={[
            "Rajoita sosiaalisen median profiiliesi näkyvyyttä",
            "Älä jaa kuvia kulkukorteista tai työpisteeltäsi",
            "Ole varovainen 'kaveripyyntöjen' kanssa tuntemattomilta",
            "Älä jaa työhön liittyvää arkaluonteista tietoa julkisesti"
          ]}
          colorClass="bg-purple-500"
        >
          Sosiaalinen media on aarrearkku hyökkääjille. He voivat käyttää tietoja harrastuksistasi, työtehtävistäsi tai lomistasi rakentaakseen erittäin vakuuttavia, kohdennettuja huijauksia.
        </Section>

        <CTA label="Tarkista omat rutiinisi" link="#/routines" />
      </div>
    </div>
  );
};

export default SocialEngineering;
