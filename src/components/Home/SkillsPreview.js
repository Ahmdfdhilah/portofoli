import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { DiReact, DiPython, DiMysql } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import {
  SiGo, SiNextdotjs, SiNestjs, SiPostgresql, SiDocker,
  SiTailwindcss, SiTypescript, SiFastapi, SiRedis,
  SiRabbitmq, SiMongodb, SiGooglecloud
} from "react-icons/si";

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
      { Icon: SiTailwindcss, name: "Tailwind" },
    ]
  },
  {
    label: "Backend",
    icons: [
      { Icon: SiGo, name: "Go" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: FaLaravel, name: "Laravel" },
      { Icon: DiPython, name: "Python" },
    ]
  },
  {
    label: "Database & Infra",
    icons: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: DiMysql, name: "MySQL" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiRabbitmq, name: "RabbitMQ" },
      { Icon: SiDocker, name: "Docker" },
      { Icon: SiGooglecloud, name: "GCP" },
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
