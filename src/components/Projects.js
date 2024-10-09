import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ language }) => {
  const projects = [
  
    {
      title: "authentication cloud computing",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "IPS Pay ERP",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    {
      title: "IPS Cashbook",
      description: "Design & Development",
      imgUrl: projImg4,
    }
   
  ];

  const textContent = {
    en: {
      title: "Projects",
      description: "This is a sample of web application development work",
      tab1: "Tab 1",
      tab2: "Tab 2",
      tab3: "Tab 3",
    },
    th: {
      title: "โปรเจกต์",
      description: "เป็นตัวอย่างผลงานการพัฒนา web application",
      tab1: "แท็บ 1",
      tab2: "แท็บ 2",
      tab3: "แท็บ 3",
    },
    jp: {
      title: "プロジェクト",
      description: "これはWebアプリケーション開発の作業サンプルです。",
      tab1: "タブ 1",
      tab2: "タブ 2",
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>{currentText.tabContent}</p>
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
