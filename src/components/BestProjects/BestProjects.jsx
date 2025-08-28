import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import MyProjects from "../MyProjects";
import { Link } from "react-router-dom";
import detailsButtonIcon from "./../../assets/images/Icon.svg";

const BestProjects = () => {
  const swiperRef = useRef(null); // مرجع للسوايبر

  return (
    <div className="best-projects w-11/12 mx-auto my-10">
      <div className="heading flex justify-between">
        <div>
          <p className="text-blue font-semibold text-xl">Portfolio</p>
          <h1 className="text-3xl text-blacky font-semibold dark:text-white">
            The Best <span className="text-blue">Projects</span>
          </h1>
        </div>
        <div className="pagination flex gap-4">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-chevron-left"
            className="text-4xl text-blue cursor-pointer rounded-full bg-white"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-circle-chevron-right"
            className="text-4xl text-blue cursor-pointer rounded-full bg-white"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-12 pt-14 w-full mb-14">
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
            className="mySwiper h-96 flex max-md:h-80"
          >
            {MyProjects?.map((ele, index) => (
              <SwiperSlide
                key={index}
                className="w-1/3 bg-white max-md:w-2/3 max-sm:w-4/5"
              >
                <div className="swiper-card h-full relative">
                  <div className="project-img h-3/4 overflow-hidden relative ">
                    <div className="overlay">
                      <Link
                        to={`/Details/${ele.id}`}
                        className="flex gap-2 items-center text-xl"
                      >
                        <span>Show</span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                      </Link>
                    </div>
                    <img src={ele.urlimage} alt={`project-${index}`} />
                  </div>
                  <div className=" w-full text-left absolute bottom-0 h-1/4 max-md:pt-1 max-sm:pt-3">
                    <div className="flex justify-between px-5 py-1 max-md:px-3">
                      <div>
                        <h1 className="text-xl max-sm:text-sm max-md:text-lg font-semibold text-blacky">
                          {ele.title}
                        </h1>
                        <p className="text-mygray text-lg max-lg:text-sm max-sm:text-xs max-sm:text-wrap max-sm:max-w-40 max-md:max-w-56">
                          Tools: {ele.tools}
                        </p>
                      </div>
                      <div className="details-button w-8 h-8 min-h-6 min-w-6">
                        <a
                          href={ele.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={detailsButtonIcon}
                            alt=""
                            className="w-full h-full min-w-6 min-h-6"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>
    </div>
  );
};

export default BestProjects;
