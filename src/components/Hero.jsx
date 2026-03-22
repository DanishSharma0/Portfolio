import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
  const fullRoleText = "Full Stack Developer / Software Engineer";
  const [roleText, setRoleText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingDelay = 80;

    const timer = setInterval(() => {
      if (index < fullRoleText.length) {
        setRoleText(fullRoleText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingDelay);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '60px'
      }}>
        <div style={{ flex: '1 1 600px', zIndex: 2 }}>
          <p className="reveal stagger-1" style={{ 
            color: 'var(--accent-gold)', 
            fontWeight: 500, 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            marginBottom: '15px',
            fontSize: '0.9rem' 
          }}>
            Welcome to my portfolio
          </p>
          <h1 className="reveal stagger-2" style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 6rem)', 
            marginBottom: '20px', 
            lineHeight: 1.1,
            color: 'var(--text-primary)'
          }}>
            Hi, I'm <br/>
            <span className="glass-text-shimmer">Danish Sharma.</span>
          </h1>
          
          <p className="reveal stagger-2" style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '550px',
            lineHeight: '1.8',
            marginBottom: '30px',
            fontFamily: "'Montserrat', sans-serif",
            opacity: 0.9
          }}>
            I am a dedicated **Full Stack Developer** passionate about crafting 
            seamless digital experiences. With expertise in building scaleable architectures 
            and pixel-perfect interfaces, I focus on turning complex problems 
            into elegant, high-performance software solutions.
          </p>

          <h2 className="reveal stagger-3" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.2rem', 
            fontWeight: 400, 
            color: 'var(--text-secondary)', 
            marginBottom: '40px', 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderLeft: '2px solid var(--accent-gold)',
            paddingLeft: '20px'
          }}>
            {roleText}<span style={{ color: 'var(--accent-gold)' }}>|</span>
          </h2>
          
          <div className="reveal stagger-4" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Collection
            </a>
            <a href="/projects/My%20cv.pdf" download="Danish_Sharma_CV.pdf" className="btn btn-secondary">
              Download CV
            </a>
          </div>
        </div>
        
        <div className="reveal stagger-3" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', zIndex: 2 }}>
          <div className="profile-orbit-container">
            {/* Outer Reverse Orbit Ring */}
            <div className="orbit-ring-secondary">
              <div className="orbit-node orbit-node-pulse" style={{ top: '15%', right: '15%' }}></div>
              <div className="orbit-node" style={{ bottom: '20%', left: '10%', opacity: 0.4, width: '4px', height: '4px' }}></div>
            </div>

            {/* Main Orbit Ring */}
            <div className="orbit-ring" style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '50%',
              zIndex: 1
            }}>
              {/* Discrete tech-inspired nodes on the ring */}
              <div className="orbit-node" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
              <div style={{ position: 'absolute', bottom: '0', left: '50%', width: '6px', height: '6px', background: 'var(--accent-gold)', borderRadius: '50%', transform: 'translate(-50%, 50%)', opacity: 0.5 }}></div>
            </div>

            {/* Inner Glow */}
            <div style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 1
            }} />

            {/* Profile Circle */}
            <div className="profile-circle">
              <img 
                src={profileImg} 
                className="profile-img-enhanced"
                alt="Danish Sharma" 
              />
            </div>

            {/* Subtle Floating Labels or geometric accents */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--accent-gold)',
              zIndex: 4,
              fontStyle: 'italic',
              opacity: 0.9,
              textShadow: '0 0 10px rgba(0,0,0,0.5)'
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
