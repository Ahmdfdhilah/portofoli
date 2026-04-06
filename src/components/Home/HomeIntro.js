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
                  I'm an enthusiastic <strong className="purple">Informatics Engineering student</strong> passionate about building impactful digital solutions.
                  With hands-on experience in <strong className="purple">full-stack development</strong>, I've led and contributed to various projects ranging from
                  e-commerce platforms to enterprise systems.
                  <br /><br />
                  I enjoy solving real-world problems through <strong className="purple">clean architecture</strong>, scalable code, and user-focused design,
                  while actively collaborating with teams to deliver meaningful outcomes.
                  <br /><br />
                  My field of interests include building <strong className="purple">Web Applications</strong>, <strong className="purple">AI/ML solutions</strong>,
                  and exploring new technologies in <strong className="purple">Backend Development</strong>.
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
