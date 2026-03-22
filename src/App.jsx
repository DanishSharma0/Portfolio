import React, { useEffect } from 'react';
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

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Select and observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <FloatingTech />
      <ClickEffect />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Achievements />
          </main>
        } />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
