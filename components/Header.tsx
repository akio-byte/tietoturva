import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Etusivu', path: '/' },
    { name: 'Governance', path: '/governance' },
    { name: 'Auditointi', path: '/business-audit' },
    { name: 'Blueprintit', path: '/materials' }, // Point to Materials as it's the main showcase
    { name: 'Tietoa', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center text-slate-950 font-black text-[10px] shadow-2xl shadow-emerald-500/20 group-hover:scale-105 transition-all">
            LAIL
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-black text-white tracking-tighter uppercase">Lapland</span>
            <span className="text-[10px] font-bold aurora-text tracking-widest uppercase">AI Lab</span>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
                isActive(item.path) 
                  ? 'text-emerald-400' 
                  : 'text-slate-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/5 mx-2"></div>
          <Link
            to="/audit"
            className="text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-lg border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-all shadow-lg shadow-amber-500/5"
          >
            STATUS
          </Link>
        </nav>

        {/* Mobile menu trigger placeholder */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-slate-400"></div>
          <div className="w-6 h-0.5 bg-slate-400"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;