// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { useState } from "react";
import Slider from "./components/slider";
import { BrowserRouter } from "react-router-dom";


// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
<BrowserRouter basename={'/newty'}></BrowserRouter>

function App() {
  const [language, setLanguage] = useState("en");
  return (
    
    <div className="App">
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <NavBar language={language} setLanguage={setLanguage} />
      <Banner language={language} />
      <Skills language={language} />
      <Timeline language={language} />
    <Slider language={language} />
      <Projects language={language} />
      
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
