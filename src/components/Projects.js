import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import projImg1 from "../assets/img/01.jpg";
import projImg12 from "../assets/img/012.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg6 from "../assets/img/21.jpg";
import projImg7 from "../assets/img/22.jpg";
import projImg8 from "../assets/img/23.jpg";
import projImg9 from "../assets/img/26.jpg";
import projImg10 from "../assets/img/25.jpg";
import projImg11 from "../assets/img/s.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ language }) => {
  const projects = [
  
    {
      title: "Spring Boot Store",
      description: "Using frontend Nuxtjs Backend Springboot Database postgres Try Onclick user&pass 123456",
      imgUrl: projImg11,
      link: "https://springapp-render.onrender.com/",
      component: 'online'
    },
    {
      title: "Authentication cloud computing",
      description: "Design webbase PHP html css bootstrap & Development Cloud Amazon ec2 ubuntu server web base and radius + mysql  ",
      imgUrl: projImg2,
    },
    {
      title: "IPS Pay ERP",
      description: "Design PHP html css bootstrap pdff mysql  & Development  ",
      imgUrl: projImg3,
    },
    
    {
      title: "IPS Cashbook",
      description: "Design PHP html css bootstrap pdff mysql  & Development",
      imgUrl: projImg4,
    },
    {
      title: "flutter",
      description: "Design & Development Application cross platform ",
      imgUrl: projImg12,
    },
    {
      title: " web responsive login user",
      description: "Design html css bootstrap   ",
      imgUrl: projImg1,
    },
    
   
  ]

  const projects02 = [
  
    {
      title: "Authentication Server",
      description: " ubuntu server web base and radius + mysql in school ",
      imgUrl: projImg6,
    },
    {
      title: "Server NoHDD",
      description: "Install Server NoHdd in school 30 cliend",
      imgUrl: projImg7,
    },
    
    {
      title: "Windows Server",
      description: "Using Hyper v -using ubuntu server web base & radius -pfsense",
      imgUrl: projImg8,
    },
    {
      title: "Pfsense Load Balancing",
      description: " Balancing Dual Wan 2 internet service provider ",
      imgUrl: projImg10,
    },
    {
      title: "Installation&Configulation",
      description: "Contracting for installation of Wi-Fi equipment at resorts",
      imgUrl: projImg9,
    },
   
   
  ];
  

  const textContent = {
    en: {
      title: "Projects",
      description: "This is a sample of web application development work",
      tab1: "web application",
      tab2: "Network",
      tab3: "Tab 3",
    },
    th: {
      title: "โปรเจกต์",
      description: "เป็นตัวอย่างผลงานการพัฒนา web application",
      tab1: "เว็บแอปพลิเคชัน",
      tab2: "เน็ตเวิร์ค",
      tab3: "แท็บ 3",
    },
    jp: {
      title: "プロジェクト",
      description: "これはWebアプリケーション開発の作業サンプルです。",
      tab1: "ウェブアプリケーション",
      tab2: "ネットワーク",
      tab3: "タブ 3",
    }
  };

  const currentText = textContent[language];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{currentText.title}</h2>
                  <p>{currentText.description}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">{currentText.tab1}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">{currentText.tab2}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">{currentText.tab3}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>{currentText.tabContent}</p>
                        <Row>
                        {
                            projects02.map((projects02, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projects02}
                                />
                              )
                            })
                          }
                          </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
