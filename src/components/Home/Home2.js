import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const socials = [
  { href: "https://github.com/Ahmdfdhilah", Icon: AiFillGithub },
  { href: "https://www.linkedin.com/in/ahmad-fadillah-b6648027b/", Icon: AiFillLinkedin },
  { href: "https://twitter.com/Hiorynee", Icon: AiOutlineTwitter },
  { href: "https://www.instagram.com/ahmdfdhilah", Icon: AiFillInstagram },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.h1 variants={fadeUp}>FIND ME ON</motion.h1>
              <motion.p variants={fadeUp}>
                Feel free to <span className="purple">connect </span>with me
              </motion.p>

              <motion.ul className="home-about-social-links" variants={stagger}>
                {socials.map(({ href, Icon }, i) => (
                  <motion.li className="social-icons" key={i} variants={popIn}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <Icon />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
