import { useRef, useState, useEffect, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Discuss = () => {
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

  return (
    <div
      className={`Discuss ${theme} bg-blacky dark:bg-black w-full h-80 text-center flex justify-center items-center max-sm:h-auto py-10`}
    >
      <div className="content max-w-xl max-sm:px-10">
        <motion.h1
          ref={ref}
          className="text-white text-center text-4xl font-semibold max-sm:text-3xl dark:text-blue"
          initial={{ opacity: 0, y: -100 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
        >
          Got a project in mind? <br /> Let’s talk about it!
        </motion.h1>

        <motion.p
          ref={ref}
          className="text-gray-400 py-5"
          initial={{ opacity: 0, y: 40 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey there! I’d love to help you bring your ideas to life through
          smart, modern web interfaces. Whether you’re starting from scratch or
          looking to improve an existing project, I’m here to listen,
          collaborate, and build something that truly works for you.
        </motion.p>
        <motion.a
          ref={ref}
          href="#Contact"
          className="text-white no-underline text-sm font-semibold bg-blue border-none rounded-md py-3 px-6 cursor-pointer hover:bg-white hover:text-blue hover:border-2 hover:border-solid hover:border-blue"
          initial={{ opacity: 0, y: 40 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's work Together
        </motion.a>
      </div>
    </div>
  );
};

export default Discuss;
