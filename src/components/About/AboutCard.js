import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello I am <span className="purple">Ahmad Fadillah </span>
            from <span className="purple"> Jakarta, Indonesia.{" "}</span>
            I am a college student in{" "}
            <span className="purple">Institute Technology of Sumatera{" "}</span>
            Majors in <span className="purple">Informatics Engineering</span>
            <br />
            <br />
            Apart from coding, here some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Happiness cant be wish"{" "}
          </p>
          <footer className="blockquote-footer">Ahmad Fadillah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
