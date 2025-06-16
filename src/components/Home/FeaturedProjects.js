import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import eParking from "../../Assets/Projects/keran.jpg";
import gadget from "../../Assets/Projects/gadget.png";
import okoce from "../../Assets/Projects/okoce.png";

function FeaturedProjects() {
  return (
    <Container fluid className="featured-projects-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Featured <strong className="purple">Projects</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Here are some of my recent work highlights
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={eParking} alt="ITERA E-PARKING" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  ITERA E-PARKING SYSTEM
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Smart vehicle access control system with RFID and license plate recognition using Python, React, and IoT technologies.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/Ahmdfdhilah/keran_kitera_mfa"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={gadget} alt="Gadget Store" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  GADGET STORE SYSTEM
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Full-stack e-commerce platform with NestJS backend, React frontend, and integrated payment system.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/Ahmdfdhilah/gadget_store"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                  <Button 
                    href="https://trust-ahmdfdhilahs-projects.vercel.app"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: "#623686", borderColor: "#623686" }}
                  >
                    <AiOutlineEye /> Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={okoce} alt="OK OCE Net" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  OK OCE NET
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  Full-stack application with NestJS backend migration and React frontend, containerized with Docker.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/Ahmdfdhilah/okocenet"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                  <Button 
                    href="https://okocenet.vercel.app/"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: "#623686", borderColor: "#623686" }}
                  >
                    <AiOutlineEye /> Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <Button 
              as={Link}
              to="/project"
              variant="primary"
              size="lg"
              style={{ 
                backgroundColor: "#623686", 
                borderColor: "#623686",
                padding: "12px 40px"
              }}
            >
              View All Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedProjects;