import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiOutlineCode } from "react-icons/ai";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

function QuoteSection() {
  return (
    <Container fluid className="quote-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.div variants={scaleIn}>
                <AiOutlineCode size={50} className="purple" style={{ marginBottom: "20px" }} />
              </motion.div>

              <motion.blockquote className="quote-text" variants={fadeUp}>
                <p style={{
                  fontSize: "1.5em",
                  fontStyle: "italic",
                  color: "white",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}>
                  "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive discipline."
                </p>
                <footer style={{ color: "var(--accent-text)", fontSize: "1.1em" }}>
                  Robert C. Martin
                </footer>
              </motion.blockquote>

              <motion.div style={{ marginTop: "30px" }} variants={fadeUp}>
                <p style={{ color: "var(--accent-warm)", fontSize: "1.1em" }}>
                  My philosophy: <strong className="purple">Write code that tells a story</strong>
                </p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default QuoteSection;
