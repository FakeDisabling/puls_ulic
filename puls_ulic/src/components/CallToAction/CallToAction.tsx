import React from "react";
import "./CallToAction.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function CallToAction() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="call-to-action" ref={ref}>
      <div className="container">
        <motion.div
          className="call-to-action-content"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text">
            <small>позвоните или заполните форму</small>{" "}
            <h2>узнайте цены у нашего диспетчера.</h2>
          </div>
          <button className="book-now">заказать сейчас</button>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
