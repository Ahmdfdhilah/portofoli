import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { DiJavascript1, DiReact, DiNodejs, DiPython } from "react-icons/di";
import { SiNextdotjs, SiNestjs, SiPostgresql, SiDocker, SiTailwindcss, SiTypescript, SiFastapi, SiRedis } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const groups = [
  {
    label: "Frontend",
    icons: [
      { Icon: DiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: DiJavascript1, name: "JavaScript" },
      { Icon: SiTailwindcss, name: "Tailwind" },
    ]
  },
  {
    label: "Backend",
    icons: [
      { Icon: DiNodejs, name: "Node.js" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: DiPython, name: "Python" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: FaLaravel, name: "Laravel" },
    ]
  },
  {
    label: "Database & Tools",
    icons: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiDocker, name: "Docker" },
    ]
  }
];

function SkillsPreview() {
  return (
    <Container fluid className="skills-preview-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Row>
            <Col md={12} style={{ paddingBottom: "30px" }}>
              <h1 className="project-heading">
                Core <strong className="purple">Technologies</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center" }}>
                Technologies I work with to build amazing products
              </p>
            </Col>
          </Row>
        </motion.div>

        {groups.map((group) => (
          <motion.div
            key={group.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
              <Col md={10}>
                <motion.h3
                  variants={fadeUp}
                  style={{ color: "var(--accent-text)", textAlign: "center", marginBottom: "20px" }}
                >
                  {group.label}
                </motion.h3>
                <Row style={{ justifyContent: "center" }}>
                  {group.icons.map(({ Icon, name }) => (
                    <Col xs={3} md={2} className="skill-icon" key={name}>
                      <motion.div variants={scaleIn}>
                        <Icon />
                        <p>{name}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>
    </Container>
  );
}

export default SkillsPreview;
