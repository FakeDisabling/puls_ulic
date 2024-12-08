import React, { forwardRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faTaxi,
  faLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import "./NumbersSpeak.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const NumbersSpeak = forwardRef<HTMLElement, {}>((props, sectionRef) => {
  // Изменяем имя ref
  const [numbersInView, setNumbersInView] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setNumbersInView(true);
    }
  }, [inView]);

  return (
    <section className="numbers-speak" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          цифры не врут
        </motion.h2>

        <div className="numbers-grid">
          <motion.div
            className="number-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="icon-container"
              initial={{ rotate: -90 }}
              animate={inView ? { rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={faTachometerAlt} />
            </motion.div>
            {numbersInView && (
              <CountUp start={0} end={8700} duration={2} className="number" />
            )}
            <div className="description">км проехали</div>
          </motion.div>

          <motion.div
            className="number-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Задержка 0.2 секунды
          >
            <motion.div
              className="icon-container"
              initial={{ rotate: 90 }}
              animate={inView ? { rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={faUsers} />
            </motion.div>
            {numbersInView && (
              <CountUp start={0} end={4978} duration={2} className="number" />
            )}
            <div className="description">людей перевезено</div>
          </motion.div>

          <motion.div
            className="number-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="icon-container"
              initial={{ rotate: 90 }}
              animate={inView ? { rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={faTaxi} />
            </motion.div>
            {numbersInView && (
              <CountUp start={0} end={80} duration={2} className="number" />
            )}
            <div className="description">таксистов и водителей</div>
          </motion.div>

          <motion.div
            className="number-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="icon-container"
              initial={{ rotate: 90 }}
              animate={inView ? { rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={faTaxi} />
            </motion.div>
            {numbersInView && (
              <CountUp start={0} end={2478} duration={2} className="number" />
            )}
            <div className="description">счастливых клиентов :)</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default NumbersSpeak;
