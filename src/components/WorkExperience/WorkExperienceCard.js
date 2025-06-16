import React from "react";
import Card from "react-bootstrap/Card";

function WorkExperienceCard(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ color: "#c770f0", fontSize: "1.3em", marginBottom: "10px" }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle className="mb-2" style={{ color: "white", fontSize: "1.1em", fontWeight: "600" }}>
          {props.company}
        </Card.Subtitle>
        <div style={{ color: "#fbd9ad", fontSize: "0.9em", marginBottom: "15px", fontStyle: "italic" }}>
          {props.period} | {props.type}
        </div>
        <Card.Text style={{ textAlign: "justify", flex: "1", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkExperienceCard;