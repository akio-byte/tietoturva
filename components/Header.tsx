
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Etusivu', path: '/' },
    { name: 'Äänestä', path: '/vote' },
    { name: 'Tulokset', path: '/results' },
    { name: 'Ylläpito', path: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">VOTE</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arctic <span className="aurora-text">Votes</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all hover:text-emerald-400 px-3 py-2 rounded-lg ${
                  isActive(item.path) ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-slate-800 text-emerald-400' : 'text-slate-400'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
