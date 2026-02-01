import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AISafety from './pages/AISafety';
import CyberBasics from './pages/CyberBasics';
import MobileSecurity from './pages/MobileSecurity';
import BusinessAudit from './pages/BusinessAudit';
import Routines from './pages/Routines';
import NotFound from './pages/NotFound';

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
            <Route path="/business-audit" element={<BusinessAudit />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
