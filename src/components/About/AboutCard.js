import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          I'm an enthusiastic Informatics Engineering student passionate about building impactful digital solutions. 
          With hands-on experience in full-stack development, I've led and contributed to various projects ranging from 
          e-commerce platforms to enterprise systems using modern stacks like FastAPI, NestJS, React, and Laravel. 
          I enjoy solving real-world problems through clean architecture, scalable code, and user-focused design, 
          while actively collaborating with teams to deliver meaningful outcomes.
          <br />
          <br />
          Currently im completed my degree at Sumatera Institute of Technology with a cumulative GPA of 3.72/4.0, 
          and actively working as a Frontend Engineer at Bank Indonesia Lampung and Web Developer at Arga Bumi Indonesia.
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
