import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  AiOutlineCode,
  AiOutlineProject,
  AiOutlineTrophy,
  AiOutlineTeam
} from "react-icons/ai";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function HomeHighlights() {
  return (
    <Container fluid className="home-highlights-section">
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
                Quick <strong className="purple">Highlights</strong>
              </h1>
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
            {[
              { icon: <AiOutlineCode size={40} className="purple" />, value: "3+", label: "Years Experience" },
              { icon: <AiOutlineProject size={40} className="purple" />, value: "15+", label: "Projects Completed" },
              { icon: <AiOutlineTrophy size={40} className="purple" />, value: "2nd", label: "Place Capstone" },
              { icon: <AiOutlineTeam size={40} className="purple" />, value: "3.72", label: "GPA Score" },
            ].map((item, i) => (
              <Col xs={6} md={3} className="highlight-card" key={i}>
                <motion.div variants={fadeUp}>
                  <Card className="highlight-card-view">
                    <Card.Body style={{ textAlign: "center" }}>
                      {item.icon}
                      <h3 style={{ color: "var(--foreground)", marginTop: "10px" }}>{item.value}</h3>
                      <p style={{ color: "var(--accent-text)" }}>{item.label}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default HomeHighlights;
