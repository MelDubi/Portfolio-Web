import { useRef, useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import comming from "../assets/img/black-concrete-wall.jpg";

export const Projects = () => {
  const sectionRef = useRef(null); // Référence à la section

  const projects = [
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
    { title: "Coming soon..", description: "Design & Development", imgUrl: comming },
  ];

  return (
    <section className="project" id="projects" ref={sectionRef}>
      <Container>
        <Row>
          <Col size={12}>
          <p style={{ fontSize: '20px', fontStyle: 'italic', textAlign: 'center', color: '#666' }}>
            What I do..
          </p>
            <h2>Projects</h2>
            <p>Voici quelques-uns de mes projets réalisés durant mon cursus scolaire ainsi que sur mon temps libre.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    {projects.map((project, index) => (
                      <Col key={index} className="project-col">
                        <ProjectCard {...project} />
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