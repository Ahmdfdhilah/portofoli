import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import porto from "../../Assets/Projects/porto.png";
import gauss from "../../Assets/Projects/gauss.png";
import pyGame from "../../Assets/Projects/apocalypseDominator.png";
import gadget from "../../Assets/Projects/gadget.png";
import approval from "../../Assets/Projects/approval.png";
import webSekolah from "../../Assets/Projects/websekolah.png";
import pemira from "../../Assets/Projects/pemira.png";
import kkn from "../../Assets/Projects/kkn.png";
import okoce from "../../Assets/Projects/okoce.png";
import eParking from "../../Assets/Projects/keran.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const projects = [
  { img: eParking, title: "ITERA E-PARKING SYSTEM", desc: "Developed a smart vehicle access control system integrating RFID and license plate recognition using Python (Pyramid), PostgreSQL, React TypeScript, Tailwind CSS, Redux, MQTT (Mosquitto), and Redis. Features multi-factor authentication using RFID cards, RFID stickers, and LPR with efficient IoT data transfer via MQTT protocol.", github: "https://github.com/Ahmdfdhilah/keran_kitera_mfa", demo: null },
  { img: webSekolah, title: "SMP ISLAM YPI 1 BRAJA SELEBAH WEBSITE", desc: "Developed a dynamic website for SMP YPI 1 Braja Selebah utilizing Laravel framework, complete with an intuitive admin dashboard. The platform facilitates seamless management of school-related tasks, including student records, academic resources, and enhancing efficiency and accessibility for administrators, teachers, and students alike.Leading and orginazing project SMP ISLAM YPI 1 BRAJA SELEBAH school information system", github: "https://github.com/Ahmdfdhilah/kapsel", demo: "https://smpypi1brajaselebah.sch.id" },
  { img: gadget, title: "Gadget Store", desc: "Developed a full-stack e-commerce store system to manage and optimize online retail operations, integrating modern technologies to ensure scalability, security, and efficiency. The backend was built using NestJS, with MySQL as the database, Redis for caching, and Docker for environment management. JWT was used for authentication, and Midtrans for payment gateway. The frontend was developed using React.js, and RajaOngkir was integrated for shipping calculations and logistics.", github: "https://github.com/Ahmdfdhilah/gadget_store", demo: "https://trust-ahmdfdhilahs-projects.vercel.app" },
  { img: okoce, title: "OK OCE net", desc: "This project is a full-stack application built with NestJS for the backend and React for the frontend, and utilizes Docker for containerization. The backend leverages NestJS's capabilities to create a scalable and maintainable server-side environment, while React delivers a dynamic and responsive user interface. Docker ensures consistent and isolated environments across development and production, simplifying deployment and enhancing scalability.", github: "https://github.com/Ahmdfdhilah/okocenet", demo: "https://okocenet.vercel.app/" },
  { img: porto, title: "Personal Portofolio Website", desc: "Crafted a Personal Portfolio Website using React.js, showcasing a blend of creativity and technical expertise. Implemented responsive design principles to ensure optimal viewing experiences across devices. Leveraged React's component-based architecture to streamline development and enhance maintainability. Incorporated interactive elements and animations to engage visitors and highlight projects and skills effectively.", github: "https://github.com/Ahmdfdhilah/portofoli", demo: "https://ahmdfdhilah.github.io/portofoli/" },
  { img: gauss, title: "Gauss Eleminations Calculator", desc: "A powerful tool for solving systems of linear equations using the Gauss elimination algorithm. This calculator simplifies the process of finding solutions by transforming the system into an upper triangular matrix and then performing back substitution. The application is designed to handle various types of linear equations and provides detailed step-by-step solutions, making it an excellent resource for students and professionals alike.", github: "https://github.com/Ahmdfdhilah/Gauss__Elim", demo: "https://replit.com/@AhmadFadillah16/gausselim#main.py" },
  { img: pyGame, title: "Apocalypse Dominator", desc: "Apocalypse Dominator is an immersive first-person game set in a post-apocalyptic world, where players must navigate through a desolate landscape, battling enemies, and overcoming various challenges to survive. This game is developed using Python and the Pygame library, providing a rich and engaging experience.", github: "https://github.com/Ahmdfdhilah/tubes", demo: null },
  { img: pemira, title: "Profile Web Pemilihan Umum Raya ITERA", desc: "Profile Web Pemilihan Umum Raya (PEMIRA) ITERA is a comprehensive website developed to manage and showcase the election process at Institut Teknologi Sumatera (ITERA). This project is built by the Voting Staff to provide transparent and efficient handling of the election events, ensuring fair and accessible participation for all students.", github: "https://github.com/PemiraITERA/Pemira2023", demo: "https://pemirakmitera.my.id/" },
  { img: kkn, title: "Green Website Sri Sawahan", desc: "Website that explains Sri Sawahan village, contains plant data and the distribution of green maps in the village, build in next js", github: "https://github.com/Ahmdfdhilah/kkn_srisawahan", demo: "https://kkn-itera-90.vercel.app/" },
  { img: approval, title: "Distributed Approval System", desc: "Developed a cloud-based approval system with modern design UI, that automates the approval process for various internal requests within a company, such as purchase requests, leave applications, or budget requests. Using Power Apps, Power Automate, Sharepoints.", github: "https://github.com/Ahmdfdhilah/cryptonexa", demo: "https://apps.powerapps.com/play/e/default-d7b95ec4-9a7f-4260-b2e3-eb53f0ac8401/a/63c32fdc-ce5e-4e85-8f77-2b9dd19f9745?tenantId=d7b95ec4-9a7f-4260-b2e3-eb53f0ac8401&sourcetime=1717948051360&source=portal" },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((p, i) => (
              <Col md={4} className="project-card" key={i}>
                <motion.div variants={fadeUp}>
                  <ProjectCard
                    imgPath={p.img}
                    isBlog={false}
                    title={p.title}
                    description={p.desc}
                    ghLink={p.github}
                    demoLink={p.demo}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
