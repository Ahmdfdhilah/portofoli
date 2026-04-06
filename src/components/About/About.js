import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../SEO";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Credentials from "./Credentials";
import Aboutcard from "./AboutCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function About() {
  return (
    <Container fluid className="about-section">
      <SEO
        title="About"
        description="Learn about Ahmad Fadillah — his background, technical skills, and credentials. Proficient in React, TypeScript, FastAPI, Go, PostgreSQL, Docker, and more."
        path="/about"
        keywords="About Ahmad Fadillah, skills, techstack, credentials, React TypeScript FastAPI Go PostgreSQL Docker"
      />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>
              <Aboutcard />
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <h1 className="project-heading">
            My <strong className="purple">Credentials</strong>
          </h1>
          <Credentials />
        </motion.div>
      </Container>
    </Container>
  );
}

export default About;
