import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flower from "../../Assets/Projects/flower.png";
import porto from "../../Assets/Projects/porto.png";
import gauss from "../../Assets/Projects/gauss.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flower}
              isBlog={false}
              title="Flower pop up website"
              description="you can send it to your lover, this is quite trend in tiktok."
              ghLink="https://github.com/Ahmdfdhilah/Moodbooster"
              demoLink="https://ahmdfdhilah.github.io/Moodbooster/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Personal Portofolio Website"
              description="My own personal portofolio website, created with react js"
              ghLink="https://github.com/Ahmdfdhilah/portofoli"
              demoLink= "https://ahmdfdhilah.github.io/portofoli/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gauss}
              isBlog={false}
              title="Gauss Eleminations Calculator"
              description="You can solve A system of linear equations by using gauss elimination algorithms"
              ghLink="https://github.com/Ahmdfdhilah/Gauss_Elim"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
