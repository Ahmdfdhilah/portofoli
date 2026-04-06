import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Software Engineer with hands-on experience building scalable internal systems and enterprise
          applications using modern web technologies. Strong background in full-stack development with{" "}
          <strong className="purple">Go, Python, and TypeScript</strong>, complemented by real-world
          projects across government and organizational platforms.
          <br />
          <br />
          Graduated from <strong className="purple">Sumatera Institute of Technology</strong> in
          Informatics Engineering with a cumulative GPA of <strong className="purple">3.72 / 4.0</strong>.
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
