
import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const CyberBasics: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Seo
        title="Kyberperusteet | Lapland AI Lab"
        description="Kokonaisvaltainen opas CIA-malliin, hyökkäysvektoreihin ja pohjoisiin kyberturvan käytäntöihin."
      />
      <div className="mb-20">
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Perusteet & Puolustus</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6 text-balance">Kyberperusteet</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Kokonaisvaltainen lähestymistapa digitaalisten järjestelmien ja tiedon eheyden turvaamiseen.
        </p>
      </div>
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

      <section className="bg-black border border-slate-800 p-12 rounded-[40px] text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Pohjoinen Puolustuslinja</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-slate-400 text-lg">
          <p>
            Käytä vähintään 12 merkin salasanoja. Ota käyttöön monivaiheinen tunnistautuminen (MFA). 
            Noudata 3-2-1 varmuuskopiointisääntöä.
          </p>
          <div className="pt-6">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center bg-white/70 text-black/60 font-bold px-10 py-4 rounded-full cursor-not-allowed"
              aria-disabled="true"
            >
              PDF-opas tulossa
            </button>
          </div>
        </div>
      </section>
        <CTA label="Lataa Kyberperusteet-muistilista (PDF)" />
      </div>
    </div>
  );
};

export default CyberBasics;
