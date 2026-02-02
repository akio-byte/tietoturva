
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AISafety from './pages/AISafety';
import CyberBasics from './pages/CyberBasics';
import MobileSecurity from './pages/MobileSecurity';
import BusinessAudit from './pages/BusinessAudit';
import Routines from './pages/Routines';
import ContentPage from './pages/ContentPage';

const ContentRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  return <Navigate to={`/content/${slug}`} replace />;
};

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
            {/* Dynamic content routes */}
            <Route path="/content/:slug" element={<ContentPage />} />
            <Route path="/sisalto/:slug" element={<ContentRedirect />} />
            {/* Direct route for the main IA item 'Incident Response' */}
            <Route path="/incident-response" element={<ContentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
