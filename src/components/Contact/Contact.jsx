import React, { useEffect } from "react";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import phoneImg from "./../../assets/images/phone.svg";
import gmailImg from "./../../assets/images/gmail.svg";
import locationImg from "./../../assets/images/location.svg";
import { MuiTelInput } from "mui-tel-input";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
    <section
      className="contact w-4/5 mx-auto my-0 py-10 px-0 max-xl:w-10/12 max-lg:w-11/12 max-sm:w-auto"
      id="Contact"
    >
      <motion.p
        ref={ref}
        className="top-title text-blue  font-semibold text-lg w-max rounded-1/2 mx-auto my-0 p-3 border border-solid border-blue"
        initial={{ opacity: 0, y: 40 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>Contact</span>
      </motion.p>
      <motion.h1
        ref={ref}
        className="text-blacky max-sm:text-3xl max-sm:text-wrap dark:text-white text-4xl w-max my-0 mx-auto font-bold pt-3"
        initial={{ opacity: 0, y: -100 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        Let's Discuss Your <span className="text-blue">Project</span>
      </motion.h1>

      <div className="contact-info flex justify-between pt-12 gap-20 max-lg:flex-col">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          className="info w-1/3 flex flex-col gap-5 max-lg:w-11/12 max-lg:mx-auto"
          animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactInfoCard
            image={phoneImg}
            label={"Call me"}
            value={"+963 998-740-059"}
          />
          <ContactInfoCard
            image={gmailImg}
            label={"Email me"}
            value={"mohammed.z.ismaeel@gmail.com"}
          />
          <ContactInfoCard
            image={locationImg}
            label={"Address"}
            value={"Rukn-Aldin, Damascus, Syria."}
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          className="form w-2/3 flex justify-end max-lg:w-full max-lg:justify-start"
          animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            className="flex flex-wrap justify-end gap-y-5 gap-x-14 max-md:justify-center  max-w-2xl max-lg:justify-start"
            method="POST"
          >
            <input
              type="hidden"
              name="apikey"
              value="60cdcb2b-40b6-4a3c-9df2-4917c0f5b49c"
            />

            <input
              type="text"
              placeholder="Full name"
              required
              className="w-5/12 dark:bg-slate-200 max-sm:w-11/12 h-14 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="fullname"
              name="fullname"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-5/12 bg-white dark:bg-slate-200 max-sm:w-11/12 h-14 border border-solid border-neutral-300 rounded-md pl-3 outline-none focus:border-blue focus:border-2"
              id="youremail"
              name="youremail"
            />

            <MuiTelInput
              value={value}
              onChange={handleChange}
              className="w-5/12 dark:bg-slate-200 bg-white max-sm:w-11/12 rounded-md"
              defaultCountry="SY"
              required
              placeholder="Your Phone"
              id="phone"
              name="phone"
            />

            <div className="flex items-center gap-2 w-5/12 rounded border border-solid border-neutral-300 bg-white dark:bg-slate-200 max-sm:w-11/12">
              <select
                name="currency"
                id="currency"
                className="h-14 pl-2 pr-2 bg-white rounded dark:bg-slate-200 outline-none"
                required
              >
                <option value="USD">$ (USD)</option>
                <option value="EUR">€ (EUR)</option>
              </select>

              <input
                type="number"
                placeholder="Budget"
                required
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none flex-1 h-14 pl-3 outline-none rounded text-black bg-white dark:bg-slate-200"
                id="budget"
                name="budget"
              />
            </div>
            <textarea
              id="textarea"
              placeholder="Message"
              required
              className="w-11/12 dark:bg-slate-200 h-32 border border-solid border-neutral-300 rounded py-1 px-3 outline-none resize-none focus:border-blue focus:border-2"
              name="message"
            ></textarea>

            {/* <!-- Honeypot Spam Protection --> */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <input
              type="submit"
              value="Submit"
              className="w-36 bg-blue text-white font-medium text-base p-2 mt-3 cursor-pointer rounded-md border border-solid hover:bg-white hover:font-semibold hover:border-solid hover:border-blue hover:text-blue focus:border-blue focus:border-2"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
