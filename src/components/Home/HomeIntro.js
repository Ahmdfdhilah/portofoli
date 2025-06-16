import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiOutlineUser } from "react-icons/ai";

function HomeIntro() {
  return (
    <Container fluid className="home-intro-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingBottom: "50px" }}>
            <h1 className="project-heading">
              LET ME <strong className="purple">INTRODUCE</strong> MYSELF
            </h1>
            <blockquote className="blockquote mb-0" style={{ color: "white" }}>
              <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
                I'm an enthusiastic <strong className="purple">Informatics Engineering student</strong> passionate about building impactful digital solutions. 
                With hands-on experience in <strong className="purple">full-stack development</strong>, I've led and contributed to various projects ranging from 
                e-commerce platforms to enterprise systems.
                <br />
                <br />
                I enjoy solving real-world problems through <strong className="purple">clean architecture</strong>, scalable code, and user-focused design, 
                while actively collaborating with teams to deliver meaningful outcomes.
                <br />
                <br />
                My field of interests include building <strong className="purple">Web Applications</strong>, <strong className="purple">AI/ML solutions</strong>, 
                and exploring new technologies in <strong className="purple">Backend Development</strong>.
              </p>
            </blockquote>
            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Col md={6} style={{ textAlign: "center", marginBottom: "10px" }}>
                <Button 
                  as={Link} 
                  to="/about" 
                  variant="primary" 
                  size="lg"
                  style={{ 
                    backgroundColor: "#623686", 
                    borderColor: "#623686",
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
                    borderColor: "#cd5ff8", 
                    color: "#cd5ff8",
                    padding: "10px 30px"
                  }}
                >
                  <AiOutlineDownload style={{ marginRight: "8px" }} />
                  Download CV
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeIntro;