
import React from 'react';
import { SEO, Hero, Section, RiskCard, CTA } from '../components/Shared';

const CyberBasics: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kyberturvallisuuden perusteet | Lapland AI Lab" 
        description="Opi tietoturvan peruspilarit: CIA-malli, MFA, salasanojen hallinta ja sosiaalisen manipuloinnin tunnistaminen." 
      />
      <Hero 
        title="Kyberturvallisuuden peruspilarit"
        subtitle="Kaikki turvallisuus alkaa kolmesta sanasta: Luottamuksellisuus, Eheys ja Saatavuus. Täältä löydät perussäännöt arkeen."
        label="Digitaalisen turvan kivijalka"
      />

      <div className="space-y-12">
        <Section 
          title="CIA-malli: Tietoturvan perusmalli"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Se auttaa ymmärtämään, mitä oikeastaan suojaamme."
          checklist={[
            "Määrittele tärkein tietosi",
            "Tarkista kuka siihen pääsee",
            "Varmista ettei se muutu vahingossa"
          ]}
          colorClass="bg-emerald-500"
        >
          CIA-malli (Confidentiality, Integrity, Availability) on kansainvälinen standardi tietoturvan suunnitteluun. Se varmistaa, että tieto pysyy salassa, oikeana ja käytettävissä.
        </Section>

        <Section 
          title="Salasanojen hallinta ja MFA"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Valtaosa murroista alkaa heikoista tunnuksista. MFA on tehokkain yksittäinen suoja."
          checklist={[
            "Käytä salasanaohjelmaa (Password Manager)",
            "Luo vähintään 16 merkin salalauseita",
            "Ota MFA käyttöön kaikissa kriittisissä palveluissa"
          ]}
          colorClass="bg-blue-500"
        >
          Unohda muistilaput. Nykyaikainen tietoturva vaatii hallittua salasanojen käsittelyä ja monivaiheista tunnistautumista (MFA), joka toimii toisena lukkona ovesi takana.
        </Section>

        <Section 
          title="Sosiaalinen manipulointi"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Tekniikka on usein vahvempaa kuin ihminen. Hyökkääjät hyödyntävät tunteita ja kiirettä."
          checklist={[
            "Tarkista aina lähettäjän todellinen sähköpostiosoite",
            "Älä klikkaa linkkejä suoraan; mene palveluun selaimen kautta",
            "Suhtaudu kriittisesti kiireellisiin pyyntöihin puhelimessa tai viesteissä"
          ]}
          colorClass="bg-purple-500"
        >
          <p className="mb-8">Sosiaalinen manipulointi pyrkii murtamaan suojat hyödyntämällä ihmisen luottamusta, kiirettä tai auktoriteettia. Kalastelu (Phishing) on tästä yleisin esimerkki.</p>
          <RiskCard 
            title="Kalasteluviesti"
            example="Tilisi on lukittu! Kirjaudu sisään tästä 24h kuluessa tai menetät pääsyn."
            description="Huijari luo keinotekoisen kiireen tunteen, jotta teet virheen ja paljastat tunnuksesi valesivustolla."
          />
        </Section>

        <CTA label="PDF-opas tulossa" disabled />
      </div>
    </div>
  );
};

export default CyberBasics;
