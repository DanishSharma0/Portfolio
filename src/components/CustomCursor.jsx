import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('.glass-panel') ||
        e.target.closest('.skill-tag')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--accent-gold)',
          borderRadius: '50%',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 20000,
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '32px',
          height: '32px',
          border: '1px solid var(--accent-gold)',
          borderRadius: '50%',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 19999,
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
