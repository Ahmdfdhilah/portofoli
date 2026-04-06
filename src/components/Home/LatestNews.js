import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiOutlineTrophy, AiOutlineBook, AiFillBuild } from "react-icons/ai";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const news = [
  {
    icon: <AiFillBuild size={30} className="purple" />,
    badge: { bg: "success", text: "ACTIVE" },
    title: "Software Engineer at Arga Bumi Indonesia",
    desc: "Architecting interconnected internal enterprise systems using microservices SSO, HRIS, Performance Management, and analytics dashboards.",
    date: "February 2025 – Present"
  },
  {
    icon: <AiOutlineBook size={30} className="purple" />,
    badge: { bg: "primary", text: "PUBLISHED" },
    title: "Published Technical Book",
    desc: 'Co-authored "Dasar-Dasar Pemrograman Web: Dengan Kerangka Kerja Python Pyramid dan React JS" ISBN: 978-634-7013-04-0',
    date: "October 2024"
  },
  {
    icon: <AiOutlineTrophy size={30} className="purple" />,
    badge: { bg: "warning", text: "AWARD" },
    title: "2nd Place Capstone Project",
    desc: 'Won 2nd place at MariBelajar Capstone Competition with "Automated Distributed Approvals System". Led a team of 4 over two months.',
    date: "May – June 2024"
  }
];

function LatestNews() {
  return (
    <Container fluid className="latest-news-section">
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
                Latest <strong className="purple">Updates</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center" }}>
                Recent achievements and milestones
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
            {news.map((item, i) => (
              <Col xs={12} md={4} className="news-card" key={i}>
                <motion.div variants={fadeUp}>
                  <Card className="news-card-view">
                    <Card.Body>
                      <div className="news-icon">{item.icon}</div>
                      <Badge bg={item.badge.bg} className="news-badge">{item.badge.text}</Badge>
                      <Card.Title style={{ color: "var(--primary)", fontSize: "1.1em", marginTop: "10px" }}>
                        {item.title}
                      </Card.Title>
                      <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                        {item.desc}
                      </Card.Text>
                      <small style={{ color: "var(--accent-warm)" }}>{item.date}</small>
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

export default LatestNews;
