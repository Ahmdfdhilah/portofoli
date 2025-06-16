import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import HomeIntro from "./HomeIntro";
import HomeHighlights from "./HomeHighlights";
import FeaturedProjects from "./FeaturedProjects";
import SkillsPreview from "./SkillsPreview";
import LatestNews from "./LatestNews";
import QuoteSection from "./QuoteSection";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello{" "} <span className="purple"> World!</span>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AHMAD FADILLAH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
      <HomeIntro />
      <HomeHighlights />
      <FeaturedProjects />
      <SkillsPreview />
      <LatestNews />
      <QuoteSection />
      <Home2 />
    </section>
  );
}

export default Home;
