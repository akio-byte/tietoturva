import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 py-16 mt-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-6">Lapland <span className="aurora-text">AI Lab</span></h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Edistämme vastuullista tekoälyä ja digitaalista turvallisuutta pohjoisella otteella. 
              Tämä on staattinen Governance Showroom.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navigaatio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Etusivu</Link></li>
              <li><Link to="/cyber-basics" className="hover:text-emerald-400 transition-colors">Blueprintit</Link></li>
              <li><Link to="/business-audit" className="hover:text-emerald-400 transition-colors">Auditointi</Link></li>
              <li><Link to="/governance" className="hover:text-emerald-400 transition-colors">Hallinto</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Yhteystiedot</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Info</h4>
            <p className="text-sm">
              Static Build (v1.6)<br />
              GitHub Pages Deployment
            </p>
          </div>
        </div>
        <div className="border-t border-slate-900 mt-12 pt-8 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {currentYear} Lapland AI Lab – Static Governance Showroom.</span>
          <span className="text-slate-600">Built with React & Vite.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;