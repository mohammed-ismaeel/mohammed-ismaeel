import React, { useState, useEffect, useContext } from "react";
import Contact from "../components/Contact/Contact";
import Discuss from "../components/Discuss/Discuss";
import Footer from "../components/Footer/Footer";
import Projects from "../components/ProjectsSection/Projects";
import Skills from "../components/Skills/Skills";
import Services from "../components/Srevices/Services";
import Header from "../components/header/Header";
import { ThemeContext } from "../components/context/ThemeContext";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToHashElement from "../components/ScrollToHashElement";
const HomePage = ({ onClick }) => {
  const theme = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`home-page ${theme} dark:bg-darkybg`}>
      {isVisible && (
        <a
          href="#"
          className="go-top text-white fixed right-10 z-50 bg-blue px-3 py-2 rounded-md max-sm:right-5 bottom-4"
        >
          <i class="fa-solid fa-angles-up"></i>
        </a>
      )}
      <ScrollToHashElement />
      <ScrollToTop />
      <Header onClick={onClick} />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Discuss />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
