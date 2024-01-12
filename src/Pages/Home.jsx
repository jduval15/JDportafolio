import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feactured from "./Feactured";
import Footer from "./Footer";
import "./styles/Home.css";

const Home = ({
  translations,
  studiesTranslations,
  frontEndTranslations,
  language,
}) => {
  return (
    <>
      <header id="home" className="header__home">
        <div className="header__home-left">
          {/*<div className="home__logo">
            <img src="/logocode.png" alt="Logo header" />
          </div>*/}
          <h1>
            Jose
            <br />
            Duval.
          </h1>

          <div></div>
          <div className="icon-social">
            <a href="https://www.linkedin.com/in/joseluisduval1505/" target="_blank">
              <img src="/linkedin-logo-240.png" alt="Linkedin Social Media" />
            </a>
            <a href="https://github.com/jduval15" target="_blank">
              <img src="/github-logo-240.png" alt="Github Repository" />
            </a>

            <a
              href="https://wa.me/+18098801940?text=Hola,%20estoy%20interesado%20en%20tu%20perfil"
              target="_blank"
              className="whatsapp-button"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="header__home-right">
          <p className="header__intro">{translations.home.greeting}</p>
          <h2 className="header__title">{translations.home.profession}</h2>
          <p className="header__home-description">{translations.home.Iam}</p>
        </div>
      </header>

      <About
        translations={translations}
        studiesTranslations={studiesTranslations}
        language={language}
      />
      <Feactured
        translations={translations}
        frontEndTranslations={frontEndTranslations}
      />
      <Contact translations={translations} />
      <Footer translations={translations} />
    </>
  );
};
export default Home;
