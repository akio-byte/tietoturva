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
import ContentPage from './pages/ContentPage';
import AdminDashboard from './pages/AdminDashboard';
import Governance from './pages/Governance';
import AuditReport from './pages/AuditReport';
import Contact from './pages/Contact';
import AiAssistant from './components/AiAssistant';

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
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/audit" element={<AuditReport />} />
            <Route path="/contact" element={<Contact />} />
            {/* Dynamic content routes */}
            <Route path="/content/:slug" element={<ContentPage />} />
            {/* Direct route for the main IA item 'Incident Response' */}
            <Route path="/incident-response" element={<ContentPage />} />
          </Routes>
        </main>
        <AiAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;