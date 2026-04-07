import { Container, Row, Col, Button } from "react-bootstrap";
import SEO from "../SEO";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/image.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import HomeIntro from "./HomeIntro";
// import HomeHighlights from "./HomeHighlights";
import FeaturedProjects from "./FeaturedProjects";
import SkillsPreview from "./SkillsPreview";
import LatestNews from "./LatestNews";
import QuoteSection from "./QuoteSection";
import Type from "./Type";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

function Home() {
  return (
    <section>
      <SEO
        title="Home"
        description="Hi, I'm Ahmad Fadillah — a Software Engineer specializing in full-stack web development with React, FastAPI, Go, and cloud-native architectures."
        path="/"
        keywords="Ahmad Fadillah, Ahmdfdhilah, Software Engineer, Full Stack Developer, React, FastAPI, Go, Portfolio"
      />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello{" "}<span className="purple"> World!</span>
                  <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> AHMAD FADILLAH</strong>
                </h1>
                <div style={{ padding: "10px 45px 10px", textAlign: "left" }}>
                  <Type />
                </div>
                <motion.div
                  className="hero-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <Button
                      as={Link}
                      to="/work-experience"
                      size="lg"
                      className="hero-btn-primary"
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <BsBriefcase />
                        View Experience
                      </span>
                    </Button>

                    <Button
                      as="a"
                      href="https://wa.me/6289647107815?text=Hi%20Ahmad%2C%20saya%20tertarik%20dengan%20jasa%20freelance%20Anda"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      className="hero-btn-outline"
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <AiOutlineWhatsApp style={{ color: "#25D366" }} />
                        WhatsApp Me
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="hero-image-col">
              <motion.div
                className="hero-image-wrapper"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="hero-image"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      <HomeIntro />
      {/* <HomeHighlights /> */}
      <FeaturedProjects />
      <SkillsPreview />
      <LatestNews />
      <QuoteSection />
      <Home2 />
    </section>
  );
}

export default Home;
