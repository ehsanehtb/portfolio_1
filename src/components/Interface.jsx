import { useEffect } from "react"
import Home from "./Home"
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";

export const Section = (props) => {
    const { children } = props

    return( 
        <motion.section 
            className="full-screen-container"
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 1,
                transition:{
                    duration: 1,
                    delay: 0.5,
                }
            }}
        >
            {children}
        </motion.section>
    )
}

const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="full-screen-item">
        <Home setSection={setSection}/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Interface
