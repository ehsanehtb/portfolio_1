import Home from "./Home";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";

export const Section = (props) => {
  const { children, id } = props;

  return (
    <motion.section
      className="full-screen-item"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      id={id}
    >
      {children}
    </motion.section>
  );
};

const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="full-screen-container">
      <Home setSection={setSection} />
      <About />
      <Contact />
    </div>
  );
};

export default Interface;
