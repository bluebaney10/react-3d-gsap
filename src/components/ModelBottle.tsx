import { useGSAP } from "@gsap/react";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const ModelBottle = () => {
  const gltf = useLoader(GLTFLoader, "./assets/models/josta.glb");
  const modelRef = useRef<THREE.Mesh>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const [startX, startY, startZ] = isMobile ? [0, -1, 0] : [2, 0, 0];
  const [posX] = isMobile ? [0] : [-2];

  const playModelHeroSection = () => {
    if (!modelRef.current) return;
    gsap
      .timeline()
      .to(modelRef.current.position, {
        x: startX,
        y: startY,
        z: startZ,

        duration: 1,
        ease: "power2.out",
      })
      .to(modelRef.current.rotation, {
        y: -0.7,
        duration: 1,
        ease: "power2.out",
      });
  };

  const playModelAdvantageSection = () => {
    if (!modelRef.current) return;
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".advantage-section",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    tl2
      .to(modelRef.current.position, {
        x: posX,
        ease: "power2.inOut",
      })
      .to(
        modelRef.current.rotation,
        {
          x: 0,
          y: Math.PI,
          z: 0,
          ease: "power2.inOut",
        },
        "<"
      );
  };

  const playModelMessageSection = () => {
    if (!modelRef.current) return;
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-section",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    tl1.to(modelRef.current.rotation, {
      x: 6.4,
      ease: "power2.inOut",
    });
  };

  const playModelProductSection = () => {
    if (!modelRef.current) return;
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".product-section",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    tl3
      .to(modelRef.current.position, {
        x: 0,
        y: 0.4,
        ease: "power2.inOut",
      })
      .to(
        modelRef.current.rotation,
        {
          y: -0.7,
          x: 0,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(".product-overview", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      });
  };

  useGSAP(() => {
    if (!modelRef.current) return;

    playModelHeroSection();
    playModelAdvantageSection();
    playModelMessageSection();
    playModelProductSection();
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);

      timer = window.setTimeout(() => {
        playModelHeroSection();
        playModelAdvantageSection();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <mesh>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        position={[6, 0, 0]}
        rotation={[0, -8, 0]}
        scale={[0.8, 0.8, 0.8]}
        children-0-castShadow
      />
    </mesh>
  );
};

export default ModelBottle;
