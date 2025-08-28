import Button from "../Button/Button";
import "./AboutStyle.css";
import aboutImg from "./../../assets/images/my.jpg";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

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
      className={`about ${theme} w-4/5 relative mx-auto flex justify-between items-center py-12 px-24 rounded-xl max-xl:w-11/12 max-lg:flex-wrap max-lg:justify-center max-lg:text-left max-lg:px-4 gap-10 bg-white dark:bg-black`}
      id="About"
    >
      <motion.div
        ref={ref}
        className="about-img relative"
        initial={{ opacity: 0, x: -100 }}
        animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-img relative w-80 max-[768px]:w-2/3 max-md:mx-auto max-[450px]:w-full">
          <img src={aboutImg} alt="" className="w-full" />
          <div className="social-icons w-4/5 bg-white dark:bg-black absolute bottom-0 left-1/2 p-1 rounded-md">
            <ul className="flex list-none justify-between">
              <li className=" hover:scale-125 transition-all">
                <a
                  href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
                  target="_blank"
                  className=" text-4xl text-blue dark:text-white"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className=" hover:scale-125 transition-all">
                <a
                  href="https://x.com/MohammedIs87422"
                  target="_blank"
                  className=" text-4xl text-blue  dark:text-white"
                >
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
              <li className=" hover:scale-125 transition-all">
                <a
                  href="www.linkedin.com"
                  target="_blank"
                  className=" text-4xl text-blue  dark:text-white"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className=" hover:scale-125 transition-all">
                <a
                  href="https://github.com/mohammed-ismaeel/"
                  target="_blank"
                  className=" text-4xl text-blue  dark:text-white"
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </li>
              <li className=" hover:scale-125 transition-all">
                <a
                  href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
                  target="_blank"
                  className=" text-4xl text-blue  dark:text-white"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        className="about-desc w-1/2 max-md:w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-desc w-full max-md:w-11/12 max-md:mx-auto">
          <h1 className="text-blacky dark:text-white font-semibold text-3xl">
            I am Junior Fullstack Web Developer
          </h1>
          <p className="pt-6 text-mygray dark:text-gray-200">
            I'm a Fullstack Developer with a passion for building efficient and
            scalable web applications. I specialize in creating responsive and
            interactive user interfaces using modern tools like React.js,
            JavaScript, and TailwindCSS, while ensuring seamless integration
            with robust back-end systems. With experience in translating Figma
            designs into clean, accessible UIs and integrating RESTful APIs, I
            deliver dynamic digital experiences that perform reliably across
            devices. On the server side, I work with PHP, Laravel, and MySQL to
            build secure APIs, manage data effectively, and develop scalable
            architectures. I'm dedicated to clean code practices, performance
            optimization, and maintaining maintainable codebases. I enjoy
            collaborating with teams and clients to transform ideas into
            impactful, high-quality web solutions.
          </p>

          <div className="buttons pt-5 flex gap-3 max-sm:pb-10">
            <Button contentButton={"My Projects"} href={"#Projects"} />
            <a
              id="download-button"
              href="https://drive.google.com/file/d/1AaxiOIMSqv2_0aop1VzKC9tpEiX6Y2QM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 bg-transparent w-48 text-blue border border-solid border-blue hover:bg-blue hover:text-white hover:cursor-pointer hover:border hover:border-solid hover:border-white dark:text-white"
            >
              <span className="font-semibold"> Download CV </span>
              <i class="fa-solid fa-circle-down"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
