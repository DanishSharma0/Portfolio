import React, { useEffect } from 'react';
import './Starfield.css';

// Starfield component renders three full‑screen layers. Each layer moves at a
// different depth based on scroll position, creating a parallax starfield.
// The background is generated with CSS radial‑gradient patterns, so no image
// assets are required.
const Starfield = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.star-layer').forEach(layer => {
        const depth = parseFloat(layer.dataset.depth) || 0;
        layer.style.transform = `translateY(${scrollY * depth}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="star-layer star-1" data-depth="0.2" />
      <div className="star-layer star-2" data-depth="0.5" />
      <div className="star-layer star-3" data-depth="0.8" />
    </>
  );
};

export default Starfield;
