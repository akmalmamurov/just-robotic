// src/components/MedusaBg.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const MedusaBg = ({ className = "", style = {} }) => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
      }, []);

  return (
    <Particles
      init={particlesInit}
      className={className}
      style={style}
      options={{
        fpsLimit: 60,
        background: { color: "transparent" },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#FFE000" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 2, max: 4 } },
          links: {
            enable: true,
            distance: 120,
            color: "#FFE000",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.7, width: 2 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default MedusaBg;
