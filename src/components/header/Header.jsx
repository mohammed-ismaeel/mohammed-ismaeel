import { useContext, useState, useEffect } from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ onClick }) => {
  const theme = useContext(ThemeContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className=" relative bg-cover">
      {sidebarOpen && (
        <Sidebar
          navLinks={navLinks}
          activeSection={activeSection}
          onClose={() => setSidebarOpen(false)}
        />
      )}
      <NavBar
        onClick={onClick}
        onSidebar={() => setSidebarOpen(!sidebarOpen)}
        navLinks={navLinks}
      />
      <Hero />
    </header>
  );
};

export default Header;
