import { useState, useEffect, useRef } from "react"; 
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import comming from "../assets/img/black-concrete-wall.jpg";

export const Projects = () => {
  const [columnCount, setColumnCount] = useState(3); // Par défaut, 3 colonnes
  const sectionRef = useRef(null);

  const projects = [
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
  ];

  useEffect(() => {
    const handleResize = () => {
      // On ajuste la colonne en fonction de la largeur de l'écran
      if (window.innerWidth >= 1800) {
        setColumnCount(3); // 3 colonnes pour les grands écrans
      } else if (window.innerWidth >= 1080) {
        setColumnCount(2); // 2 colonnes pour les écrans moyens
      } else {
        setColumnCount(1); // 1 colonne pour les petits écrans
      }
    };

    handleResize(); // On appelle une première fois pour définir la valeur de `columnCount`

    // Ajout d'un écouteur pour redimensionner
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Nettoyage
  }, []);

  return (
    <section className="project" id="projects" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center">
          <Col size={12}>
            <p style={{ fontSize: '20px', fontStyle: 'italic', textAlign: 'center', color: '#666' }}>
              What I do..
            </p>
            <h2>Projects</h2>
            <p>Voici quelques-uns de mes projets réalisés durant mon cursus scolaire ainsi que sur mon temps libre.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    {projects.map((project, index) => (
                      <Col
                        key={index}
                        className="project-col"
                        style={{
                          display: 'flex', 
                          justifyContent: 'center', // Centrer les cartes dans chaque colonne
                          marginBottom: '20px',
                          padding: '0', // Pas de padding pour les colonnes
                        }}
                      >
                        <div style={{ width: '400px' }}> {/* Largeur fixe pour chaque carte */}
                          <ProjectCard {...project} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};