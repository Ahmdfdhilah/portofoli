import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiPython 
} from "react-icons/di";
import { 
  SiNextdotjs, 
  SiNestjs, 
  SiPostgresql, 
  SiDocker,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiRedis
} from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

function SkillsPreview() {
  return (
    <Container fluid className="skills-preview-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "30px" }}>
            <h1 className="project-heading">
              Core <strong className="purple">Technologies</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Technologies I work with to build amazing products
            </p>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "20px" }}>Frontend</h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <DiReact />
                <p>React</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiNextdotjs />
                <p>Next.js</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiTypescript />
                <p>TypeScript</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiJavascript1 />
                <p>JavaScript</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiTailwindcss />
                <p>Tailwind</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "20px" }}>Backend</h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <DiNodejs />
                <p>Node.js</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiNestjs />
                <p>NestJS</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiPython />
                <p>Python</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiFastapi />
                <p>FastAPI</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <FaLaravel />
                <p>Laravel</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "20px" }}>Database & Tools</h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <SiPostgresql />
                <p>PostgreSQL</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiRedis />
                <p>Redis</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiDocker />
                <p>Docker</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SkillsPreview;