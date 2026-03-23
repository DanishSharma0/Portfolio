import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar from 0 to 100 over 2 seconds
    const steps = 60;
    const interval = 2000 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setProgress((current / steps) * 100);
      if (current >= steps) {
        clearInterval(timer);
        // After progress completes, fade out
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const nameLetters = 'Danish Sharma'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Decorative gold top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
              transformOrigin: 'left',
            }}
          />

          {/* Animated name letters */}
          <div style={{ display: 'flex', gap: '0px', alignItems: 'center' }}>
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.2, 0, 0, 1],
                }}
                style={{
                  fontSize: letter === ' ' ? '2rem' : 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-primary, sans-serif)',
                  textShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
                  display: 'inline-block',
                  width: letter === ' ' ? '1rem' : 'auto',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              marginTop: '-20px',
            }}
          >
            Portfolio
          </motion.p>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: 'min(300px, 60vw)',
                height: '1px',
                background: 'rgba(212, 175, 55, 0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'var(--accent-gold)',
                  boxShadow: '0 0 12px var(--accent-gold)',
                  transition: 'width 0.05s linear',
                }}
              />
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                }}
              />
            </div>
            <span
              style={{
                color: 'rgba(212, 175, 55, 0.6)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {Math.round(progress)}%
            </span>
          </motion.div>

          {/* Decorative gold bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
              transformOrigin: 'right',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
