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

const icons = [
  SiGo, DiPython, SiTypescript, DiJavascript1, FaPhp,
  SiFastapi, SiNestjs, FaLaravel, SiExpress,
  DiReact, SiNextdotjs, SiTailwindcss,
  SiPostgresql, DiMysql, SiMongodb, SiRedis,
  SiRabbitmq,
  SiDocker, DiGit, SiNginx, SiLinux,
  SiGooglecloud, SiMicrosoftazure,
  SiJsonwebtokens,
];

function Techstack() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {icons.map((Icon, i) => (
          <Col xs={4} md={2} className="tech-icons" key={i}>
            <motion.div variants={scaleIn}>
              <Icon />
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
