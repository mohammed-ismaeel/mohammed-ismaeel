import ServicesCard from "../ServicesCard/ServicesCard";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MdPhoneIphone } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { FiDatabase, FiFigma } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setDirection(current > prevScroll ? "down" : "up");
      setPrevScroll(current);

      const sectionTop = ref.current?.getBoundingClientRect().top;

      if (direction === "up" && sectionTop > window.innerHeight) {
        setAnimateNow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, direction]);

  useEffect(() => {
    if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction]);

  return (
    <section
      ref={ref}
      className="services w-4/5 mx-auto my-0 py-36 px-0 max-sm:py-24 max-sm:w-11/12"
      id="Services"
    >
      <motion.h1
        className="text-blacky text-center text-4xl font-semibold pb-6 dark:text-blue max-sm:text-3xl"
        initial={{ opacity: 0, y: -100 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        Education & <span className="text-blue">Experience</span>
      </motion.h1>

      <motion.p
        className="text-mygray text-center w-4/5 my-0 mx-auto dark:text-gray-200 max-[400px]:w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I will show you some of my skills in designing and programming user
        interfaces, in addition to mmy experience in using modern web
        technologies and creative tools, Find out how I can help you turn your
        ideas into user experiences Amazing and innovative on the web!
      </motion.p>
      <div className="cards flex justify-between gap-6 mt-12 flex-wrap max-xl:justify-center max-xl:items-center">
        {[
          {
            icon: <MdPhoneIphone style={{fontSize:'80px'}}/>,
            title: "Responsive Web Design",
            desc: "I build websites that look great and function smoothly across all screen sizes, ensuring a seamless and adaptive user experience.",
          },
          {
            icon: <FaSmileBeam style={{fontSize:'80px'}}/>,
            title: "Interactive UI/UX Experiences",
            desc: "I enhance interfaces to be clean, intuitive, and engaging by applying modern design principles and focusing on usability and accessibility.",
          },
          {
            icon: <FaCode style={{fontSize:'80px'}}/>,
            title: "Fullstack Development",
            desc: "Skilled in both frontend and backend technologies to develop scalable web applications. proficient in React, Laravel, PHP, MySQL, and RESTful APIs.",
          },
          {
            icon: <FiDatabase style={{fontSize:'80px'}}/>,
            title: "Backend Architecture & APIs",
            desc: "Experienced in designing secure, maintainable backend systems, creating robust APIs, and managing relational databases with Laravel and MySQL.",
          },

        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            className="w-[22%] min-w-60 max-xl:flex max-xl:justify-center"
            animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.2, delay: 0.4 + i * 0.2 }}
          >
            <ServicesCard
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
