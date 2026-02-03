import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Etusivu', path: '/' },
    { name: 'Kyberperusteet', path: '/cyber-basics' },
    { name: 'AI-turva', path: '/ai-safety' },
    { name: 'Mobiili', path: '/mobile-security' },
    { name: 'Auditointi', path: '/business-audit' },
    { name: 'Yhteystiedot', path: '/contact' },
  ];

  const adminItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Hallinto', path: '/governance' },
    { name: 'Tekninen Audit', path: '/audit' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-emerald-500/20">
                LAIL
              </div>
              <span className="text-xl font-bold tracking-tight">
                Lapland <span className="aurora-text">AI Lab</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden xl:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all hover:text-emerald-400 whitespace-nowrap px-2 py-1 rounded-lg ${
                  isActive(item.path) ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-slate-800 mx-2"></div>
            <div className="flex space-x-2">
              {adminItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md border transition-all ${
                    isActive(item.path) 
                      ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' 
                      : 'border-amber-500/20 text-amber-500/60 hover:text-amber-500 hover:border-amber-500/40'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
              aria-label="Avaa valikko"
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

      {isOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-slate-800 text-emerald-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-slate-800 pt-2 mt-2">
              <span className="block px-3 py-1 text-[10px] font-black text-slate-500 uppercase tracking-widest">Admin</span>
              {adminItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'text-amber-500' : 'text-amber-500/50 hover:text-amber-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;