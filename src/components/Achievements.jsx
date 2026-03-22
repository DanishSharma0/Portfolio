import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "MongoDB Certified Professional",
      icon: "⚜️",
      description: "Recognized mastery in high-performance NoSQL architecture and data modeling."
    },
    {
      title: "Superior Algorithmic Proficiency",
      icon: "⚔️",
      description: "Advanced problem-solving across complex data structures and optimization logic."
    },
    {
      title: "HackerRank Gold Standard",
      icon: "🎖️",
      description: "Top-tier proficiency badges across multiple core computer science disciplines."
    }
  ];

  return (
    <section id="achievements" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title reveal">Distinguished <span className="text-gradient">Milestones</span></h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {achievements.map((acc, index) => (
            <motion.div 
              key={index} 
              className={`glass-panel reveal stagger-${index + 1}`} 
              style={{
                padding: '50px 40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderBottom: '1px solid var(--accent-gold)'
              }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '25px',
                width: '90px',
                height: '90px',
                background: 'rgba(212, 175, 55, 0.03)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                color: 'var(--accent-gold)'
              }}>
                {acc.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '15px', 
                color: 'var(--text-primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>{acc.title}</h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem', 
                lineHeight: '1.8',
                maxWidth: '300px' 
              }}>
                {acc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
