import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, schoolExperiences } from '../constants';  // Importez les deux tableaux

// Composant pour une carte d'expérience
const ExperienceCard = ({ experience, isExpanded, onExpand, onCollapse }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(255, 255, 255, 0.8)',
      color: '#333',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      borderRadius: '12px',
      padding: '20px',
      transition: 'all 0.3s ease-in-out',
      position: 'relative',
    }}
    contentArrowStyle={{ borderRight: '7px solid #333' }}
    date={
      <div
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: '#555',
          padding: '6px 12px',
          borderRadius: '8px',
        }}
      >
        {experience.date}
      </div>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '50%',
      border: '2px solid #fff',
      width: '60px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }}
    icon={
      <a href={experience.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          style={{ 
            width: '60%', 
            height: '60%', 
            objectFit: 'contain', 
            filter: 'grayscale(100%)', 
            transition: 'filter 0.3s ease' 
          }}
          onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
          onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
        />
      </a>
    }
  >
    <div>
      <h3 style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>{experience.title}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#444' }}>{experience.company_name}</p>
    </div>
    {isExpanded && (
      <ul style={{ marginTop: '10px', color: '#555', paddingLeft: '20px' }}>
        {experience.description.map((point, index) => (
          <li key={index} style={{ marginBottom: '5px', lineHeight: '1.6' }}>
            - {point}
          </li>
        ))}
      </ul>
    )}
    {isExpanded && (
      <button
        onClick={onCollapse}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          color: '#000',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '3px 7px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        X
      </button>
    )}
    {!isExpanded && (
      <button
        onClick={onExpand}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          color: '#333',
        }}
      >
        ...
      </button>
    )}
  </VerticalTimelineElement>
);

export const Experiences = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleCollapse = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section id="experiences">
      <div style={{ paddingTop: '60px', display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
      <p style={{ fontSize: '20px', fontStyle: 'italic', textAlign: 'center', color: '#666' }}>What I've done so far..</p>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Work Experience</h2>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isExpanded={expandedCards[index]}
              onExpand={() => toggleExpand(index)}
              onCollapse={() => toggleCollapse(index)}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>School Experience</h2>
        <VerticalTimeline>
          {schoolExperiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isExpanded={expandedCards[index]}
              onExpand={() => toggleExpand(index)}
              onCollapse={() => toggleCollapse(index)}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
