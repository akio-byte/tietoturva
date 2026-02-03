import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 py-16 mt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-6">Lapland <span className="aurora-text">AI Lab</span></h3>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Edistämme vastuullista tekoälyä ja digitaalista turvallisuutta pohjoisella otteella. 
              Autamme pk-yrityksiä ja organisaatioita navigoimaan muuttuvassa teknologiaympäristössä.
            </p>
            <div className="flex gap-4">
               <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                 Arctic Hardening Portal
               </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navigaatio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Etusivu</Link></li>
              <li><Link to="/governance" className="hover:text-emerald-400 transition-colors">Governance-malli</Link></li>
              <li><Link to="/business-audit" className="hover:text-emerald-400 transition-colors">Auditointi</Link></li>
              <li><Link to="/cyber-basics" className="hover:text-emerald-400 transition-colors">Blueprintit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Yhteystiedot</h4>
            <p className="text-sm leading-relaxed">
              Lapland AI Lab Academy<br />
              Rovaniemi, Lappi<br />
              <a href="mailto:info@laplandailab.fi" className="text-emerald-400 hover:underline">info@laplandailab.fi</a>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-900 mt-12 pt-8 text-[11px] text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {currentYear} Lapland AI Lab – Kaikki oikeudet pidätetään.</span>
          <span className="text-slate-600 bg-slate-950 px-2 py-1 rounded">
            Tämä on interaktiivinen Showroom / Demo – Ei tuotantokäyttöön.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;