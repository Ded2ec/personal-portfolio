import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import '../App.css';
import pc from '../assets/img/pic.png';

export const Skills = ({ language }) => {
  // ข้อความตามภาษาที่เลือก
  const textContent = {
    en: {
      skills: "Skills",
      description: "Tools used and abilities",
      webApp: "Web Application",
      network: "Network",
      design: "Design UI & Pictures",
    },
    th: {
      skills: "ทักษะ",
      description: "เครื่องมือที่ใช้และความสามารถ",
      webApp: "แอปพลิเคชันเว็บ",
      network: "เครือข่าย",
      design: "ออกแบบ UI และรูปภาพ",
    },
    jp: {
      skills: "スキル",
      description: "使用するツールと能力",
      webApp: "ウェブアプリケーション",
      network: "ネットワーク",
      design: "UIデザインと画像",
    }
};

  

  const currentText = textContent[language];

  const [webAppProgress, setWebAppProgress] = useState(0);
  const [networkProgress, setNetworkProgress] = useState(0);
  const [designProgress, setDesignProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setWebAppProgress(0);
          setNetworkProgress(0);
          setDesignProgress(0);

          setTimeout(() => setWebAppProgress(80), 500);
          setTimeout(() => setNetworkProgress(80), 1000);
          setTimeout(() => setDesignProgress(60), 1500);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="skill" id="skills" ref={sectionRef}>
      <div className="skill-bx wow zoomIn">
        <h2>{currentText.skills}</h2>
        <p>{currentText.description}</p>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="popskill">
                <h4>{currentText.webApp}</h4>
                <MDBProgress height="20">
                  <MDBProgressBar width={webAppProgress} valuemin={0} valuemax={100}>
                    {webAppProgress}%
                  </MDBProgressBar>
                </MDBProgress>
                <br />
                <h4>{currentText.network}</h4>
                <MDBProgress height="20">
                  <MDBProgressBar bgColor='success' width={networkProgress} valuemin={0} valuemax={100}>
                    {networkProgress}%
                  </MDBProgressBar>
                </MDBProgress>
                <br />
                <h4>{currentText.design}</h4>
                <MDBProgress height="20">
                  <MDBProgressBar bgColor='warning' width={designProgress} valuemin={0} valuemax={100}>
                    {designProgress}%
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              
              <div className='bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
              <img className="pic" alt='robots' width='200' src={pc} />
                  </div>
            
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
