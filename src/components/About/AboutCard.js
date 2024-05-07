import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p >
            As an computer science student, I've always been captivated by the endless possibilities that technology offers. From the moment I wrote my first line of code, I knew I had found my passion. With a solid foundation in classics like
            <i>
              <b class="purple"> C++, PHP, JavaScript, </b>
            </i>
            and
            <i>
              <b class="purple"> Python, </b>
            </i>
            I embarked on a journey of exploration and discovery.
            <br />
            <br />
            Web development quickly became my playground. I immersed myself in the latest frameworks like
            <i>
              <b class="purple"> React.js </b>
            </i>
            and
            <i>
              <b class="purple"> Next.js, </b>
            </i>
            and PHP's powerful
            <i>
              <b class="purple"> Laravel </b>
            </i>
            framework. Crafting elegant and efficient web applications wasn't just a task—it was a creative outlet where I could bring my ideas to life in pixels and code.
            <br />
            <br />
            But my interests didn't stop there. I found myself drawn to the world of data analysis, where I could uncover hidden insights buried within mountains of data. Armed with tools like
            <i>
              <b class="purple"> Power BI, </b>
            </i>
            I dove headfirst into the world of data visualization, transforming raw data into actionable intelligence that drove informed decision-making.
            <br />
            <br />
            And then there was AI engineering—the frontier of technology that held the promise of revolutionizing entire industries. With
            <i>
              <b class="purple"> Python </b>
            </i>
            as my trusty companion, I delved into machine learning, natural language processing, and computer vision. Each algorithm I developed felt like a piece of a puzzle, contributing to a larger picture of creating intelligent systems that could change the world.
            <br />
            <br />
            Throughout this journey, I've been fueled by a relentless curiosity and a hunger for innovation. Every challenge I faced was an opportunity to learn and grow, pushing the boundaries of what I thought was possible. As I continue on this path, I'm excited to see where technology will take me next, and how I can continue to make a meaningful impact in the world around me.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
