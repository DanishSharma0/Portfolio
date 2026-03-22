import React from 'react';

const Experience = () => {
  const experiences = [
    {
      type: "Professional Training",
      title: "CipherSchools",
      date: "Certification Hub",
      description: "Successfully completed intensive certifications in Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOPS), mastering industrial coding standards and complex problem-solving."
    },
    {
      type: "Academic Foundation",
      title: "Lovely Professional University (LPU)",
      date: "B.Tech Journey",
      description: "Pursuing a B.Tech with a specialization in Full Stack Development, while maintaining an impressive CGPA of <span class='text-gradient' style='font-weight: 700;'>7.39</span> and a strong focus on algorithmic complexity."
    },
    {
      type: "Intermediate Education",
      title: "Govt. Mixed Hr. Sec. School",
      date: "Senior Secondary",
      description: "Achieved a commendable <span class='text-gradient' style='font-weight: 700;'>77%</span> in Senior Secondary education, demonstrating exceptional mastery in technical sciences and mathematical theory."
    },
    {
      type: "Matriculation",
      title: "Activity Public Hr. Sec. School",
      date: "High School Milestone",
      description: "Successfully cleared High School with a distinguished score of <span class='text-gradient' style='font-weight: 700;'>79.2%</span>, marking the inception of a strong technical academic trajectory."
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title reveal">Evolutionary <span className="text-gradient">Timeline</span></h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Divider */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)',
            opacity: 0.3,
            transform: 'translateX(-50%)'
          }} className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="reveal" style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              width: '100%',
              marginBottom: '60px',
              position: 'relative'
            }}>
              {/* Timeline Center Point */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '10px',
                height: '10px',
                background: 'var(--accent-gold)',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                boxShadow: '0 0 15px var(--accent-gold)'
              }}></div>

              <div className="glass-panel" style={{ 
                width: '45%', 
                padding: '40px',
                textAlign: index % 2 === 0 ? 'right' : 'left',
                borderLeft: index % 2 !== 0 ? '1px solid var(--accent-gold)' : 'none',
                borderRight: index % 2 === 0 ? '1px solid var(--accent-gold)' : 'none'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  color: 'var(--accent-gold)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.2rem',
                  textTransform: 'uppercase',
                  marginBottom: '15px'
                }}>
                  {exp.type}
                </span>
                
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  marginBottom: '10px', 
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05rem',
                  textTransform: 'uppercase'
                }}>{exp.title}</h3>
                
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.8rem', 
                  fontStyle: 'italic',
                  display: 'block', 
                  marginBottom: '20px',
                  opacity: 0.7
                }}>
                  {exp.date}
                </span>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.8',
                  maxWidth: index % 2 === 0 ? 'none' : '400px'
                }} dangerouslySetInnerHTML={{ __html: exp.description }}>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; transform: none !important; }
          .reveal { justify-content: flex-start !important; padding-left: 50px !important; }
          .reveal > div:nth-child(1) { left: 20px !important; transform: translateX(-50%) !important; }
          .reveal > div:nth-child(2) { width: 100% !important; text-align: left !important; border-left: 1px solid var(--accent-gold) !important; border-right: none !important; }
        }
      `}} />
    </section>
  );
};

export default Experience;
