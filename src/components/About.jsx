import { Section } from "./Interface";
import { motion } from "framer-motion";

const About = () => {

  const skills = [
    {
      title: "JavaScript",
      level: 90,
    },
    {
      title: "React",
      level: 90,
    },
    {
      title: "Threejs / React Three Fiber",
      level: 60,
    },
    {
      title: "HTML / CSS",
      level: 100,
    },
    {
      title: "JQuery",
      level: 65,
    },
    {
      title: "Typescript",
      level: 60,
    },
    {
      title: "3D Modeling",
      level: 40,
    },
  ];



    return (
      <Section id="about">
      {/* <h1 className="sect" >about</h1> */}

      <motion.div whileInView={"visible"}>
        <h2 className="section-title">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="skill-title"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
    );
  };

  export default About