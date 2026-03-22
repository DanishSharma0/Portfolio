import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: isHome ? "#skills" : "/#skills" },
    { name: "Journey", href: isHome ? "#experience" : "/#experience" },
    { name: "Creations", href: isHome ? "#projects" : "/#projects" },
    { name: "Excellence", href: isHome ? "#achievements" : "/#achievements" }
  ];

  return (
    <div className="nav-capsules-container">
      {/* Logo Capsule */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="nav-capsule"
      >
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#fff'
          }}>
            DANISH<span style={{ color: 'var(--accent-gold)' }}>.</span>
          </span>
        </Link>
      </motion.div>

      {/* Navigation Capsule */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="nav-capsule"
      >
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-capsule-link">
            {link.name}
          </a>
        ))}
      </motion.div>

      {/* Action Capsule */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="nav-capsule"
        style={{ padding: '8px 20px' }}
      >
        <a
          href="mailto:contact@danish.me"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--accent-gold)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}
        >
          Let's Talk
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
