import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import CertificatesPage from './components/CertificatesPage';
import FloatingTech from './components/FloatingTech';
import ClickEffect from './components/ClickEffect';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Starfield from './components/Starfield';


function AppContent() {
  const location = useLocation();


  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      {/* Cinematic Overlays */}

      {/* removed legacy nebula accent */}



      <CustomCursor />
      <Navbar />
      <FloatingTech />
      <ClickEffect />
      <Routes>
        <Route path="/" element={
          <main style={{ paddingTop: '70px' }}>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Achievements />
          </main>
        } />
        <Route path="/certificates" element={
          <div style={{ padding: '35px 0' }}>
            <CertificatesPage />
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
