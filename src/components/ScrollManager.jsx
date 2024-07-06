import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {

    let scrollPlace = 0
    if(section === 1 || section === 2){
      scrollPlace = 1.5
    }else{
      scrollPlace = section
    }

    const sectionHeight = data.el.clientHeight ;

    gsap.to(data.el, {
      duration: 1,
      scrollTop: scrollPlace * sectionHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {

    const curSection = Math.floor(data.scroll.current * (data.pages ));

    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }


    // if (data.scroll.current > lastScroll.current && curSection === 0) {
    //   onSectionChange(1);
    // }
    // if (
    //   data.scroll.current < lastScroll.current &&
    //   data.scroll.current < 1 / (data.pages - 1)
    // ) {
    //   onSectionChange(0);
    // }

    
    if (data.scroll.current > lastScroll.current) { //scroll down
      if (curSection === 0) {
        onSectionChange(1);
      } else if (curSection === 1) {
        onSectionChange(2);
      } else if (curSection === 2) {
        onSectionChange(3);
      }
    } else if (data.scroll.current < lastScroll.current) { //scroll up
      if (curSection === 1) {
        onSectionChange(0);
      } else if (curSection === 2) {
        onSectionChange(1);
      } else if (curSection === 3) {
        onSectionChange(2);
      }
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager;