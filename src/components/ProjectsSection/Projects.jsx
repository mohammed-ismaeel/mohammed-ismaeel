import "./ProjectsStyle.css";
import Button from "../Button/Button";
import MyProjects from "../MyProjects";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useEffect } from "react";
import { motion, useInView } from "framer-motion";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import detailsButtonIcon from "./../../assets/images/Icon.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const swiperRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 });

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
    <div className="parent">
      <section
        ref={ref}
        className="projects w-4/5 my-0 mx-auto py-20 px-0 text-center max-sm:w-full max-sm:w-auto"
        id="Projects"
      >
        <motion.h1
          className="text-blacky top-title text-center text-4xl font-semibold pb-6 dark:text-blue"
          initial={{ opacity: 0, y: -100 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
        >
          My <span className="text-blue">Projects</span>
        </motion.h1>
        <motion.p
          className="text-mygray text-center w-4/5 my-0 mx-auto dark:text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to the review section of my projects. Here you will find a
          collection of prjects that I have devloped using my skills in user
          interface design and programming. Get ready to explore a world of
          creativity and attractive design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center items-center gap-12 pt-14 w-full">
            <main className="slider-main-container max-lg:w-full">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                initialSlide={Math.floor(MyProjects.length / 2)}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper h-96 flex"
              >
                {MyProjects?.map((ele, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-1/3 bg-white max-md:w-2/3 max-sm:w-4/5"
                  >
                    <div className="swiper-card h-full">
                      <div className="project-img h-3/4 overflow-hidden relative">
                        <div className="overlay">
                          <Link
                            to={`Details/${ele.id}`}
                            className="flex gap-2 items-center text-xl"
                          >
                            <span>Show</span>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />{" "}
                          </Link>
                        </div>

                        <img
                          src={ele.urlimage}
                          loading="lazy"
                          alt={`project-${index}`}
                        />
                      </div>
                      <div className="mt-5 flex justify-between text-left px-5 max-sm:px-1">
                        <div>
                          <h1 className="text-xl max-sm:text-sm font-semibold text-blacky">
                            {ele.title}
                          </h1>
                          <p className="text-mygray text-lg max-sm:text-xs">
                            Tools: {ele.tools}
                          </p>
                        </div>
                        <div className="details-button w-8 h-8">
                          <a href={ele.demo}  target="_blank" rel="noopener noreferrer">
                            <img
                              src={detailsButtonIcon}
                              alt=""
                              className="w-full h-full"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className="nav-btn custom-prev-button text-blue absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  className="main-grid-item-icon bg-white rounded-lg border border-blue border-dashed opacity-80 max-sm:w-10 max-sm:h-10 max-md:opacity-100  max-[400px]:w-8 max-[400px]:h-8"
                  fill="none"
                  stroke="#007fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <line x1="19" x2="5" y1="12" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </div>

              <div
                className="nav-btn custom-next-button text-blue absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  className="main-grid-item-icon bg-white rounded-lg border border-blue border-dashed opacity-80 max-sm:w-10 max-sm:h-10  max-md:opacity-100 max-[400px]:w-8 max-[400px]:h-8"
                  fill="none"
                  stroke="#007fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <line x1="5" x2="19" y1="12" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </main>
          </div>
        </motion.div>

        <Button
          contentButton={"More Projects"}
          href={"https://github.com/mohammed-ismaeel/"}
          target={"_blank"}
        />
      </section>
    </div>
  );
};

export default Projects;
