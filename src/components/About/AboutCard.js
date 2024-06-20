import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          As an Informatics Engineering Student, I've always been captivated by the endless 
          possibilities that technology offers. With a solid foundation in classics like C++,
          PHP, JavaScript, TypeScript, and Python, I embarked on a journey of exploration and discovery.
          Web development quickly became my playground. I immersed myself in the latest frameworks
          like React.js and Next.js, Nest.js, and PHP's powerful Laravel framework. Crafting elegant and 
          efficient web applications wasn't just a task,
          it was a creative outlet where I could bring my ideas to life in pixels and code.
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
