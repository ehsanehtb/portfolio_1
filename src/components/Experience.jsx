import { ContactShadows, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Avatar } from "./models/Avatar";
import { Chair } from "./models/Chair";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { Background } from "./Background";
import { Hi } from "./models/Hi";
import { Eletter } from "./models/ELetter";
import { Hello } from "./models/Hello";
import { VelvetBeanBag } from "./models/VelvetBeanBag";
import { Ehs } from "./models/Ehs";
import { framerMotionConfig } from "../Config";
import { Room } from "./models/Room";

export const Experience = (props) => {
  const {section,  menuOpened } = props;

  const { viewport } = useThree();

  // const data = useScroll();

  // const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Sitting");

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 6;
  const officeScaleRatio = Math.max(0.3, Math.min(0.4 * responsiveRatio, 0.4));
  const avatarScaleRatio = Math.max(0.7, Math.min(1 * responsiveRatio, 1))

console.log("isMobile :" ,isMobile)

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -3 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 1 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  
  // const characterContainerAboutRef = useRef();

  useEffect(() => {
    // setCharacterAnimation("StandingUp");
    setTimeout(() => {
      if(section === 0)
      setCharacterAnimation("Sitting");
      else if(section === 1)
        setCharacterAnimation("Standing");
      // else if(section === 2)
      //   setCharacterAnimation("Greeting");
      else if(section === 3)
       setCharacterAnimation("Greeting");

    }, 600);
  }, [section]);


    const getPositionZ = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return 0.7; 
      case "StandingUp":
        return 0.7;
      case "Sitting":
      default:
        return (isMobile ?  -0.3: 0.2);
    }
  };

  const getPositionY = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return (isMobile ?  -viewport.height / 4 :-1); 
      case "StandingUp":
      case "Sitting":
      default:
        return (isMobile ?  -viewport.height / 3.3 :-1);
    }
  };

  const getPositionX = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return (isMobile ? 0.3 : 1); 
      case "StandingUp":
        return (isMobile ?  0.4 : 1);
      case "Sitting":
      default:
        return (isMobile ?  0.5 : 1);
    }
  };

  return (
    <>
      {/* <OrbitControls
        minAzimuthAngle={-Math.PI / 4} // Minimum azimuthal angle
        maxAzimuthAngle={Math.PI / 2}  // Maximum azimuthal angle
        minPolarAngle={Math.PI / 4} // Minimum polar angle
        maxPolarAngle={Math.PI / 2} // Maximum polar angle
        minDistance={2} // Minimum distance for zoom
        maxDistance={8} // Maximum distance for zoom
      /> */}
      <directionalLight
        castShadow
        position={[-2.5, 8, 5]}
        color="#f7c197"
        intensity={0.7}
      />
      <motion.group
        position={[getPositionX(), getPositionY(), getPositionZ()]}
        rotation={[0,-0.5,0]}
        scale={[avatarScaleRatio, avatarScaleRatio, avatarScaleRatio]}
        // animate={section}
      >
        <Avatar animation={characterAnimation} section={section} />
      </motion.group>


      {/* <Room 
        position={[0.5, -1.1 , -2]} 
        scale={0.4}  
        rotation={[-0.02,-0.7,0]}
      /> */}

      <motion.group
        position={[
          isMobile ? 0 : 0.5,
          isMobile ? -viewport.height / 3 : -1.1,
          -2,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation={[-0.02,-0.7,0]}
        animate={{
          y: isMobile ? -viewport.height / 3 : -1.1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Room section={section} />
        
      </motion.group>


      <ambientLight intensity={1} />
    </>
  );
};
