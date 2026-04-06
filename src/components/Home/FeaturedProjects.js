import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import placeholder from "../../Assets/Projects/placeholder.svg";
import jejama from "../../Assets/Projects/jejama.png";
import eParking from "../../Assets/Projects/keran.jpg";

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
    desc: "Automated OCR validation system processing QRIS receipts with 95% accuracy. Scalable microservices with RabbitMQ async processing and Redis-based fraud detection.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null
  },
  {
    img: placeholder,
    alt: "Archival Management System",
    title: "Archival Management – Kemenko RI",
    desc: "Digital archival system for centralized document storage, RBAC compliance, and audit-ready tracking for a government ministry.",
    github: "https://github.com/Ahmdfdhilah",
    demo: null
  },
  {
    img: eParking,
    alt: "E-Parking System",
    title: "E-PARKING – ITERA",
    desc: "Smart vehicle access control with RFID multi-factor authentication and license plate recognition using Python, MQTT, and IoT technologies.",
    github: "https://github.com/Ahmdfdhilah/keran_kitera_mfa",
    demo: null
  }
];

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
              <Col xs={12} md={4} className="project-card" key={i}>
                <motion.div variants={fadeUp}>
                  <Card className="featured-project-card">
                    <Card.Img variant="top" src={p.img} alt={p.alt} />
                    <Card.Body>
                      <Card.Title style={{ color: "var(--primary)", fontSize: "1.2em" }}>
                        {p.title}
                      </Card.Title>
                      <Card.Text style={{ color: "var(--foreground)", textAlign: "justify" }}>
                        {p.desc}
                      </Card.Text>
                      <div className="featured-project-buttons">
                        <Button
                          href={p.github}
                          target="_blank"
                          variant="outline-primary"
                          size="sm"
                          style={{ marginRight: "10px", borderColor: "var(--accent-text)", color: "var(--accent-text)" }}
                        >
                          <AiOutlineGithub /> Code
                        </Button>
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
