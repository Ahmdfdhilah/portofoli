import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flower from "../../Assets/Projects/flower.png";
import porto from "../../Assets/Projects/porto.png";
import gauss from "../../Assets/Projects/gauss.png";
import ecommerce from "../../Assets/Projects/backend.png";
import kosjo from "../../Assets/Projects/kosjo.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="backend e-commerce with sql databases and litle bit of styling"
              description="im using next js for building this website, the feature on this web is quite simple"
              ghLink="https://github.com/Ahmdfdhilah/backend__toko"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flower}
              isBlog={false}
              title="Flower pop up website"
              description="you can send it to your lover, this is quite trend in tiktok."
              ghLink="https://github.com/Ahmdfdhilah/Moodbooster"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Personal Portofolio Website"
              description="My own personal portofolio website, created with react js"
              ghLink="https://github.com/Ahmdfdhilah/portofoli"
              demoLink="https://ahmdfdhilah.github.io/portofoli/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kosjo}
              isBlog={false}
              title="future website for my friends"
              description="i just bored and create a new website in case some of my friends want to build a startup project"
              ghLink="https://github.com/Ahmdfdhilah/Kosjo"
              demoLink="https://ahmdfdhilah.github.io/Kosjo/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
