import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLaravel, FaPhp } from "react-icons/fa";
import { DiJavascript1, DiReact, DiPython, DiMysql, DiGit } from "react-icons/di";
import {
  SiGo,
  SiNextdotjs,
  SiTailwindcss,
  SiMicrosoftazure,
  SiDocker,
  SiJsonwebtokens,
  SiRedis,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiGooglecloud,
  SiTypescript,
  SiRabbitmq,
  SiNginx,
  SiLinux,
} from "react-icons/si";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } }
};

const categories = [
  {
    label: "Frontend",
    icons: [
      { Icon: DiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiTailwindcss, name: "Tailwind" },
      { Icon: DiJavascript1, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    label: "Backend",
    icons: [
      { Icon: SiGo, name: "Go" },
      { Icon: DiPython, name: "Python" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: FaLaravel, name: "Laravel" },
      { Icon: SiExpress, name: "Express" },
      { Icon: FaPhp, name: "PHP" },
    ],
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
      { Icon: SiNginx, name: "NGINX" },
      { Icon: SiLinux, name: "Linux" },
    ],
  },
  {
    label: "Cloud & Tools",
    icons: [
      { Icon: SiGooglecloud, name: "GCP" },
      { Icon: SiMicrosoftazure, name: "Azure" },
      { Icon: SiJsonwebtokens, name: "JWT" },
      { Icon: DiGit, name: "Git" },
    ],
  },
];

function Techstack() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      {categories.map((cat) => (
        <div key={cat.label} className="tech-category-group">
          <motion.h3
            variants={scaleIn}
            style={{ color: "var(--accent-text)", textAlign: "center", marginBottom: "20px" }}
          >
            {cat.label}
          </motion.h3>
          <Row style={{ justifyContent: "center" }}>
            {cat.icons.map(({ Icon, name }) => (
              <Col xs={3} md={2} className="skill-icon" key={name}>
                <motion.div variants={scaleIn}>
                  <Icon />
                  <p>{name}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </motion.div>
  );
}

export default Techstack;
