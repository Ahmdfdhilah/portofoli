import { Container, Row, Col } from "react-bootstrap";
import SEO from "../SEO";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import placeholder from "../../Assets/Projects/placeholder.svg";
import jejama from "../../Assets/Projects/jejama.png";
import eParking from "../../Assets/Projects/keran.jpg";
import pmArga from "../../Assets/Projects/pmArga.png";
import argabumi from "../../Assets/Projects/argabumi.png";
import link from "../../Assets/Projects/link.png";
import analytics from "../../Assets/Projects/analytics.png";
import hris from "../../Assets/Projects/hris.png";
import sielang from "../../Assets/Projects/sielang.png";
import braja from "../../Assets/Projects/braja.png";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const projects = [
   {
    img: hris,
    title: "HRIS – Arga Bumi Indonesia",
    desc: "Streamlined key HR functions including attendance, leave, payroll, and organizational management into a single, unified system. Enabled real-time attendance logging and background processing of emails, payroll, and notifications using Celery and RabbitMQ. Ensured production stability with Dockerized deployment, NGINX-based frontend delivery, Redis clustering, automated backups, and systemd service monitoring.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "FastAPI, PostgreSQL, Redis, React (TypeScript), Tailwind, Celery, RabbitMQ, Docker"
  },
  {
    img: argabumi,
    title: "Company Profile – Arga Bumi Indonesia",
    desc: "Corporate website for Arga Bumi Indonesia showcasing company services, portfolio, and organizational information. Built with a modern, responsive design and integrated with the internal SSO ecosystem for admin content management.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "React (TypeScript), Tailwind CSS, FastAPI, PostgreSQL, Docker"
  },
  {
    img: link,
    title: "Arga Link – Arga Bumi Indonesia",
    desc: "Internal file sharing and link management platform similar to Google Drive, featuring short link generation, file storage, access control, and shareable link expiry. Designed to centralize document distribution across the organization.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "FastAPI, PostgreSQL, GCS, React (TypeScript), Tailwind CSS, Redis, Docker"
  },
  {
    img: analytics,
    title: "Arga Analytics – Arga Bumi Indonesia",
    desc: "B2B analytics platform for a coffee agribusiness covering the full supply chain  procurement, inventory, warehouse, commercial sales, buyer analysis, global market pricing, farmer performance, finance, and HR attendance. Provides strategic cross-department insights with role-based access and master data management.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "FastAPI, PostgreSQL, React (TypeScript), Tailwind CSS, Redux Toolkit, Docker"
  },

  {
    img: pmArga,
    title: "Performance Management System – Arga Bumi Indonesia",
    desc: "Part of the interconnected internal enterprise ecosystem at Arga Bumi Indonesia. Architected as a microservice with SSO integration, enabling tight coupling with HRIS as single source of truth for employee data. Delivered executive-level analytics dashboards aggregating data across multiple systems.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "FastAPI, PostgreSQL, Redis, React (TypeScript), Tailwind CSS, Docker"
  },
  {
    img: jejama,
    title: "JEJAMA QRIS Competition – Bank Indonesia",
    desc: "Automated OCR validation system that processes QRIS transaction receipts with 95% accuracy, eliminating manual verification and enabling real-time competition scoring. Scalable microservices architecture using RabbitMQ async processing. Fraud detection with Redis-based duplicate prevention and authenticity checks.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "Go (Fiber), PostgreSQL, JWT, React (TypeScript), RabbitMQ, Redis, GCS, OCR API, Tailwind CSS"
  },
  {
    img: sielang,
    title: "Performance Evaluation System – Kemendag RI",
    desc: "Comprehensive evaluation workflow automation with automated surat tugas generation, meeting management, and questionnaire systems, streamlining government evaluation processes. Monorepo architecture using Turborepo with shared UI packages, enabling scalable development and consistent design across multiple evaluation modules.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "Python (FastAPI), PostgreSQL, React (TypeScript), Turborepo, Redux Toolkit, Tailwind CSS, JWT"
  },
  {
    img: placeholder,
    title: "Archival Management System – Kemenko Bidang Pangan RI",
    desc: "Developed a digital archival management system to centralize document storage, classification, and retrieval across departments. Implemented secure role-based access control to ensure document confidentiality and compliance with government data governance standards. Enabled fast search, structured categorization, and audit-ready document tracking.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "Go, PostgreSQL, React (TypeScript), Tailwind CSS, JWT"
  },
 
  {
    img: eParking,
    title: "E-PARKING SYSTEM – Sumatera Institute of Technology",
    desc: "Improved vehicle access security through multi-factor authentication (RFID cards, RFID stickers, and license plate recognition), significantly reducing unauthorized entry attempts. Enhanced system scalability and responsiveness through modular backend architecture and efficient state management. Delivered a seamless and responsive user interface that streamlined on-site operations.",
    github: "https://github.com/Ahmdfdhilah/keran_kitera_mfa",
    demo: null,
    stack: "Python (Pyramid), PostgreSQL, React (TypeScript), Tailwind CSS, Redux, MQTT, Redis"
  },
  {
    img: braja,
    title: "School Profile & CMS – SMP Braja Selebah",
    desc: "Developed a comprehensive school profile website featuring a custom Content Management System (CMS) for managing school news, faculty data, academic documents, and student information. Designed to improve digital presence and streamline information distribution for students and parents.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "Laravel, MySQL, Bootstrap, PHP"
  },
  
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <SEO
        title="Projects"
        description="Browse Ahmad Fadillah's portfolio of projects — including HRIS, School Profile & CMS, analytics platforms, QRIS competition systems, and more built with React, FastAPI, Go, and Laravel."
        path="/project"
        keywords="Ahmad Fadillah projects, HRIS, School Profile, Laravel CMS, analytics, QRIS, e-parking, FastAPI, React TypeScript, Go, microservices"
      />
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((p, i) => (
              <Col md={4} className="project-card d-flex" key={i}>
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    imgPath={p.img}
                    isBlog={false}
                    title={p.title}
                    description={`${p.desc}\n\nStack: ${p.stack}`}
                    ghLink={p.github}
                    demoLink={p.demo}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
