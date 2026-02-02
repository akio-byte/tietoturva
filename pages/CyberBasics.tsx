
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero, Section, RiskCard, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const CyberBasics: React.FC = () => {
  const kyberItems = Object.values(contentRegistry).filter(item => item.category === 'kyber');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kyberturvallisuuden perusteet | Lapland AI Lab" 
        description="Opi tietoturvan peruspilarit: CIA-malli, MFA, salasanojen hallinta ja päivitysten merkitys." 
      />
      <Hero 
        title="Kyberturvallisuuden peruspilarit"
        subtitle="Kaikki turvallisuus alkaa kolmesta sanasta: Luottamuksellisuus, Eheys ja Saatavuus. Täältä löydät perussäännöt arkeen."
        label="Digitaalisen turvan kivijalka"
      />

      <div className="space-y-12">
        <div className="glass p-8 rounded-3xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Kybersisällöt</p>
              <h2 className="text-2xl font-black text-white">Kyberin syventävät oppaat</h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {kyberItems.length} sisältöä
            </span>
          </div>
          <div className="grid gap-3">
            {kyberItems.map(item => (
              <Link
                key={item.slug}
                to={`/content/${item.slug}`}
                className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 px-5 py-4 text-sm font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-emerald-500/40 hover:text-emerald-400"
              >
                <span>{item.navLabel}</span>
                <span className="text-[10px] text-slate-500">{item.hero.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <Section 
          title="CIA-malli: Tietoturvan perusmalli"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Se auttaa ymmärtämään, mitä oikeastaan suojaamme ja miksi."
          checklist={[
            "Määrittele tärkein tietosi organisaatiossasi",
            "Tarkista säännöllisesti kuka tietoon pääsee käsiksi",
            "Varmista varmuuskopioilla, ettei tieto muutu vahingossa"
          ]}
          colorClass="bg-emerald-500"
        >
          CIA-malli (Confidentiality, Integrity, Availability) on kansainvälinen standardi tietoturvan suunnitteluun. Se varmistaa, että tieto pysyy salassa, oikeana ja käytettävissä.
        </Section>

        <Section 
          title="Tiedon luokittelu"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kaikkea tietoa ei voi suojata samalla tavalla. Resurssit on kohdistettava kriittisimpään."
          checklist={[
            "Julkinen tieto: Markkinointimateriaalit (ei vaadi salausta)",
            "Sisäinen tieto: Intranet-uutiset (vain henkilöstölle)",
            "Luottamuksellinen: Asiakastiedot ja sopimukset (vaatii vahvan tunnistautumisen)",
            "Salainen: Liikesalaisuudet (vaatii tiukan, rajatun pääsynhallinnan)"
          ]}
          colorClass="bg-indigo-500"
        >
          <p className="mb-4">Tietojen luokittelu auttaa hahmottamaan, missä suurin riski piilee. Älä käytä aikaa lounaslistan salaamiseen, vaan keskitä voimat asiakasrekisteriin.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Työntekijä lähettää salaisen tuotekehityssuunnitelman omaan sähköpostiinsa tehdäkseen töitä kotona, jolloin tieto vuotaa suojaamattomaan ympäristöön.
          </div>
        </Section>

        <Section 
          title="Salasanojen hallinta ja MFA"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Valtaosa murroista alkaa heikoista tunnuksista. MFA on tehokkain yksittäinen suoja hyökkäyksiä vastaan."
          checklist={[
            "Käytä salasanaohjelmaa (Password Manager) kaikissa laitteissa",
            "Luo vähintään 16 merkin salalauseita numeroiden ja merkkien kera",
            "Ota MFA käyttöön kaikissa kriittisissä ja sosiaalisen median palveluissa"
          ]}
          colorClass="bg-blue-500"
        >
          Unohda muistilaput. Nykyaikainen tietoturva vaatii hallittua salasanojen käsittelyä ja monivaiheista tunnistautumista (MFA), joka toimii toisena lukkona ovesi takana.
        </Section>

        <Section 
          title="Ohjelmistopäivitykset ja haavoittuvuudet"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Päivitykset eivät tuo vain uusia ominaisuuksia, vaan ne ovat kriittisiä paikkoja tietoturva-aukoille."
          checklist={[
            "Ota automaattiset päivitykset käyttöön kaikissa käyttöjärjestelmissä",
            "Älä viivytä kriittisiä tietoturvapäivityksiä yli 24 tuntia",
            "Tarkista säännöllisesti reitittimen ja muiden verkkolaitteiden päivitykset",
            "Luovu laitteista, joiden valmistaja on lopettanut päivitystuen"
          ]}
          colorClass="bg-indigo-500"
        >
          <p className="mb-4">Haavoittuvuudet ovat ohjelmistojen virheitä, joita hyökkääjät hyödyntävät päästäkseen käsiksi tietoihisi. Päivitykset tukkivat nämä reiät.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Hyökkääjä käyttää hyväkseen kuukausia vanhaa haavoittuvuutta selaimessa, johon päivitystä ei ole asennettu, ja saa laitteen hallintaansa.
          </div>
        </Section>

        <Section 
          title="Sosiaalinen manipulointi"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Tekniikka on usein vahvempaa kuin ihminen. Hyökkääjät hyödyntävät tunteita, kiirettä ja auktoriteettia."
          checklist={[
            "Tarkista aina lähettäjän todellinen sähköpostiosoite",
            "Älä klikkaa linkkejä suoraan; mene palveluun selaimen kautta",
            "Suhtaudu kriittisesti kiireellisiin pyyntöihin puhelimessa tai viesteissä"
          ]}
          colorClass="bg-purple-500"
        >
          <p className="mb-8">Sosiaalinen manipulointi pyrkii murtamaan suojat hyödyntämällä ihmisen luottamusta tai kiirettä. Kalastelu (Phishing) on tästä yleisin esimerkki.</p>
          <RiskCard 
            title="Kalasteluviesti"
            example="Tilisi on lukittu! Kirjaudu sisään tästä 24h kuluessa tai menetät pääsyn."
            description="Huijari luo keinotekoisen kiireen tunteen, jotta teet virheen ja paljastat tunnuksesi valesivustolla."
          />
        </Section>

        <CTA label="Lataa Kyberperusteet-muistilista (PDF - Tulossa)" />
      </div>
    </div>
  );
};

export default CyberBasics;
