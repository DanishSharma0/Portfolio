import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.png';
import StarfieldCanvas from './StarfieldCanvas';
const Hero = () => {
  const roles = [
    "Product Designer",
    "UX/UI Designer",
    "UX Researcher"
  ];

  const [state, setState] = useState({
    text: '',
    isDeleting: false,
    wordIndex: 0,
    speed: 80
  });

  useEffect(() => {
    let timer;
    const handleTick = () => {
      setState(prev => {
        const currentWord = roles[prev.wordIndex % roles.length];
        let nextText = prev.text;
        let nextIsDeleting = prev.isDeleting;
        let nextWordIndex = prev.wordIndex;
        let nextSpeed = 80;

        if (!prev.isDeleting) {
          nextText = currentWord.slice(0, prev.text.length + 1);
          
          if (nextText === currentWord) {
            nextIsDeleting = true;
            nextSpeed = 2000; // Hold full text for 2 seconds
          } else {
            nextSpeed = 80;
          }
        } else {
          nextText = currentWord.slice(0, prev.text.length - 1);

          if (nextText === '') {
            nextIsDeleting = false;
            nextWordIndex = prev.wordIndex + 1;
            nextSpeed = 300; // Pause before next text
          } else {
            nextSpeed = 40; // Erase faster
          }
        }

        return {
          text: nextText,
          isDeleting: nextIsDeleting,
          wordIndex: nextWordIndex,
          speed: nextSpeed
        };
      });
    };

    timer = setTimeout(handleTick, state.speed);
    return () => clearTimeout(timer);
  }, [state.text, state.isDeleting, state.wordIndex, state.speed]);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', marginTop: '-60px', position: 'relative', overflow: 'hidden' }}>
      {/* Background starfield canvas */}
      <StarfieldCanvas />
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Left – text */}
        <div style={{ flex: '1 1 420px', zIndex: 2 }}>
          <p className="reveal stagger-1" style={{
            color: 'var(--accent-gold)',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontSize: '0.8rem'
          }}>
            Welcome to my portfolio
          </p>

          <h1 className="reveal stagger-2" style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 4.4rem)',
            marginBottom: '14px',
            lineHeight: 1.1,
            color: 'var(--text-primary)'
          }}>
            Hi, I'm <br />
            <span className="glass-text-shimmer">Danish Sharma.</span>
          </h1>

          <p className="reveal stagger-2" style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            lineHeight: '1.75',
            marginBottom: '20px',
            fontFamily: "'Montserrat', sans-serif",
            opacity: 0.9
          }}>
            Final-year Computer Science student with experience in UX/UI Design, Product Design, Wireframing, Prototyping, and User-Centered Design. Skilled in Figma, design systems, user research, and AI-assisted design workflows. Passionate about solving customer problems through intuitive digital experiences and transforming complex requirements into simple, user-friendly solutions.
          </p>

          <h2 className="reveal stagger-3" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.92rem',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderLeft: '2px solid var(--accent-gold)',
            paddingLeft: '14px'
          }}>
            {state.text}<span className="typewriter-cursor" style={{ color: 'var(--accent-gold)' }}>|</span>
          </h2>

          <div className="reveal stagger-4" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.83rem' }}>
              View Collection
            </a>
            <a href="/projects/My%20cv.pdf" download="Danish_Sharma_CV.pdf" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '0.83rem' }}>
              Download CV
            </a>
          </div>
        </div>

        {/* Right – profile image */}
        <div className="reveal stagger-3" style={{ flex: '0 1 340px', display: 'flex', justifyContent: 'center', zIndex: 2 }}>
          <div className="profile-orbit-container" style={{ width: '330px', height: '330px' }}>
            {/* Outer ring */}
            <div className="orbit-ring-secondary" style={{ width: '355px', height: '355px' }}>
              <div className="orbit-node orbit-node-pulse" style={{ top: '15%', right: '15%' }}></div>
              <div className="orbit-node" style={{ bottom: '20%', left: '10%', opacity: 0.4, width: '4px', height: '4px' }}></div>
            </div>

            {/* Main ring */}
            <div className="orbit-ring" style={{
              position: 'absolute',
              width: '315px',
              height: '315px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '50%',
              zIndex: 1
            }}>
              <div className="orbit-node" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
              <div style={{ position: 'absolute', bottom: '0', left: '50%', width: '5px', height: '5px', background: 'var(--accent-gold)', borderRadius: '50%', transform: 'translate(-50%, 50%)', opacity: 0.5 }}></div>
            </div>

            {/* Inner glow */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 1
            }} />

            {/* Profile circle */}
            <div className="profile-circle" style={{ width: '260px', height: '260px' }}>
              <img src={profileImg} className="profile-img-enhanced" alt="Danish Sharma" />
            </div>

            {/* DS label */}
            <div style={{
              position: 'absolute',
              bottom: '6px',
              right: '6px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--accent-gold)',
              zIndex: 4,
              fontStyle: 'italic',
              opacity: 0.9
            }}>
              DS.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
