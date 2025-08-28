import { useContext, useEffect, useState } from "react";
import AchievementCard from "../AchievementCard/AchievementCard";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import heroImg from "./../../assets/images/my.jpg";
const Hero = () => {
  const fullText = "HEY! I'm Mohammed, Fullstack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 80); 
    return () => clearInterval(interval);
  }, []);

  const description =
    "I'm a junior Full Stack Developer with expertise in building dynamic and efficient web applications. I create seamless user experiences by blending clean front-end designs with powerful back-end functionality using the latest technologies.";

  const words = description.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="hero w-4/5 lg:h-screen flex justify-between items-center my-0 mx-auto pt-20 gap-10 max-xl:w-10/12 max-lg:flex-wrap max-lg:justify-center max-lg:text-center max-lg:py-44"
      id="Home"
    >
      <div className="hero-text relative max-w-lg">
        <h1
          className={`text-blacky text-5xl font-semibold dark:text-white max-xl:text-4xl max-sm:text-3xl`}
        >
          {displayedText}
          <span
            className={`border-r-4 border-blue ${
              isTypingDone ? "animate-blink" : ""
            }`}
          >
            &nbsp;
          </span>
        </h1>

        <p className="my-info text-mygray text-lg py-4 px-0 dark:text-gray-300 max-xl:text-base flex flex-wrap gap-1 justify-start max-lg:justify-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate={isTypingDone ? "visible" : "hidden"}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          animate={isTypingDone ? "visible" : "hidden"}
          custom={1.8} 
        >
          <Button contentButton={"Say Hello"} href={"#Contact"} />
        </motion.div>
        <motion.div
          className="achievements-cards flex w-full gap-1 mt-16"
          variants={slideUpVariant}
          initial="hidden"
          animate={isTypingDone ? "visible" : "hidden"}
          custom={2.4} 
        >
          <AchievementCard value={"1 Y."} detail={"Experince"} />
          <AchievementCard value={"12 +"} detail={"Project"} />
          <AchievementCard value={"5"} detail={"Happy Client"} />
        </motion.div>
      </div>
      <div className="hero-img w-1/3 rounded-full bg-white outline-blue outline-1 outline max-lg:w-3/5 max-sm:w-4/5 max-[400px]:w-full max-[400px]:rounded-2xl">
        <img
          src={heroImg}
          alt=""
          className="w-full rounded-full max-[400px]:rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
