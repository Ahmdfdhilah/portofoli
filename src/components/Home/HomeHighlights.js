import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  AiOutlineCode, 
  AiOutlineProject, 
  AiOutlineTrophy,
  AiOutlineTeam 
} from "react-icons/ai";

function HomeHighlights() {
  return (
    <Container fluid className="home-highlights-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Quick <strong className="purple">Highlights</strong>
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={6} md={3} className="highlight-card">
            <Card className="highlight-card-view">
              <Card.Body style={{ textAlign: "center" }}>
                <AiOutlineCode size={40} className="purple" />
                <h3 style={{ color: "white", marginTop: "10px" }}>3+</h3>
                <p style={{ color: "#cd5ff8" }}>Years Experience</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="highlight-card">
            <Card className="highlight-card-view">
              <Card.Body style={{ textAlign: "center" }}>
                <AiOutlineProject size={40} className="purple" />
                <h3 style={{ color: "white", marginTop: "10px" }}>15+</h3>
                <p style={{ color: "#cd5ff8" }}>Projects Completed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="highlight-card">
            <Card className="highlight-card-view">
              <Card.Body style={{ textAlign: "center" }}>
                <AiOutlineTrophy size={40} className="purple" />
                <h3 style={{ color: "white", marginTop: "10px" }}>2nd</h3>
                <p style={{ color: "#cd5ff8" }}>Place Capstone</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="highlight-card">
            <Card className="highlight-card-view">
              <Card.Body style={{ textAlign: "center" }}>
                <AiOutlineTeam size={40} className="purple" />
                <h3 style={{ color: "white", marginTop: "10px" }}>3.72</h3>
                <p style={{ color: "#cd5ff8" }}>GPA Score</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeHighlights;