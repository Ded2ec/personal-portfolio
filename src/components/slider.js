import "../styles.css";
import { useState } from "react";
import pic1 from '../assets/img/p1.jpg';
import pic2 from '../assets/img/p2.jpg';
import pic3 from '../assets/img/p3.jpg';
import pic4 from '../assets/img/p4.jpg';

const Slider = ({ language }) => {
  // ข้อความตามภาษาที่เลือก
  const textContent = {
    en: {
      sli: "Experience",
    },
    th: {
      sli: "ประสบการณ์",
    },
    jp: {
      sli: "経験",
    },
  };

  const currentText = textContent[language] || textContent.en;

  const images = [
    {
      image_url: pic4,
      caption: "Image 1"
    },
    {
      image_url: pic1,
      caption: "Image 2"
    },
    {
      image_url: pic2,
      caption: "Image 3"
    },
    {
      image_url: pic3,
      caption: "Image 4"
    }
  ];

  return (
    <div className="App">
      <h2 className="slider">{currentText.sli}</h2>
      <SlideShow images={images} />
    </div>
  );
};

const SlideShow = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slideshow">
      {images.map((e, i) => (
        <Slide {...e} key={e.caption} active={i === active} />
      ))}
      <div className="bulleted-navigation">
        {images.map((e, i) => (
          <div
            className={`dot ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <div className="next-prev-navigation">
        <div className="navigation next" onClick={onNext}>
          &gt;
        </div>
        <div className="navigation prev" onClick={onPrev}>
          &lt;
        </div>
      </div>
    </div>
  );
};

const Slide = ({ image_url, caption, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={image_url} alt={caption} />
      <span>{caption}</span>
    </div>
  );
};

export default Slider;
