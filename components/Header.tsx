
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Etusivu', path: '/' },
    { name: 'Governance', path: '/governance' },
    { name: 'Auditointi', path: '/business-audit' },
    { name: 'Blueprintit', path: '/cyber-basics' },
    { name: 'Materiaalit', path: '/materials' },
    { name: 'Tietoa', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all">
              LAIL
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black text-white tracking-tighter uppercase">Lapland</span>
              <span className="text-[10px] font-bold aurora-text tracking-widest uppercase">AI Lab</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                isActive(item.path) 
                  ? 'text-emerald-400' 
                  : 'text-slate-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-slate-800"></div>
          <Link
            to="/audit"
            className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 transition-all"
          >
            Status
          </Link>
        </nav>

        {/* Mobile menu indicator */}
        <div className="md:hidden text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          Valikko
        </div>
      </div>
    </header>
  );
};

export default Header;
