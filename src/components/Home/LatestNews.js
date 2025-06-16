import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { AiOutlineTrophy, AiOutlineBook, AiFillBuild } from "react-icons/ai";

function LatestNews() {
  return (
    <Container fluid className="latest-news-section">
      <Container>
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
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiFillBuild size={30} className="purple" />
                </div>
                <Badge bg="success" className="news-badge">NEW</Badge>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  Web Developer at Arga Bumi Indonesia
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                  Started new role developing scalable microservices with FastAPI and PostgreSQL
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>February 2025 - Present</small>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiOutlineBook size={30} className="purple" />
                </div>
                <Badge bg="primary" className="news-badge">PUBLISHED</Badge>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  Published Technical Book
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                  Co-authored "Web Programming Basics: Python Pyramid & React.js Framework"
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>October 2024</small>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiOutlineTrophy size={30} className="purple" />
                </div>
                <Badge bg="warning" className="news-badge">AWARD</Badge>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  2nd Place Capstone Project
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                  Won 2nd place in MariBelajar Capstone Project Competition with "Automated Distributed Approvals System"
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>May - June 2024</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LatestNews;