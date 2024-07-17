import { Section } from "./Interface";
import { motion } from "framer-motion";

const Home = (props) => {
  const { setSection } = props;
  return (
    <Section id="home">
      {/* <h1 className="sect">hi</h1> */}
      
      <h1 
      className="home-head"
      >
        Hi, I'm
        <br />
        <span 
        // className="bg-white px-1 italic"
        >Ehsaneh Taleb</span>
      </h1>
      <motion.p
        className="home-text"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a software engineer
        <br />
        excited to learn new tools
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="contact_button"
      >
        Contact me
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
    </Section>
  );
};


export default Home
