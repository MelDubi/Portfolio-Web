import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'white' }} // Ajout du style pour rendre le texte blanc
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 style={{ color: 'white' }}>{title}</h4> {/* Ajout du style pour rendre le titre blanc */}
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};