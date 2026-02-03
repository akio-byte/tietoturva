import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
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
    <header className="bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all">
                LAIL
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black text-white tracking-tighter uppercase">Lapland</span>
                <span className="text-[11px] font-bold aurora-text tracking-widest uppercase">AI Lab</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path) 
                    ? 'text-emerald-400 bg-emerald-500/5' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-slate-800 mx-4"></div>
            <Link
              to="/audit"
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 transition-all"
            >
              System Status
            </Link>
          </nav>

          {/* Mobile simple text-link placeholder if needed, otherwise hidden */}
          <div className="md:hidden text-xs font-bold text-slate-500">
            MOBILE MENU
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;