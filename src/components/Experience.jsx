import React from 'react';

const Experience = () => {
  const experiences = [
    {
      type: "Design Experience",
      title: "UX/UI & Product Designer",
      date: "Academic & Personal Projects",
      description: "Designing user-centered web and mobile interfaces using Figma with a focus on usability, accessibility, and visual consistency. Created user flows, wireframes, interactive prototypes, and high-fidelity designs. Conducted competitor analysis and user research to identify pain points and transform user needs into intuitive digital solutions. Built and maintained reusable design systems, leveraging AI-powered tools for rapid design exploration and collaborating with developers for responsive implementation."
    },
    {
      type: "Education",
      title: "Lovely Professional University (LPU)",
      date: "August 2023 – Present",
      description: "Pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering, maintaining a CGPA of <span class='text-gradient' style='font-weight: 700;'>7.39/10</span> while blending software engineering and human-computer interaction principles."
    },
    {
      type: "Education",
      title: "Govt. Mixed Hr. Sec. School",
      date: "April 2020 – March 2022",
      description: "Completed Senior Secondary education with a score of <span class='text-gradient' style='font-weight: 700;'>77%</span>, developing strong analytical thinking and quantitative reasoning foundations."
    },
    {
      type: "Education",
      title: "Activity Public Hr. Sec. School",
      date: "April 2019 – March 2020",
      description: "Completed Matriculation with a distinguished score of <span class='text-gradient' style='font-weight: 700;'>79.2%</span>, demonstrating early academic excellence and a passion for technology."
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title reveal">Professional <span className="text-gradient">Journey</span></h2>
        
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
