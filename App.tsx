import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AISafety from './pages/AISafety';
import AISafetyCheck from './pages/AISafetyCheck';
import CyberBasics from './pages/CyberBasics';
import MobileSecurity from './pages/MobileSecurity';
import BusinessAudit from './pages/BusinessAudit';
import PrintCyberBasics from './pages/PrintCyberBasics';
import PrintMobileSecurity from './pages/PrintMobileSecurity';
import Reminders from './pages/Reminders';
import Routines from './pages/Routines';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-safety" element={<AISafety />} />
            <Route path="/ai-safety-check" element={<AISafetyCheck />} />
            <Route path="/cyber-basics" element={<CyberBasics />} />
            <Route path="/mobile-security" element={<MobileSecurity />} />
            <Route path="/print/cyber-basics" element={<PrintCyberBasics />} />
            <Route path="/print/mobile-security" element={<PrintMobileSecurity />} />
            <Route path="/business-audit" element={<BusinessAudit />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/routines" element={<Routines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
