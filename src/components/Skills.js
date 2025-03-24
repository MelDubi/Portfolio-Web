import React, { useEffect, useState, useRef } from 'react';
import code from "../assets/icons/code.png";
import ide from "../assets/icons/ide.png";
import github from "../assets/icons/github.png";
import usb from "../assets/icons/usb.png";
import microchip from "../assets/icons/microchip.png";
import oscilloscope from "../assets/icons/oscilloscope.png";
import periph from "../assets/icons/periph.png";
import langue from "../assets/icons/langue.png";
import logiciel from "../assets/icons/logiciel.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(4); // Initialiser au skill du milieu
  const carouselRef = useRef(null); // Référence pour le carrousel

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "Langages de programmation", list: ["C", "C++", "Python", "Visual Basic", "Javascript", "VHDL"], icon: code },
    { name: "IDE", list: ["PyCharm", "Cube IDE", "Keil", "QT", "Visual Studio", "VS Code"], icon: ide },
    { name: "Outil de versionnement", list: ["Git (GitHub, GitLab)"], icon: github },
    { name: "Interfaces", list: ["RS232", "UART", "I2C", "SPI", "CAN"], icon: usb },
    { name: "Périphériques et gestion du matériel", list: ["GPIO", "ADC", "DAC", "Timers"], icon: microchip },
    { name: "Systèmes embarqués", list: ["Texas instrument", "ST Microelectronics", "Raspberry Pi", "Arduino", "Linux", "FreeRTOS"], icon: periph },
    { name: "Outils", list: ["Analyseurs logiques", "oscilloscope"], icon: oscilloscope },
    { name: "Logiciels", list: ["Pack office", "Matlab", "Proteus Isis", "XCAS"], icon: logiciel },
    { name: "Langues", list: ["Français (langue maternelle)", "Anglais (TOEIC)", "Espagnol (B2)"], icon: langue }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
    carouselRef.current.goToSlide(index);
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p 
              className="what-i-know"
              style={{ 
                fontSize: '20px', 
                fontStyle: 'italic', 
                textAlign: 'center', 
                color: '#666', 
                marginBottom: '20px'
              }}>
              Ce que je connais..
            </p>

            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: '60px', textAlign: 'center' }}>Skills</h2>
              <Carousel 
                ref={carouselRef}
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-40-px"
                arrows={false} 
                autoPlay={false}
                swipeable={true}
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div 
                      style={{
                        width: '120px',    
                        height: '120px',   
                        borderRadius: '50%', 
                        backgroundColor: skill.icon === github ? 'transparent' : '#fff',  
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        padding: skill.icon === github ? '0' : '5px',  
                        marginTop: '10px'  
                      }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        style={{
                          width: skill.icon === github ? '100%' : skill.icon === ide ? '85%' : '75%',  
                          marginTop: skill.icon !== github ? '10px' : '0'  
                        }} 
                      />
                    </div>
                    <h5 style={{ textAlign: 'center', marginTop: '25px' }}>{skill.name}</h5>
                    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                      {skill.list.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '8px', fontSize: '16px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Carousel>

              <div className="carousel-bullets" style={{ textAlign: 'center', marginTop: '20px' }}>
                {skills.map((_, index) => (
                  <span 
                    key={index}
                    onClick={() => handleDotClick(index)} 
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: activeIndex === index ? '#fff' : 'transparent',  
                      border: '2px solid #fff',  
                      margin: '0 5px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

