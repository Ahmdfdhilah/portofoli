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
    title: "Frontend Engineer",
    company: "Bank Indonesia Lampung",
    period: "February – June 2024, May 2025 - Present",
    type: "Project Based",
    description: "Developed and maintained a comprehensive competition management system frontend using React, TypeScript, and Tailwind CSS with modern UI components from shadcn/ui and Radix UI. Collaborated with backend services through RESTful APIs, implementing proper error handling, loading states, and responsive design patterns across multiple user roles (participants, providers, administrators)."
  },
  {
    title: "Web Developer",
    company: "Arga Bumi Indonesia",
    period: "February 2025 - Present",
    type: "Remote",
    description: "Developed four scalable micro services for a Performance Management System, Company Profile Website. Built backend services using FastAPI, PostgreSQL, and Redis with clean architecture and maintainable code structure. Worked closely with stakeholders to refine features, ensuring the final products met operational needs and user expectations."
  },
  {
    title: "Lab Assistant (Website Programming)",
    company: "Institut Teknologi Sumatera",
    period: "February – June 2025",
    type: "Lampung",
    description: "Provided on-demand technical assistance, troubleshooting issues and offering solutions to enhance students' understanding and productivity. Mentored students with patience and passion, guiding them through tech challenges to achieve newfound expertise."
  },
  {
    title: "Intern Web Developer",
    company: "OKOCE Indonesia",
    period: "June - August 2024",
    type: "Jakarta",
    description: "Led the complete backend migration of okoce.net from legacy architecture to NestJS, resulting in improved system performance, code maintainability, and scalability. Assisted in the development and maintenance of multiple internal and external websites for the organization. Acted as a support engineer, staying on standby to respond to and troubleshoot system errors."
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    period: "January 2022 - Present",
    type: "Remote",
    description: "Delivered various web-based solutions including company profile websites, dashboards, e-commerce platforms, e-learning systems, and HRIS (leave & payroll). Built custom tools such as web scrapers and dataset annotation platforms. Conducted data cleaning and developed AI models for client-specific use cases. Focused on scalable and maintainable systems using modern frameworks and best practices."
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
          viewport={{ once: true, amount: 0.05 }}
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
