import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryModal = ({ isOpen, onClose, images = [], projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 900 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { 
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto'; 
    };
  }, [isOpen]);

  if (!isOpen || !images.length) return null;

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(5, 5, 5, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '1100px',
              position: 'relative',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--accent-gold)',
              padding: '20px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: 'var(--accent-gold)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '1rem' }}>
                {projectTitle} — <span style={{ opacity: 0.7 }}>Milestone {currentIndex + 1}</span>
              </h3>
              <button 
                onClick={onClose}
                style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '2rem', cursor: 'pointer', lineHeight: '1' }}
              >
                &times;
              </button>
            </div>

            {/* Main Content Area */}
            <div style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row', 
              gap: '30px', 
              alignItems: 'stretch' 
            }}>
              {/* Image Container */}
              <div style={{ 
                position: 'relative', 
                flexGrow: 1,
                aspectRatio: '16/9', 
                background: '#000', 
                borderRadius: '8px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex].url}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </AnimatePresence>
                
                {/* Nav Arrows */}
                <motion.button 
                  whileHover={{ scale: 1.1, background: 'rgba(212, 175, 55, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage} 
                  style={{ 
                    position: 'absolute', left: '25px', top: '50%', transform: 'translateY(-50%)', 
                    background: 'rgba(212, 175, 55, 0.2)', border: '1px solid var(--accent-gold)', 
                    color: '#fff', borderRadius: '50%', width: '55px', height: '55px', 
                    cursor: 'pointer', zIndex: 101, fontSize: '1.5rem', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                  }}
                >
                  &larr;
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, background: 'rgba(212, 175, 55, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage} 
                  style={{ 
                    position: 'absolute', right: '25px', top: '50%', transform: 'translateY(-50%)', 
                    background: 'rgba(212, 175, 55, 0.2)', border: '1px solid var(--accent-gold)', 
                    color: '#fff', borderRadius: '50%', width: '55px', height: '55px', 
                    cursor: 'pointer', zIndex: 101, fontSize: '1.5rem', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                  }}
                >
                  &rarr;
                </motion.button>
              </div>

              {/* Description Panel */}
              <div style={{ 
                width: isMobile ? '100%' : '380px', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.03)',
                padding: '40px 30px',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.05)'
              }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '1.1rem' }}>{images[currentIndex].label}</h4>
                <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)', marginBottom: '20px', opacity: 0.5 }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', margin: 0, opacity: 0.9 }}>
                  {images[currentIndex].description}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '40px' }}>
                  {images.map((_, i) => (
                    <div 
                      key={i} 
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                      style={{ 
                        width: i === currentIndex ? '40px' : '12px', 
                        height: '4px', 
                        background: i === currentIndex ? 'var(--accent-gold)' : 'rgba(212, 175, 55, 0.1)', 
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        borderRadius: '2px'
                      }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "T-MAN",
      description: "A comprehensive project management powerhouse designed for seamless team synchronization and high-velocity workflow orchestration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      link: "#",
      images: [
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234318.png", 
          label: "Strategic Entry", 
          description: "An immersive landing experience that invites users into a world of peak productivity, showcasing the platform's ability to boost team synergy." 
        },
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234225.png", 
          label: "Analytical Nerve Center", 
          description: "A high-fidelity dashboard presenting real-time team snapshots, performer rankings, and task distribution analytics." 
        },
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234135.png", 
          label: "Execution Engine", 
          description: "A precision-engineered task management interface allowing for absolute control over project lifecycles." 
        },
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234101.png", 
          label: "Human Capital View", 
          description: "A dedicated team oversight panel tracking assignee progress and facilitating seamless resource allocation." 
        },
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234033.png", 
          label: "Immutable Registry", 
          description: "A comprehensive Activity Log providing full transparency through a real-time audit trail of every platform action." 
        },
        { 
          url: "/projects/t-man/Screenshot 2026-03-22 234111.png", 
          label: "Workstream Insights", 
          description: "Detailed view of project workstreams, ensuring every task is perfectly aligned with organizational goals." 
        }
      ]
    },
    {
      title: "AllaboutBhaderwah",
      description: "A tourism and information portal dedicated to showcasing the beauty and culture of Bhaderwah.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "#",
      images: [
        {
          url: "/projects/Allaboutbhaderwah/Screenshot 2026-03-23 020236.png",
          label: "Gateway to Paradise",
          description: "An evocative landing experience featuring the majestic landscapes of Bhaderwah, setting the tone for an immersive cultural and natural exploration."
        },
        {
          url: "/projects/Allaboutbhaderwah/Screenshot 2026-03-23 020317.png",
          label: "Service Ecosystem",
          description: "A comprehensive overview of curated travel services, from exploring hidden meadows to seamless transportation and premium hospitality management."
        },
        {
          url: "/projects/Allaboutbhaderwah/Screenshot 2026-03-23 020347.png",
          label: "Onboarding Flow — Sign Up",
          description: "A refined user registration interface integrated with lush, nature-inspired aesthetics to maintain a consistent thematic bridge with the destination."
        },
        {
          url: "/projects/Allaboutbhaderwah/Screenshot 2026-03-23 020401.png",
          label: "Authentication Portal",
          description: "A minimalist and elegant login experience, prioritizing user flow while keeping the focus on the serene environment of Bhaderwah."
        }
      ]
    },
    {
      title: "HiStudy",
      description: "An educational platform designed to streamline student learning and resource sharing.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"],
      link: "#",
      images: [
        {
          url: "/projects/Histudy/home_page_1774212209662.png",
          label: "Nexus Hub",
          description: "The primary point of entry, offering a clean and intuitive navigation experience across the entire learning ecosystem."
        },
        {
          url: "/projects/Histudy/ai_genie_page_1774212254506.png",
          label: "AI Learning Oracle",
          description: "An advanced AI-powered assistant designed to facilitate instant knowledge retrieval and intelligent academic guidance."
        },
        {
          url: "/projects/Histudy/learnease_dashboard_page_1774212281603.png",
          label: "Academic Command Center",
          description: "A centralized dashboard providing students with real-time insight into their academic progress and easy access to core learning modules."
        }
      ]
    },
    {
      title: "Console-Based Dice Game",
      description: "An interactive command-line dice game with betting mechanics and probability systems.",
      tech: ["C++"],
      link: "#"
    }
  ];

  return (
    <section id="projects" style={{ position: 'relative', background: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title reveal">Featured <span className="text-gradient">Creations</span></h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '50px'
        }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`glass-panel reveal stagger-${(index % 4) + 1} project-card`} 
              style={{
                padding: '50px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderTop: '2px solid var(--accent-gold)'
              }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <h3 style={{ 
                fontSize: '2rem', 
                marginBottom: '20px', 
                color: 'var(--text-primary)',
                letterSpacing: '0.05em'
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '30px', 
                flexGrow: 1, 
                lineHeight: '1.8',
                fontSize: '0.95rem'
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '35px' }}>
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className="skill-tag">
                    {techItem}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => project.images ? setSelectedProject(project) : window.open(project.link, '_blank')}
                className="btn-secondary" 
                style={{ 
                  padding: '10px 24px', 
                  width: 'fit-content',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  border: '1px solid var(--accent-gold)',
                  color: 'var(--accent-gold)',
                  background: 'transparent',
                  cursor: 'pointer'
                }}
              >
                Examine Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        images={selectedProject?.images || []} 
        projectTitle={selectedProject?.title}
      />
    </section>
  );
};

export default Projects;
