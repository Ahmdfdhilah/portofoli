import React from "react";
import { Col, Row } from "react-bootstrap";
import aws from "../../Assets/credentials/aws.png";
import js from "../../Assets/credentials/javascript.png";
import backend from "../../Assets/credentials/backend.png";

function Credentials() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="credentials-icons">
        <a 
          href="https://www.dicoding.com/certificates/N9ZO62LYDXG5"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={aws}></img>
          <p>Cloud Practitioner Essentials</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.dicoding.com/certificates/MRZMQ6RDNPYQ"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={js}></img>
          <p>Dasar Pemprograman JavaScript</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.dicoding.com/certificates/81P23O3GYXOY"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={backend}></img>
          <p>Belajar Membuat Aplikasi Back-End untuk Pemula</p>
        </a>
      </Col>
    </Row>
  );
}

export default Credentials;
