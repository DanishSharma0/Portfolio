import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', href: isHome ? '#skills' : '/#skills' },
    { name: 'Journey', href: isHome ? '#experience' : '/#experience' },
    { name: 'Creations', href: isHome ? '#projects' : '/#projects' },
    { name: 'Excellence', href: isHome ? '#achievements' : '/#achievements' },
  ];

  return (
    <div className="nav-thin-bar">
      <Link to="/" className="nav-brand">
        DANISH<span className="nav-gold">.</span>
      </Link>
      <div className="nav-links">
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
        <a href="mailto:danish7501243@gmail.com" className="nav-link">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default Navbar;
