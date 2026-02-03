import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Lapland AI Lab</h3>
            <p className="text-sm text-slate-400">
              © {currentYear} Lapland AI Lab – Static Governance Showroom
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <Link to="/blueprints" className="hover:text-emerald-300 transition-colors">Blueprints</Link>
            <Link to="/audit" className="hover:text-emerald-300 transition-colors">Audit</Link>
            <Link to="/governance" className="hover:text-emerald-300 transition-colors">Governance</Link>
            <Link to="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
