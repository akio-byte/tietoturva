
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AISafety from './pages/AISafety';
import CyberBasics from './pages/CyberBasics';
import MobileSecurity from './pages/MobileSecurity';
import CompanyAudit from './pages/CompanyAudit';
import SecurityRoutines from './pages/SecurityRoutines';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-safety" element={<AISafety />} />
            <Route path="/cyber-basics" element={<CyberBasics />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/company-audit" element={<CompanyAudit />} />
            <Route path="/security-routines" element={<SecurityRoutines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
