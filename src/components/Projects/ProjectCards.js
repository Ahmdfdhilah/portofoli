import { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import ImageModal from "../ImageModal";

function ProjectCards(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
        style={{ height: "100%" }}
      >
        <Card className="project-card-view">
          <div className="project-img-trigger" onClick={() => setModalOpen(true)}>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          </div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text
              as="div"
              style={{ textAlign: "justify" }}
              className={expanded ? "" : "card-desc-truncated"}
            >
              {props.description}
            </Card.Text>
            <button
              className="card-desc-toggle"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Lihat lebih sedikit ↑" : "Lihat lebih ↓"}
            </button>
            <div className="card-buttons">
              {/* <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button> */}
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </motion.div>

      <ImageModal
        src={props.imgPath}
        alt={props.title}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default ProjectCards;
