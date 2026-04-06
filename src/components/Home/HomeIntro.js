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
                  I've built systems for <strong className="purple">Kemenko Bidang Pangan RI</strong>,{" "}
                  <strong className="purple">Kemendag RI</strong>, and{" "}
                  <strong className="purple">Bank Indonesia</strong> ranging from archival management
                  to QRIS competition platforms and performance evaluation workflows.
                  <br /><br />
                  My expertise spans <strong className="purple">microservices architecture</strong>,{" "}
                  <strong className="purple">SSO & HRIS systems</strong>, and delivering production-ready
                  solutions with Docker, RabbitMQ, Redis, and cloud infrastructure.
                </p>
              </motion.blockquote>

              <motion.div variants={fadeUp}>
                <Row style={{ justifyContent: "center", marginTop: "30px" }}>
                  <Col md={6} style={{ textAlign: "center", marginBottom: "10px" }}>
                    <Button
                      as={Link}
                      to="/about"
                      variant="primary"
                      size="lg"
                      style={{
                        backgroundColor: "var(--primary-dark)",
                        borderColor: "var(--primary-dark)",
                        padding: "10px 30px"
                      }}
                    >
                      <AiOutlineUser style={{ marginRight: "8px" }} />
                      About Me
                    </Button>
                  </Col>
                  <Col md={6} style={{ textAlign: "center", marginBottom: "10px" }}>
                    <Button
                      href="/CV_Ahmad Fadillah.pdf"
                      target="_blank"
                      variant="outline-primary"
                      size="lg"
                      style={{
                        borderColor: "var(--accent-text)",
                        color: "var(--accent-text)",
                        padding: "10px 30px"
                      }}
                    >
                      <AiOutlineDownload style={{ marginRight: "8px" }} />
                      Download CV
                    </Button>
                  </Col>
                </Row>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeIntro;
