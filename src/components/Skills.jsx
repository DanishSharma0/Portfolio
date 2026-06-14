import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Design",
      skills: ["Product Thinking", "User-Centered Design", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "User Flows", "Information Architecture", "Interaction Design"]
    },
    {
      title: "UX Research",
      skills: ["User Research", "Competitor Analysis", "Persona Creation", "User Journey Mapping", "Usability Testing", "Heuristic Evaluation"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Figma", "FigJam", "Canva", "ChatGPT", "Gemini AI"]
    },
    {
      title: "Front-end Knowledge",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Collaboration", "Presentation Skills", "Stakeholder Management", "Critical Thinking"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="skills" style={{ position: 'relative', background: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="reveal section-title">
          Design & Product <span className="text-gradient">Mastery</span>
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-panel" 
              style={{ 
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                borderLeft: '1px solid var(--accent-gold)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                margin: 0, 
                color: 'var(--accent-gold)', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
