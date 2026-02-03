import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Etusivu', path: '/' },
    { name: 'Governance', path: '/governance' },
    { name: 'Auditointi', path: '/business-audit' },
    { name: 'Blueprintit', path: '/cyber-basics' },
    { name: 'Tietoa', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                LAIL
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black text-white tracking-tighter uppercase">Lapland</span>
                <span className="text-xs font-bold aurora-text">AI Lab</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-all underline-offset-8 hover:underline hover:text-white ${
                  isActive(item.path) ? 'text-emerald-400 underline decoration-emerald-500/50' : 'text-slate-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-slate-800 mx-2"></div>
            <Link
              to="/audit"
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 transition-all"
            >
              Status
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 focus:outline-none"
              aria-label="Valikko"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-bold ${
                  isActive(item.path)
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/audit"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 mt-4 text-center bg-amber-500/10 text-amber-500 font-black rounded-lg border border-amber-500/20 text-xs uppercase tracking-widest"
            >
              Järjestelmän tila
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;