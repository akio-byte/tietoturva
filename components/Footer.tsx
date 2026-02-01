
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 mt-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-6">Lapland <span className="aurora-text">AI Lab</span></h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Edistämme vastuullista tekoälyä ja digitaalista turvallisuutta pohjoisella otteella. 
              Tämä opas on osa Labin koulutusmateriaaleja.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navigaatio</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#/ai-safety" className="hover:text-emerald-400 transition-colors">AI-turvallisuus</a></li>
              <li><a href="#/cyber-basics" className="hover:text-emerald-400 transition-colors">Kyberperusteet</a></li>
              <li><a href="#/mobile-security" className="hover:text-emerald-400 transition-colors">Mobiiliturva</a></li>
              <li><a href="#/company-audit" className="hover:text-emerald-400 transition-colors">Yritysauditointi</a></li>
              <li><a href="#/security-routines" className="hover:text-emerald-400 transition-colors">Turvarutiinit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Resurssit</h4>
            <p className="text-sm">
              Päivitetty helmikuussa 2026.<br />
              Versio 1.0 (Dark Mode Edition)
            </p>
          </div>
        </div>
        <div className="border-t border-slate-900 mt-12 pt-8 text-xs text-center">
          &copy; 2026 Lapland AI Lab. Kaikki oikeudet pidätetään.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
