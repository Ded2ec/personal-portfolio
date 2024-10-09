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
  
  const textContent = {
    en: {
      tagline: "Welcome to my Portfolio",
      description: "I am very happy when I get to learn and develop programs in various forms.",
      nameIntro: "My Name is..",
     
      names: ["Nontachai", "LastName", "Chaiyawong"],
    },
    th: {
      tagline: "ยินดีต้อนรับสู่ Portfolio ของฉัน",
      description: "ฉันมีความสุขมากเมื่อฉันได้เรียนรู้กับการพัฒนาโปรในรูปแบบต่าง",
      nameIntro: "สวัสดี, ฉันชื่อ..",
     
      names: ["นนทชัย", "นามสกุล", "ไชยวงศ์"],
    },
    jp: {
      tagline: "私のポートフォリオへようこそ",
      description: "さまざまな形でプログラムの開発を学ぶことができて、とても幸せです。",
      nameIntro: "私の名前は..",
     
      names: ["ノンタチャイ", "ラストネーム", "チャイヤウォン"],
    }
  };

  const currentText = textContent[language];
  const toRotate = currentText.names; // เปลี่ยน toRotate ให้ใช้ชื่อจาก currentText
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

  const nameString = JSON.stringify(toRotate);

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
                    <h1>
                      {currentText.nameIntro} <br />
                      <span className="txt-rotate" dataPeriod="1000" data-rotate={nameString}>
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>{currentText.description}</p>
                    <button onClick={() => console.log('connect')}>
                      {currentText.buttonText} <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
