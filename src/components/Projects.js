import { useState, useEffect, useRef } from "react"; 
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import compilateur from "../assets/img/compilateur.jpg";
import machine from "../assets/img/machine-learning.jpg";
import son from "../assets/img/son.jpg";
import boat from "../assets/img/boat.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import microprocesseur from "../assets/img/microprocesseur.jpg";

export const Projects = () => {
  const [columnCount, setColumnCount] = useState(3); // Par défaut, 3 colonnes
  const sectionRef = useRef(null);

  const projects = [
    { title: "Compilateur", description: "Création d'un language permettant la réalisation de plan de maison à partir d'un texte ou d'un mode interactif.", imgUrl: compilateur, url: "https://github.com/MelDubi/depot-ensta-compilateur" },
    { title: "Machine learning", description: "Travaux effectués à l'Ensta Bretagne en Machine Learning", imgUrl: machine, url: "https://github.com/MelDubi/depot-ensta-python" },
    { title: "Traitement du son", description: "Enregistrement d'un son de quelques secondes sur une carte STM32 fourni via un micro MEMS et rejoué sur des hauts-parleurs via un DAC.", imgUrl: son, url: "https://github.com/MelDubi/depot-ensta-STM32-Traitement-Son" },
    { title: "Smart boat", description: "Ce projet met en œuvre un système intelligent intégrant une interface graphique basé sur egui et une commande vocale pour le contrôle d'une maquette de bateau. Différents capteurs de navigation et des moteurs permettent de simuler une navigation en sécurité et assisté.", imgUrl: boat, url: "https://github.com/MelDubi/depot-smart-boat" },
    { title: "Portfolio", description: "Projet pour designer et déployer ce Portfolio", imgUrl: portfolio, url: "https://github.com/MelDubi/Portfolio-Web" },
    { title: "Coming soon..", description: "Microprocesseur", imgUrl: microprocesseur, url: "https://github.com/MelDubi/depot-ensta-microprocesseur" },
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
              Ce que j'ai fait..
            </p>
            <h2>Projets</h2>
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