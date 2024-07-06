import { ContactShadows, Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useScroll } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { Chair } from "./Chair";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { Background } from "./Background";
import { Hi } from "./Hi";
import { Eletter } from "./ELetter";
import { Hello } from "./Hello";

export const Experience = (props) => {
  const {section,  menuOpened } = props;

  const { viewport } = useThree();

  // const data = useScroll();

  // const [section, setSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Sitting");

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // useEffect(() => {
  //   animate(cameraPositionX, menuOpened ? -5 : 0, {
  //     ...framerMotionConfig,
  //   });
  //   animate(cameraLookAtX, menuOpened ? 5 : 0, {
  //     ...framerMotionConfig,
  //   });
  // }, [menuOpened]);

  // const characterContainerAboutRef = useRef();

  useEffect(() => {
console.log("section :" ,section)
    // setCharacterAnimation("StandingUp");
    setTimeout(() => {
      if(section === 0)
      setCharacterAnimation("Sitting");
      else if(section === 1)
        setCharacterAnimation("Standing");
      else if(section === 2)
        setCharacterAnimation("Greeting");
      // else if(section === 3)
      //  setCharacterAnimation("Greeting");

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

  // let animation = "Sitting" 
  // if(section){
  //   if(section === 0)
  //     animation = "Sitting"
  //   if(section === 1)
  //     animation = "StandingUp"
  //   if(section === 2)
  //     animation = "Standing"
  //   if(section === 3)
  //     animation = "Greeting"
  // }


    const getPositionZ = () => {
    switch (characterAnimation) {
      case "Standing":
      case "Greeting":
        return 0.5; // Adjust this value to change the position when standing
      case "StandingUp":
        return 0.5;
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
        return -1;
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
     {/* <OrbitControls /> */}
      <directionalLight
        castShadow
        position={[-2.5, 8, 5]}
        color="#ffb3e6"
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* <Background /> */}
      <motion.group
        position={[getPositionX(), getPositionY(), getPositionZ()]}
        rotation={[0,-0.5,0]}
        animate={section}
        // transition={{
        //   duration: 0.1,
        // }}
      >
        {/* <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} color="#000000" /> */}
        <Avatar animation={characterAnimation} section={section} />
      </motion.group>

      {
      // section === 0 &&
      <group position={[1, -1, 0]} rotation={[0,-0.5,0]}>
        <Chair scale={[0.5, 0.8, 0.5]}  />
      </group>
      }

      {/* <Eletter position={[-2, -4, -10]} rotation={[0,0,0]} scale={[3, 3, 3]}  /> */}
      {/* <Hi position={[-2, -1, -1]} rotation={[0,0.4,0]} scale={[1, 1, 1]}  /> */}
      {/* <Hello position={[-1, 0, 0]} rotation={[-0.8,0.4,0.5]} scale={[1, 1, 1]}  /> */}

      

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 || section === 2 ? -10 : -5,
          y: section === 1 ? -viewport.height : -3,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <Hello position={[-1, 0, 0]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </Hello>
        </Float>
        {/* <Float>
          <mesh scale={[3, 3, 3]} position={[-5, -8, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -3, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float> */}
      </motion.group>

      <ambientLight intensity={1} />
    </>
  );
};
