import  { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import jejama from "../../Assets/Projects/jejama.png";
import argabumi from "../../Assets/Projects/argabumi.png";
import hris from "../../Assets/Projects/hris.png";
import ImageModal from "../ImageModal";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const projects = [
  {
    img: jejama,
    alt: "JEJAMA QRIS",
    title: "JEJAMA QRIS – Bank Indonesia",
    desc: "OCR-based validation system for QRIS receipts with high accuracy. Built using scalable microservices architecture with RabbitMQ for async processing and Redis for fraud detection.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null
  },
  {
    img: argabumi,
    title: "Company Profile – Arga Bumi Indonesia",
    desc: "Corporate website showcasing company services, portfolio, and organizational information. Features a modern responsive UI with integrated SSO for seamless content management.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "React (TypeScript), Tailwind CSS, FastAPI, PostgreSQL, Docker"
  },
  {
    img: hris,
    title: "HRIS – Arga Bumi Indonesia",
    desc: "Integrated HR system covering attendance, leave, payroll, and organizational management. Supports real-time processing and background jobs using Celery, RabbitMQ, and Redis in a production-ready architecture.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null,
    stack: "FastAPI, PostgreSQL, Redis, React (TypeScript), Tailwind, Celery, RabbitMQ, Docker"
  },
];

function FeaturedProjectCard({ p }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card className="featured-project-card">
        <div className="project-img-trigger" onClick={() => setModalOpen(true)}>
          <Card.Img variant="top" src={p.img} alt={p.alt} />
        </div>
        <Card.Body>
          <Card.Title style={{ color: "var(--primary)", fontSize: "1.2em" }}>
            {p.title}
          </Card.Title>
          <Card.Text style={{ color: "var(--foreground)", textAlign: "justify" }}>
            {p.desc}
          </Card.Text>
          <div className="featured-project-buttons">
            {/* <Button
              href={p.github}
              target="_blank"
              variant="outline-primary"
              size="sm"
              style={{ marginRight: "10px", borderColor: "var(--accent-text)", color: "var(--accent-text)" }}
            >
              <AiOutlineGithub /> Code
            </Button> */}
            {p.demo && (
              <Button
                href={p.demo}
                target="_blank"
                variant="primary"
                size="sm"
                style={{ backgroundColor: "var(--primary-dark)", borderColor: "var(--primary-dark)" }}
              >
                <AiOutlineEye /> Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <ImageModal
        src={p.img}
        alt={p.alt}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

function FeaturedProjects() {
  return (
    <Container fluid className="featured-projects-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Row>
            <Col md={12} style={{ paddingBottom: "20px" }}>
              <h1 className="project-heading">
                Featured <strong className="purple">Projects</strong>
              </h1>
              <p style={{ color: "var(--foreground)", textAlign: "center" }}>
                Here are some of my recent work highlights
              </p>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {projects.map((p, i) => (
              <Col xs={12} md={4} className="project-card d-flex" key={i}>
                <motion.div variants={fadeUp}>
                  <FeaturedProjectCard p={p} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <Button
                as={Link}
                to="/project"
                variant="primary"
                size="lg"
                style={{
                  backgroundColor: "var(--primary-dark)",
                  borderColor: "var(--primary-dark)",
                  padding: "12px 40px"
                }}
              >
                View All Projects
              </Button>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default FeaturedProjects;
