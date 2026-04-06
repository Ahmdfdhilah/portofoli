import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import eParking from "../../Assets/Projects/keran.jpg";
import gadget from "../../Assets/Projects/gadget.png";
import okoce from "../../Assets/Projects/okoce.png";

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
    img: eParking,
    alt: "ITERA E-PARKING",
    title: "ITERA E-PARKING SYSTEM",
    desc: "Smart vehicle access control system with RFID and license plate recognition using Python, React, and IoT technologies.",
    github: "https://github.com/Ahmdfdhilah/keran_kitera_mfa",
    demo: null
  },
  {
    img: gadget,
    alt: "Gadget Store",
    title: "GADGET STORE SYSTEM",
    desc: "Full-stack e-commerce platform with NestJS backend, React frontend, and integrated payment system.",
    github: "https://github.com/Ahmdfdhilah/gadget_store",
    demo: "https://trust-ahmdfdhilahs-projects.vercel.app"
  },
  {
    img: okoce,
    alt: "OK OCE Net",
    title: "OK OCE NET",
    desc: "Full-stack application with NestJS backend migration and React frontend, containerized with Docker.",
    github: "https://github.com/Ahmdfdhilah/okocenet",
    demo: "https://okocenet.vercel.app/"
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
