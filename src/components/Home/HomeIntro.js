import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiOutlineUser } from "react-icons/ai";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

function HomeIntro() {
  return (
    <Container fluid className="home-intro-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingBottom: "50px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h1 className="project-heading" variants={fadeUp}>
                LET ME <strong className="purple">INTRODUCE</strong> MYSELF
              </motion.h1>

              <motion.blockquote
                className="blockquote mb-0"
                style={{ color: "white" }}
                variants={fadeUp}
              >
                <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
                  I'm a <strong className="purple">Software Engineer</strong> with hands-on experience
                  building scalable internal systems and enterprise applications using modern web technologies.
                  Strong background in full-stack development with{" "}
                  <strong className="purple">Go, Python, and TypeScript</strong>, complemented by real-world
                  projects across government and organizational platforms.
                  <br /><br />
                  My expertise spans <strong className="purple">modular architecture</strong>,{" "}
                  <strong className="purple">SSO & HRIS systems</strong>, and delivering production-ready
                  solutions with Docker, RabbitMQ, Redis, and cloud infrastructure.
                </p>
              </motion.blockquote>

              <motion.div variants={fadeUp}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "30px" }}>
                  <Button
                    as={Link}
                    to="/about"
                    size="lg"
                    className="hero-btn-primary"
                    style={{ minWidth: "180px" }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <AiOutlineUser />
                      About Me
                    </span>
                  </Button>

                  <Button
                    href={`${process.env.PUBLIC_URL}/CV_Ahmad Fadillah.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="hero-btn-outline"
                    style={{ minWidth: "180px" }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <AiOutlineDownload />
                      Download CV
                    </span>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeIntro;
