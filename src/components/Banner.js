import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ language }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = ["Nontachai", "LastName", "Chaiyawong"];
  const period = 1000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  const textContent = {
    en: {
      tagline: "Welcome to my Portfolio",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      buttonText: "Let’s Connect"
    },
    th: {
      tagline: "ยินดีต้อนรับสู่ Portfolio ของฉัน",
      description: "Lorem Ipsum เป็นเพียงข้อความจำลองของอุตสาหกรรมการพิมพ์และการเรียงพิมพ์ Lorem Ipsum เป็นข้อความจำลองมาตรฐานของอุตสาหกรรมนี้ตั้งแต่ช่วงปี 1500 เมื่อช่างพิมพ์ที่ไม่รู้จักได้รวบรวมแบบตัวพิมพ์และจัดเรียงเพื่อทำเป็นหนังสือตัวอย่างประเภท",
      buttonText: "เชื่อมต่อกันเถอะ"
    }
  };

  const currentText = textContent[language];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{currentText.tagline}</span>
                  <div className="background">
                    <h1>{`My Name is..`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Nontachai", "LastName", "Chaiyawong" ]'><span className="wrap">{text}</span></span></h1>
                    <p>{currentText.description}</p>
                    <button onClick={() => console.log('connect')}>{currentText.buttonText} <ArrowRightCircle size={25} /></button>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
