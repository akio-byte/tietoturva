
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import Governance from './pages/Governance';
import Blueprints from './pages/Blueprints';
import Architecture from './pages/Architecture';
import Audit from './pages/Audit';
import ContentPage from './pages/ContentPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/blueprints" element={<Blueprints />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/content/:slug" element={<ContentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
