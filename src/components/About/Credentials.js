import React from "react";
import { Col, Row } from "react-bootstrap";
import aws from "../../Assets/credentials/aws.png";
import js from "../../Assets/credentials/javascript.png";
import backend from "../../Assets/credentials/backend.png";
import kotlin from "../../Assets/credentials/kotlin.png";
import ai from "../../Assets/credentials/aifunda.png";
import data from "../../Assets/credentials/datafunda.png";

function Credentials() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="credentials-icons">
        <a 
          href="https://www.dicoding.com/certificates/N9ZO62LYDXG5"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={aws} alt=""></img>
          <p>Cloud Practitioner Essentials</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.dicoding.com/certificates/MRZMQ6RDNPYQ"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={js} alt=""></img>
          <p>Dasar Pemprograman JavaScript</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.dicoding.com/certificates/81P23O3GYXOY"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={backend} alt=""></img>
          <p>Belajar Membuat Aplikasi Back-End untuk Pemula</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.dicoding.com/certificates/ERZR146RMZYV"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={kotlin} alt=""></img>
          <p>Memulai Pemrograman dengan Kotlin</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.credly.com/badges/8979e7fa-da63-41fc-b480-fb7112c2eda0/linked_in_profile"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={ai} alt=""></img>
          <p>Azure AI Fundamental</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.credly.com/badges/4d031119-63f3-4fe1-9624-5cf821d79ee8/public_url"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={data} alt=""></img>
          <p>Azure Data Fundamental</p>
        </a>
      </Col>
    </Row>
  );
}

export default Credentials;