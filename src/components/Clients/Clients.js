import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "./ClientCards";
import carrefour from "../../Assets/Projects/carrefour.png";
import bouygues_telecom from "../../Assets/Projects/bouygues_telecom.png";
import casino from "../../Assets/Projects/Groupe_Casino.png";
import societe_generale from "../../Assets/Projects/Societe_generale.png";
import holimeet from "../../Assets/Projects/holimeet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Clients </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few companies and projects I've contributed to recently.

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ClientCard
              imgPath={carrefour}
              isBlog={false}
              title="Carrefour"
              description="Groupe Carrefour, founded in 1959, is a leading French multinational retail corporation known for its extensive network of hypermarkets, supermarkets, and convenience stores in over 30 countries. The company is committed to sustainability and innovation, offering a wide range of products and leveraging technology to enhance the shopping experience."
              demoLink="https://fr.wikipedia.org/wiki/Groupe_Carrefour"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={bouygues_telecom}
              isBlog={false}
              title="Bouygues Telecom"
              description="Bouygues Telecom is a major French telecommunications company, founded in 1994, providing a wide range of services including mobile, fixed-line, television, and internet services. Known for its innovative offerings and extensive network coverage, Bouygues Telecom is a key player in the French telecom market, committed to enhancing connectivity and customer experience."
              demoLink="https://fr.wikipedia.org/wiki/Bouygues_Telecom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={casino}
              isBlog={false}
              title="Groupe Casino"
              description="Groupe Casino, founded in 1898, is a prominent French multinational retail group operating a variety of store formats including hypermarkets, supermarkets, and convenience stores. The company is known for its strong presence in France and Latin America, and it emphasizes innovation, digital transformation, and sustainability in its operations."
              demoLink="https://fr.wikipedia.org/wiki/Groupe_Casino"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={societe_generale}
              isBlog={false}
              title="Société Générale Maroc"
              description="Société Générale Maroc, also known as SG Maroc, is the Moroccan subsidiary of Société Générale Group, a leading French multinational banking and financial services company. Established in Morocco, SG Maroc offers a wide range of banking services including retail banking, corporate and investment banking, asset management, and insurance. The bank leverages its international expertise while adapting its services to meet the specific needs of the Moroccan market, focusing on innovation, customer satisfaction, and sustainable development."
              demoLink="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_g%C3%A9n%C3%A9rale_Maroc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ClientCard
              imgPath={holimeet}
              isBlog={false}
              title="Holimeet"
              description="MyGLADYS for professional appointment booking."
              demoLink="https://www.facebook.com/Holimeet.fr/"  
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
