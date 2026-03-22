import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickEffect = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setClicks((prev) => [...prev.slice(-4), newClick]); // Keep only last few for performance
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {clicks.map((click) => (
          <React.Fragment key={click.id}>
            {/* Main Outer Burst */}
            <motion.div
              initial={{ x: click.x - 2, y: click.y - 2, scale: 0, opacity: 0.8 }}
              animate={{ scale: 20, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                border: '1px solid var(--accent-gold)',
                background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
                boxShadow: '0 0 15px var(--accent-gold)'
              }}
            />
            {/* Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: click.x, y: click.y, scale: 0, opacity: 1 }}
                animate={{ 
                  x: click.x + (Math.random() - 0.5) * 100, 
                  y: click.y + (Math.random() - 0.5) * 100, 
                  scale: Math.random() * 2,
                  opacity: 0 
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  width: '3px',
                  height: '3px',
                  background: 'var(--accent-gold)',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px var(--accent-gold)'
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickEffect;
