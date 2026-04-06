import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import WorkExperienceCard from "./WorkExperienceCard";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const experiences = [
  {
    title: "Software Engineer",
    company: "Arga Bumi Indonesia",
    period: "February 2025 – February 2026",
    type: "Remote",
    description: "Architected and developed interconnected internal enterprise systems using a scalable microservices approach. Established Single Sign-On (SSO) as a unified access layer for all internal applications. Centralized employee data within HRIS as the single source of truth, enabling tight integration with Performance Management and other internal systems. Delivered end-to-end analytics dashboards that aggregate data from multiple systems to support executive-level decision making."
  },
  {
    title: "Intern Web Developer",
    company: "OKOCE Indonesia",
    period: "June – August 2024",
    type: "Jakarta",
    description: "Led the complete backend migration of okoce.net from legacy architecture to NestJS, resulting in improved system performance, code maintainability, and scalability. Assisted in the development and maintenance of multiple internal and external websites for the organization. Acted as a support engineer, staying on standby to respond to and troubleshoot system errors in the organization's information systems, ensuring minimal downtime and smooth operations."
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    period: "January 2022 – Present",
    type: "Remote",
    description: "Delivered client-requested web solutions across multiple domains for small to medium businesses and organizations. Implemented features and system flows strictly aligned with client specifications, timelines, and business needs. Built supporting tools such as web scrapers and data processing utilities to fulfill specific project requirements. Ensured solutions were stable, maintainable, and ready for production use."
  }
];

function WorkExperience() {
  return (
    <Container fluid className="work-experience-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col style={{ paddingTop: "120px", paddingBottom: "50px" }}>
              <h1 className="project-heading">
                My <strong className="purple">Work Experience</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center" }}>
                Here are some of the professional experiences I've gained.
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
            {experiences.map((exp, i) => (
              <Col xs={12} md={6} lg={4} className="project-card" key={i}>
                <motion.div variants={fadeUp} style={{ height: "100%" }}>
                  <WorkExperienceCard {...exp} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default WorkExperience;
