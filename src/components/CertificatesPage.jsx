import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const certificates = [
  { id: 1, title: 'Binary Blitz', image: '/certificates/BInary-blitz-page-00001.webp', category: 'Hackathon' },
  { id: 2, title: 'Data Structures and Algorithms', image: '/certificates/DSA-page-00001.webp', category: 'Programming' },
  { id: 3, title: 'DSA Certification', image: '/certificates/DSA.webp', category: 'Programming' },
  { id: 4, title: 'Digital Systems', image: '/certificates/Digital-Systems-page-00001.webp', category: 'Hardware' },
  { id: 5, title: 'Hackathon Certificate', image: '/certificates/Hackathon_Certificate-page-00001.webp', category: 'Hackathon' },
  { id: 6, title: 'Technical Proficiency', image: '/certificates/Mindluster_Certificate-1-page-00001.webp', category: 'Professional' },
  { id: 7, title: 'OOPS C++ Programming', image: '/certificates/OOPS-Cpp-programming-language.webp', category: 'Programming' },
  { id: 8, title: 'Peer-to-Peer Protocols', image: '/certificates/Peer-to-Peer-Protocols-and-Local-Area-Networks-page-00001.webp', category: 'Networking' },
  { id: 9, title: 'Professional Achievement', image: '/certificates/UC-078817c4-a635-46d1-8b6b-3ec559e60390-page-00001.webp', category: 'Professional' },
  { id: 10, title: 'Bits and Bytes of Networking', image: '/certificates/bits-and-byte-of-networking-page-00001.webp', category: 'Networking' },
  { id: 11, title: 'Build Generative AI', image: '/certificates/build-generative-ai-page-00001.webp', category: 'Artificial Intelligence' },
  { id: 12, title: 'C Programming Certification', image: '/certificates/c-programining-neocolab-certificate-page-00001.webp', category: 'Programming' },
  { id: 13, title: 'Fundamental of Network Communication', image: '/certificates/fundamental-of-network-communication-page-00001.webp', category: 'Networking' },
  { id: 14, title: 'GitHub Certificate', image: '/certificates/github-certificate-page-00001.webp', category: 'Tools' },
  { id: 15, title: 'CSE101 Student E-certificate', image: '/certificates/https___s3.amazonaws.com_exams-media_CSE101_Student-E-certificate_12301129_at_neocolab.ai-page-00001.webp', category: 'Academic' },
  { id: 16, title: 'Java Programming Certification', image: '/certificates/https___s3.amazonaws.com_exams-media_Java-Programming_Student-Certificate_Updated_12301129_at_n-page-00001.webp', category: 'Programming' },
  { id: 17, title: 'Introduction to Hardware and OS', image: '/certificates/introduction-to-hardware-and-os-page-00001.webp', category: 'Hardware' },
  { id: 18, title: 'Master Generative AI', image: '/certificates/master-generative-ai-page-00001.webp', category: 'Artificial Intelligence' },
  { id: 19, title: 'Software Development', image: '/certificates/software-dev-page-00001.webp', category: 'Development' },
];

const LoadingOverlay = ({ loadedPercentage }) => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    onAnimationComplete={() => document.body.style.overflow = 'auto'}
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}
  >
    <div style={{ position: 'relative', width: '200px', height: '2px', background: 'rgba(212, 175, 55, 0.1)' }}>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${loadedPercentage}%` }}
        style={{ height: '100%', background: 'var(--accent-gold)', boxShadow: '0 0 15px var(--accent-gold)' }}
      />
    </div>
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
    >
      Loading Milestones {Math.round(loadedPercentage)}%
    </motion.span>
  </motion.div>
);

const CertificateCard = ({ cert, onImageLoad }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onImageLoad();
  };

  return (
    <motion.div
      className="glass-panel"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(212, 175, 55, 0.1)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        willChange: 'transform, opacity' // Optimization for smoother animations
      }}
    >
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        aspectRatio: '1.4/1',
        background: 'rgba(255, 255, 255, 0.03)' // Placeholder color
      }}>
        {!isLoaded && (
          <div className="skeleton-pulse" style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
            zIndex: 1
          }} />
        )}
        <img 
          src={cert.image} 
          alt={cert.title} 
          loading="lazy"
          onLoad={handleLoad}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'sepia(15%)',
            transition: 'transform 0.6s cubic-bezier(0.2, 0, 0, 1), opacity 0.5s ease',
            opacity: isLoaded ? 1 : 0
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          padding: '4px 12px',
          background: 'var(--accent-gold)',
          fontSize: '0.65rem',
          fontWeight: 700,
          color: 'var(--bg-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          zIndex: 2
        }}>
          {cert.category}
        </div>
      </div>
      <div style={{ padding: '25px 20px' }}>
        <h3 style={{ 
          fontSize: '1.1rem', 
          marginBottom: '10px', 
          color: 'var(--text-primary)',
          letterSpacing: '0.02em'
        }}>{cert.title}</h3>
        <div style={{ width: '30px', height: '1px', background: 'var(--accent-gold)', opacity: 0.3 }}></div>
      </div>
    </motion.div>
  );
};

const CertificatesPage = () => {
  const [loadedCount, setLoadedCount] = React.useState(0);
  const totalCertificates = certificates.length;
  const isFullyLoaded = loadedCount === totalCertificates;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFullyLoaded) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullyLoaded]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className="certificates-page" style={{ position: 'relative', paddingTop: '150px', minHeight: '100vh', paddingBottom: '100px', background: 'var(--bg-primary)' }}>
      {!isFullyLoaded && <LoadingOverlay loadedPercentage={(loadedCount / totalCertificates) * 100} />}
      
      <div className="container" style={{ opacity: isFullyLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <div style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={isFullyLoaded ? { opacity: 1, y: 0 } : {}}
            className="section-title" 
            style={{ margin: 0 }}
          >
            Curated <span className="text-gradient">Milestones</span>
          </motion.h1>
          <Link to="/" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>&larr;</span> Return to Home
          </Link>
        </div>

        <div className="certificates-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '40px' 
        }}>
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onImageLoad={handleImageLoad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
