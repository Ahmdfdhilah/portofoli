import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import porto from "../../Assets/Projects/porto.png";
import gauss from "../../Assets/Projects/gauss.png";
import ecommerce from "../../Assets/Projects/backend.png";
import pyGame from "../../Assets/Projects/apocalypseDominator.png";
import bookshelfApi from "../../Assets/Projects/bookshelfAPI.png";
import webSekolah from "../../Assets/Projects/websekolah.png";
import pemira from "../../Assets/Projects/pemira.png";


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
              imgPath={webSekolah}
              isBlog={false}
              title="Website Sekolah SMP YPI 1 Braja Selebah Lampung Timur"
              description="im building this project using laravel and tailwind, this include the CMS for admin using voyager"
              ghLink="https://github.com/Ahmdfdhilah/kapsel"
              demoLink="https://smpypi1brajaselebah.sch.id"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="backend e-commerce with sql database"
              description="im using next js for building this website, the feature on this web is quite simple"
              ghLink="https://github.com/Ahmdfdhilah/backend__toko"
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
              ghLink="https://github.com/Ahmdfdhilah/Gauss__Elim"
              demoLink="https://replit.com/@AhmadFadillah16/gausselim#main.py"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyGame}
              isBlog={false}
              title="Apocalypse Dominator"
              description="Apocalypse Dominator is a first-person game. This game is made using the Python and the Pygame library"
              ghLink="https://github.com/Ahmdfdhilah/tubes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pemira}
              isBlog={false}
              title="Profile Web Pemilihan Umum Raya ITERA"
              description="Project Website of PEMIRA developed by Voting Staff, i am one of them "
              ghLink="https://github.com/PemiraITERA/Pemira2023"
              demoLink="https://pemirakmitera.my.id/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshelfApi}
              isBlog={false}
              title="Bookshelf API"
              description="API that handles a CRUD requests about bookshelf using javascript and hapi framework"
              ghLink="https://github.com/Ahmdfdhilah/bookshelf_API"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;