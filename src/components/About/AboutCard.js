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
          I've contributed to systems for government institutions including{" "}
          <strong className="purple">Kemenko Bidang Pangan RI</strong> and{" "}
          <strong className="purple">Kemendag RI</strong>, as well as enterprise applications for
          private organizations. I enjoy solving complex problems through{" "}
          <strong className="purple">clean architecture</strong>, microservices, and scalable design.
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
