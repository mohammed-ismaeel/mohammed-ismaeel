// import NavBar from "./../NavBar/NavBar";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import MyProjects from "../MyProjects";
// import "./ProjectStyle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./../../assets/images/Icon.svg";
// import BestProjects from "../BestProjects/BestProjects";
// import Footer from "../Footer/Footer";
// import { useContext, useEffect, useState } from "react";
// import maximizeIcon from "./../../assets/images/maximize.svg";
// import { LuCircleArrowOutUpRight } from "react-icons/lu";
// import { TbArrowsMaximize } from "react-icons/tb";
// import { ThemeContext } from "../context/ThemeContext";

// // import { LuArrowUpRightFromCircle } from 'react-icons/lu'
// const ProjectDetails = ({ onClick }) => {
//   const theme = useContext(ThemeContext);
//   let key = useParams();
//   let x = MyProjects.find((e) => e.id == key.id);

//   // داخل مكون ProjectDetails
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const navigate = useNavigate();

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [pathname]);

//   // ✅ منع التمرير عند فتح الصورة
//   useEffect(() => {
//     if (isFullscreen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // في حال تم الخروج فجأة، نظف الوضع
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isFullscreen]);

//   return (
//     <div className="all">
//       {isFullscreen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 pt-20"
//           onClick={() => setIsFullscreen(false)} // إغلاق عند النقر بالخارج
//         >
//           <img
//             src={x.urlimage}
//             alt="Fullscreen Project"
//             className="max-w-full max-h-full object-contain"
//           />
//           <button
//             className="absolute top-5 right-5 text-white text-4xl"
//             onClick={() => setIsFullscreen(false)}
//           >
//             &times;
//           </button>
//         </div>
//       )}
//       <NavBar onClick={onClick} />
//       <Link
//         to={"/#Projects"}
//         // onClick={() => navigate(-1)}
//         className="text-3xl absolute top-28 left-16 text-blue flex items-center gap-2 cursor-pointer"
//       >
//         <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="text-xl" />{" "}
//         <p>Back</p>{" "}
//       </Link>
//       <div
//         className={`project-details ${theme} w-11/12 h-screen pt-20 bg-white mx-auto my-0 flex justify-between items-center dark:bg-darkybg`}
//       >
//         <div className="flex justify-between h-96">
//           <div className="project-image touch-auto border border-solid border-blacky rounded overflow-hidden relative">
//             <img src={x.urlimage} alt="" className=" w-full" />
//             <div className="overlay absolute -top-28 left-0 right-0 bottom-0 invisible flex justify-center items-center gap-5">
//               <button
//                 className="w-16 h-16 hover:scale-125"
//                 onClick={() => setIsFullscreen(true)}
//               >
//                 <TbArrowsMaximize className="text-white w-full h-full" />
//               </button>
//               <a href={x.demo} className="w-14 h-14 hover:scale-125">
//                 <LuCircleArrowOutUpRight className="text-white w-full h-full" />
//               </a>
//             </div>
//           </div>
//           <div className="info max-w-lg">
//             <div className="about-project">
//               <div className="top flex justify-between">
//                 <div>
//                   <h1 className="title-project text-3xl text-blacky font-semibold dark:text-blue">
//                     {x.title}
//                   </h1>
//                   <p className="date text-mygray dark:text-gray-300">
//                     {x.date}
//                   </p>
//                 </div>
//                 <a href={x.demo}>
//                   <img src={Icon} alt="" />
//                 </a>
//               </div>
//               <p className="info-project pt-2 text-gray-700 text-xl dark:dark:text-gray-200">
//                 {x.desc}
//               </p>
//               <div className="tools pt-3 pb-5">
//                 <div>
//                   <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                     Basic Languages:
//                   </h3>
//                   <span className=" text-xl text-blue font-semibold ">
//                     {x.basicLanguages}
//                   </span>
//                 </div>
//                 {x.frameworks == "" ? (
//                   ""
//                 ) : (
//                   <div>
//                     <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                       Frameworks:
//                     </h3>
//                     <span className=" text-xl text-blue font-semibold">
//                       {x.frameworks}
//                     </span>
//                   </div>
//                 )}

//                 {x.libraries == "" ? (
//                   ""
//                 ) : (
//                   <div>
//                     <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                       Libraries:
//                     </h3>
//                     <span className=" text-xl text-blue font-semibold">
//                       {x.libraries}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="link-project">
//                 <a
//                   href={x.github}
//                   target="_blank"
//                   className="bg-blue flex items-center gap-2 w-40 py-3 px-5 font-semibold text-white rounded-md no-underline hover:text-blue hover:bg-white hover:border-solid hover:border hover:border-blue"
//                 >
//                   <span>Github Repo</span>
//                   <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-px border border-dashed border-blue relative">
//         <div className="absolute border-4 border-blue border-solid rounded-full w-6 h-6 -translate-y-1/2 bg-white left-1/2"></div>
//       </div>
//       <BestProjects />
//       <Footer />
//     </div>
//   );
// };

// export default ProjectDetails;

// ==================================================================================

import NavBar from "./../NavBar/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import MyProjects from "../MyProjects";
import "./ProjectStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./../../assets/images/Icon.svg";
import BestProjects from "../BestProjects/BestProjects";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import maximizeIcon from "./../../assets/images/maximize.svg";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { TbArrowsMaximize } from "react-icons/tb";
import { ThemeContext } from "../context/ThemeContext";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectDetails = ({ onClick }) => {
  const theme = useContext(ThemeContext);
  let key = useParams();
  const [currentProjectId, setCurrentProjectId] = useState(key.id);
  const x = MyProjects.find((e) => e.id == currentProjectId);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // لمتابعة الصورة الحالية في السلايد
  const [justLoaded, setJustLoaded] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);

  useEffect(() => {
    if (key.id !== currentProjectId) {
      setAnimateNow(false); // خروج

      const timeout = setTimeout(() => {
        setCurrentProjectId(key.id); // تحديث المشروع بعد الخروج
        setAnimateNow(true); // دخول
      }, 700); // مدة أنيميشن الخروج

      return () => clearTimeout(timeout);
    }
  }, [key.id, currentProjectId]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setDirection(current > prevScroll ? "down" : "up");
      setPrevScroll(current);

      const sectionTop = ref.current?.getBoundingClientRect().top;

      // إذا طلع القسم من الشاشة للأعلى فقط
      if (direction === "up" && sectionTop > window.innerHeight) {
        setAnimateNow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, direction]);

  // التحكم بالأنيميشن بناءً على اتجاه التمرير والرؤية
  useEffect(() => {
    if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (justLoaded && ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight;
      if (isVisible) {
        setAnimateNow(true);
        setJustLoaded(false);
      }
    }
  }, [pathname]);

  // منع التمرير عند فتح الصورة
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;

      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // الحد الأدنى للسحب

    if (distance > minSwipeDistance) {
      handleNextImage(); // سحب لليسار
    } else if (distance < -minSwipeDistance) {
      handlePrevImage(); // سحب لليمين
    }

    // إعادة التهيئة
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // دالة للتنقل بين الصور في السلايد
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % x.gallery.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + x.gallery.length) % x.gallery.length
    );
  };

  return (
    <div className="all">
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 pt-20"
          onClick={() => setIsFullscreen(false)} // إغلاق عند النقر بالخارج
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={x.gallery[currentImageIndex]} // الصورة الحالية
              alt="Fullscreen Project"
              className="max-w-full max-h-full object-contain"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setIsFullscreen(false)}
            >
              &times;
            </button>

            {/* أزرار التنقل بين الصور */}
            <button
              className="absolute left-5 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation(); // منع غلق النافذة
                handlePrevImage();
              }}
            >
              &#8249;
            </button>
            <button
              className="absolute right-5 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation(); // منع غلق النافذة
                handleNextImage();
              }}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <NavBar onClick={onClick} />
      <Link
        to={"/#Projects"}
        className="text-3xl absolute top-28 left-16 text-blue flex items-center gap-2 cursor-pointer dark:text-white max-sm:text-xl max-sm:left-5"
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="text-xl" />
        <p>Back</p>
      </Link>

      <div
        className={`project-details ${theme} w-11/12 h-screen pt-20 bg-white mx-auto my-0 flex justify-between items-center dark:bg-darkybg max-lg:justify-center max-lg:h-auto max-lg:mb-24`}
      >
        <div className="flex justify-between h-96 gap-10 max-lg:flex-col max-lg:my-auto max-lg:items-center max-lg:h-auto max-lg:mt-32">
          <motion.div
            ref={ref}
            className="project-image touch-auto border border-solid border-blacky rounded overflow-hidden relative max-lg:max-h-96 max-lg:w-full max-sm:max-h-64"
            initial={{ opacity: 0, x: -100 }}
            animate={
              animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.7 }}
          >
            <img src={x.urlimage} alt="" className=" w-full min-h-96" />
            <div className="overlay absolute -top-28 left-0 right-0 bottom-0 invisible flex justify-center items-center gap-5">
              <button
                className="w-16 h-16 hover:scale-125"
                onClick={() => setIsFullscreen(true)}
              >
                <TbArrowsMaximize className="text-white w-full h-full" />
              </button>
              <a
                href={x.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 hover:scale-125"
              >
                <LuCircleArrowOutUpRight className="text-white w-full h-full" />
              </a>
            </div>
          </motion.div>

          <div className="info max-w-lg">
            <motion.div
              ref={ref}
              className="about-project"
              initial={{ opacity: 0, x: 100 }}
              animate={
                animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.7 }}
            >
              <div className="top flex justify-between">
                <div>
                  <h1 className="title-project text-3xl text-blacky font-semibold dark:text-blue">
                    {x.title}
                  </h1>
                  <p className="date text-mygray dark:text-gray-300">
                    {x.date}
                  </p>
                </div>
                <a href={x.demo} target="_blank" rel="noopener noreferrer">
                  <img src={Icon} alt="" />
                </a>
              </div>
              <p className="info-project pt-2 text-gray-700 text-xl dark:dark:text-gray-200">
                {x.desc}
              </p>
              <div className="tools pt-3 pb-5">
                <div>
                  <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
                    Basic Languages:
                  </h3>
                  <span className=" text-xl text-blue font-semibold ">
                    {x.basicLanguages}
                  </span>
                </div>
                {x.frameworks && (
                  <div>
                    <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
                      Frameworks:
                    </h3>
                    <span className=" text-xl text-blue font-semibold">
                      {x.frameworks}
                    </span>
                  </div>
                )}
                {x.libraries && (
                  <div>
                    <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
                      Libraries:
                    </h3>
                    <span className=" text-xl text-blue font-semibold">
                      {x.libraries}
                    </span>
                  </div>
                )}
              </div>

              <div className="link-project">
                <a
                  href={x.github}
                  target="_blank"
                  className="bg-blue flex items-center gap-2 w-40 py-3 px-5 font-semibold text-white rounded-md no-underline hover:text-blue hover:bg-white hover:border-solid hover:border hover:border-blue"
                >
                  <span>Github Repo</span>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full h-px border border-dashed border-blue relative">
        <div className="absolute border-4 border-blue border-solid rounded-full w-6 h-6 -translate-y-1/2 bg-white left-1/2"></div>
      </div>
      <BestProjects />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
