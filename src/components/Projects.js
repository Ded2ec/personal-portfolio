import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ language }) => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const textContent = {
    en: {
      title: "Projects",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tab1: "Tab 1",
      tab2: "Tab 2",
      tab3: "Tab 3",
      tabContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo."
    },
    th: {
      title: "โปรเจกต์",
      description: "ตัวอย่างข้อความในอุตสาหกรรมการพิมพ์และการจัดเรียงพิมพ์ Lorem Ipsum เป็นข้อความตัวอย่างมาตรฐานของอุตสาหกรรมนี้ตั้งแต่ศตวรรษที่ 16 เมื่อนักพิมพ์ที่ไม่รู้จักนำตัวอย่างพิมพ์มาจัดเรียงเป็นหนังสือตัวอย่าง",
      tab1: "แท็บ 1",
      tab2: "แท็บ 2",
      tab3: "แท็บ 3",
      tabContent: "ตัวอย่างข้อความในอุตสาหกรรมการพิมพ์และการจัดเรียงพิมพ์ Lorem Ipsum เป็นข้อความตัวอย่างมาตรฐานของอุตสาหกรรมนี้ตั้งแต่ศตวรรษที่ 16 เมื่อนักพิมพ์ที่ไม่รู้จักนำตัวอย่างพิมพ์มาจัดเรียงเป็นหนังสือตัวอย่าง"
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
