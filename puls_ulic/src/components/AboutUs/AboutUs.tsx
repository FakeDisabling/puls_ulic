import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./AboutUs.css";

function AboutUs() {
  const [image1Ref, image1InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [text1Ref, text1InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [image2Ref, image2InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [image3Ref, image3InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="about-us">
      <div className="container">
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={image1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          ваш первый выбор
          <br /> для заказа такси!
        </motion.h1>

        <div className="about-us-content">
          <motion.div
            className="image-container-about"
            ref={image1Ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={image1InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://images.pexels.com/photos/13801857/pexels-photo-13801857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us 1"
            />
          </motion.div>

          <div className="text-block">
            <motion.div
              className="text-container"
              ref={text1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={text1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h3>
                мы специализируемся на предоставлении высококачественных услуг
              </h3>
            </motion.div>

            <motion.div
              className="image-container-about"
              ref={image2Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={image2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src="https://images.pexels.com/photos/13931537/pexels-photo-13931537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About Us 2"
              />
            </motion.div>
          </div>
          <motion.div
            className="image-container-about"
            ref={image3Ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={image3InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src="https://images.pexels.com/photos/13801677/pexels-photo-13801677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us 2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
