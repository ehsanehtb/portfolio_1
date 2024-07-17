import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./Config";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  const calculateBackgroundGradient = (section) => {
    // Example: Define linear gradient based on section
    let gradient = "linear-gradient(120deg, ";

    switch (section) {
      case 0:
        gradient += "#ffd157, #ffcccc, #ccccff"; // Example gradient for section 1
        break;
      case 1:
      case 2:
        gradient += "#ccccff, #f7e49c ,#ffb3b3"; // Example gradient for section 1
        break;
      case 3:
        gradient += "#ffb3b3, #ccccff, #ffd157"; // Example gradient for section 2
        break;
      // Add more cases as needed
      default:
        gradient += "#ffd157, #ffcccc, #ccccff"; // Default gradient
        break;
    }

    gradient += ")";

    return gradient;
  };


  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
    <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 35 }} style={{ background: calculateBackgroundGradient(section)}}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <ScrollControls pages={3} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Experience section={section} menuOpened={menuOpened}/>
        <Scroll html>
          <Interface section={section} setSection={setSection}/>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </MotionConfig>
    </>
  );
}

export default App;
