import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { github, linkedIn, instagram } from '../assets';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false); // Ferme le menu immédiatement
  
    setTimeout(() => {
      const section = document.querySelector(`#${value}`);
      if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const topOffset = section.offsetTop - navbarHeight;
  
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 300); // Délai pour laisser le temps à la navbar de se refermer
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "navbar-toggler-active" : ""}`}>
      <Container>
        <div className="social-icon">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/MelDubi" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/melvin.dubee/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <NavbarToggle aria-controls="navbar-nav" onClick={handleToggle} />
        <NavbarCollapse id="navbar-nav" in={menuOpen}>
          <Nav className="navbar-nav">
            {['home', 'experiences', 'skills', 'projects', 'passions', 'contact'].map((section) => (
              <Nav.Link
                key={section}
                onClick={() => onUpdateActiveLink(section)}
                className={activeLink === section ? 'active navbar-link' : 'navbar-link'}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};