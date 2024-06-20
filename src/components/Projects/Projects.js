import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import porto from "../../Assets/Projects/porto.png";
import gauss from "../../Assets/Projects/gauss.png";
import pyGame from "../../Assets/Projects/apocalypseDominator.png";
import gadget from "../../Assets/Projects/gadget.png";
import approval from "../../Assets/Projects/approval.png";
import webSekolah from "../../Assets/Projects/websekolah.png";
import pemira from "../../Assets/Projects/pemira.png";
import kkn from "../../Assets/Projects/kkn.png";

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
              title="SMP ISLAM YPI 1 BRAJA SELEBAH WEBSITE"
              description="Developed a dynamic website for SMP YPI 1 Braja Selebah utilizing Laravel framework, complete with an intuitive admin dashboard. The platform facilitates seamless management of school-related tasks, including student records, academic resources, and enhancing efficiency and accessibility for administrators, teachers, and students alike.Leading and orginazing project SMP ISLAM YPI 1 BRAJA SELEBAH school information system"
              ghLink="https://github.com/Ahmdfdhilah/kapsel"
              demoLink="https://smpypi1brajaselebah.sch.id"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gadget}
              isBlog={false}
              title="Gadget Store"
              description="Developed a full-stack e-commerce store system to manage and optimize online retail operations, integrating modern technologies to ensure scalability, security, and efficiency. The backend was built using NestJS, with MySQL as the database, Redis for caching, and Docker for environment management. JWT was used for  authentication, and Midtrans for payment gateway. The frontend was developed using React.js, and RajaOngkir was integrated for shipping calculations and logistics."
              ghLink="https://github.com/Ahmdfdhilah/gadget_store"
              demoLink="https://trust-shop.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Personal Portofolio Website"
              description="Crafted a Personal Portfolio Website using React.js, showcasing a blend of creativity and technical expertise. Implemented responsive design principles to ensure optimal viewing experiences across devices. Leveraged React's component-based architecture to streamline development and enhance maintainability. Incorporated interactive elements and animations to engage visitors and highlight projects and skills effectively. Resulted in a dynamic and professional online presence, demonstrating proficiency in both web development and React.js framework."
              ghLink="https://github.com/Ahmdfdhilah/portofoli"
              demoLink="https://ahmdfdhilah.github.io/portofoli/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gauss}
              isBlog={false}
              title="Gauss Eleminations Calculator"
              description="A powerful tool for solving systems of linear equations using the Gauss elimination algorithm. This calculator simplifies the process of finding solutions by transforming the system into an upper triangular matrix and then performing back substitution. The application is designed to handle various types of linear equations and provides detailed step-by-step solutions, making it an excellent resource for students and professionals alike."
              ghLink="https://github.com/Ahmdfdhilah/Gauss__Elim"
              demoLink="https://replit.com/@AhmadFadillah16/gausselim#main.py"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pyGame}
              isBlog={false}
              title="Apocalypse Dominator"
              description="Apocalypse Dominator is an immersive first-person game set in a post-apocalyptic world, where players must navigate through a desolate landscape, battling enemies, and overcoming various challenges to survive. This game is developed using Python and the Pygame library, providing a rich and engaging experience."
              ghLink="https://github.com/Ahmdfdhilah/tubes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pemira}
              isBlog={false}
              title="Profile Web Pemilihan Umum Raya ITERA"
              description="Profile Web Pemilihan Umum Raya (PEMIRA) ITERA is a comprehensive website developed to manage and showcase the election process at Institut Teknologi Sumatera (ITERA). This project is built by the Voting Staff to provide transparent and efficient handling of the election events, ensuring fair and accessible participation for all students."
              ghLink="https://github.com/PemiraITERA/Pemira2023"
              demoLink="https://pemirakmitera.my.id/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kkn}
              isBlog={false}
              title="Green Website Sri Sawahan"
              description="Website that explains Sri Sawahan village, contains plant data and the distribution of green maps in the village, build in next js"
              ghLink="https://github.com/Ahmdfdhilah/kkn_srisawahan"
              demoLink="https://kkn-itera-90.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={approval}
              isBlog={false}
              title="Distributed Approval System"
              description="Developed a cloud-based approval system with modern design UI, that automates the approval process for various internal requests within a company, such as purchase requests, leave applications, or budget requests.Using Power Apps, Power Automate, Sharepoints."
              demoLink="https://apps.powerapps.com/play/e/default-d7b95ec4-9a7f-4260-b2e3-eb53f0ac8401/a/63c32fdc-ce5e-4e85-8f77-2b9dd19f9745?tenantId=d7b95ec4-9a7f-4260-b2e3-eb53f0ac8401&sourcetime=1717948051360&source=portal"
              ghLink="https://github.com/Ahmdfdhilah/cryptonexa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;