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

  // useFrame((state) => {
    // let curSection = Math.floor(data.scroll.current * data.pages);

    // if (curSection > 3) {
    //   curSection = 3;
    // }

    // if (curSection !== section) {
    //   setSection(curSection);
    // }

    // state.camera.position.x = cameraPositionX.get();
    // state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  // });

    const getPositionZ = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return 0.7; // Adjust this value to change the position when standing
      case "StandingUp":
        return 0.7;
      case "Sitting":
      default:
        return 0.2;
    }
  };

  const getPositionY = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return -1.1; // Adjust this value to change the position when standing
      case "StandingUp":
      case "Sitting":
      default:
        return -1.01;
    }
  };

  const getPositionX = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return 0.8; // Adjust this value to change the position when standing
      case "StandingUp":
        return 0.9;
      case "Sitting":
      default:
        return 1;
    }
  };

  return (
    <>
      {/* <OrbitControls
        // Limits for rotation around the y-axis (azimuthal angle)
        minAzimuthAngle={-Math.PI / 4} // Minimum azimuthal angle
        maxAzimuthAngle={Math.PI / 2}  // Maximum azimuthal angle

        // Limits for rotation up and down (polar angle)
        minPolarAngle={Math.PI / 4} // Minimum polar angle
        maxPolarAngle={Math.PI / 2} // Maximum polar angle

        // // Limits for zooming
        // minDistance={2} // Minimum distance for zoom
        // maxDistance={8} // Maximum distance for zoom
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
        animate={section}
      >
        <Avatar animation={characterAnimation} section={section} />
      </motion.group>


      <Room position={[0.5, -1.1 , -2]} scale={0.4}  rotation={[-0.02,-0.7,0]}/>

      {
      // section === 0 &&

      // <group position={[1, -1, 0]} rotation={[0,-0.5,0]}>
      //   <Chair scale={[0.5, 0.8, 0.5]}  />
      // </group>

      // <group 
      //   position={[1.2, -1, -0.3]}
      //   rotation={[0,-0.5,0]}
      //   scale={[1, 1.2, 1]}
      // >
      //   <VelvetBeanBag />
      // </group>
      }
        {/* <VelvetBeanBag position={[0, 0, 0]} rotation={[0,0,0]} scale={[1, 1,1]}/> */}

      {/* <Eletter position={[-2, -4, -10]} rotation={[0,0,0]} scale={[3, 3, 3]}  /> */}
      {/* <Hi position={[-2, -1, -1]} rotation={[0,0.4,0]} scale={[1, 1, 1]}  /> */}
      {/* <Hello position={[-1, 0, 0]} rotation={[-0.8,0.4,0.5]} scale={[1, 1, 1]}  /> */}

      {/* <Ehs position={[-3.5, 1, -2]} rotation={[1,-1.5,0]} scale={[0.1, 0.1, 0.1]}/> */}

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 || section === 2 ? -10 : -5,
          y: section === 1 ? -viewport.height : -3,
        }}
      >
        {/* <directionalLight position={[-5, 3, 5]} intensity={0.4} castShadow/> */}
        {/* <Float>
          <Hello position={[-1, 0, 0]} scale={[2, 2, 2]} />
        </Float> */}
      </motion.group>

      <ambientLight intensity={1} />
    </>
  );
};
