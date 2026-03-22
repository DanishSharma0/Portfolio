import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      padding: '100px 0 50px',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          width: '60px',
          height: '1px',
          background: 'var(--accent-gold)',
          marginBottom: '40px'
        }}></div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2.5rem',
          marginBottom: '30px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)'
        }}>
          Danish<span style={{ color: 'var(--text-primary)' }}>Sharma</span>
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: '50px',
          lineHeight: '2',
          fontSize: '1rem',
          textAlign: 'center',
          letterSpacing: '0.02em'
        }}>
          Architecting refined digital experiences with precision and technical excellence. Available for strategic collaborations.
        </p>

        <div style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
          {[
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/danishsharma0/' },
            { label: 'GitHub', url: 'https://github.com/DanishSharma0' },
            { label: 'Email', url: 'mailto:hunter7501243@gmail.com' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
            >
              {social.label}
            </a>
          ))}
        </div>

        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(212, 175, 55, 0.05)',
          paddingTop: '40px',
          color: 'rgba(245, 245, 240, 0.4)',
          fontSize: '0.7rem',
          display: 'flex',
          justifyContent: 'space-between',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          <span>&copy; {new Date().getFullYear()} Hunter's Creation</span>
          <span>Curated with Love of Development</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
