
import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const CyberBasics: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kyberturvallisuuden perusteet | Lapland AI Lab" 
        description="Opi tietoturvan peruspilarit: CIA-malli, MFA ja salasanojen hallinta Lapland AI Labin oppaassa." 
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
          title="Salasanojen hallinta"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Valtaosa murroista alkaa heikoista tunnuksista."
          checklist={[
            "Käytä salasanaohjelmaa (Password Manager)",
            "Luo vähintään 16 merkin salalauseita",
            "Älä koskaan käytä samaa salasanaa kahdesti"
          ]}
          colorClass="bg-blue-500"
        >
          Unohda muistilaput ja helposti arvattavat salasanat. Nykyaikainen tietoturva vaatii hallittua ja automatisoitua salasanojen käsittelyä.
        </Section>

        <Section 
          title="Monivaiheinen tunnistautuminen (MFA)"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Vaikka salasana vuotaisi, hyökkääjä ei pääse sisään ilman puhelintasi."
          checklist={[
            "Ota MFA käyttöön sähköpostissa",
            "Aktivoi MFA sosiaalisen median tileillä",
            "Varmista MFA-suojaus kaikissa pankki- ja yrityspalveluissa"
          ]}
          colorClass="bg-purple-500"
        >
          Toinen lukko oveen. Monivaiheinen tunnistautuminen on tehokkain yksittäinen tapa estää luvaton pääsy tileillesi.
        </Section>

        <CTA label="Lataa Kyberperusteet-muistilista (PDF)" />
      </div>
    </div>
  );
};

export default CyberBasics;
