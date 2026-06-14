import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import certificateImg from '../assets/certificate.png';

const Certificates = () => {
  return (
    <section id="certificates" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title reveal">Distinguished <span className="text-gradient">Certifications</span></h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.8 }}
            style={{ 
              maxWidth: '600px', 
              padding: '10px', 
              background: 'var(--bg-primary)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '0',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '0' }}>
              <img 
                src={certificateImg} 
                alt="Web Development Excellence Certificate" 
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'sepia(20%)' }} 
              />
            </div>
            
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--text-primary)' }}>Web Excellence</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.7' }}>
                Acknowledged for technical mastery and the implementation of high-performance digital standards.
              </p>
              
              <Link to="/certificates" className="btn btn-primary">
                Explore Full Collection
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="reveal"
            style={{ maxWidth: '450px', textAlign: 'left' }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'var(--text-primary)' }}>Constant <span className="text-gradient">Evolution</span></h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '35px' }}>
              True mastery is a perpetual journey. I am relentlessly expanding my expertise across User Experience design, product strategy, and interactive systems.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {['Product Design', 'UX Research', 'Design Systems', 'Interaction Design'].map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-gold)', fontWeight: 500, fontSize: '0.9rem' }}>
                  <span style={{ width: '8px', height: '8px', background: 'var(--accent-gold)', borderRadius: '50%' }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
