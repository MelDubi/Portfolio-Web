import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
          <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
          <a href="#"><img src={navIcon2} alt="Facebook" /></a>
          <a href="#"><img src={navIcon3} alt="Instagram" /></a>
        </div>
        <NavbarToggle aria-controls="navbar-nav" onClick={handleToggle} />
        <NavbarCollapse id="navbar-nav" in={menuOpen}>
          <Nav className="navbar-nav">
            {['home', 'experiences', 'skills', 'projects', 'passions','contact'].map((section) => (
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