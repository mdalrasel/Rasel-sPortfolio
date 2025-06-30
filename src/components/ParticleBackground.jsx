// src/components/ParticleBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Background behind everything
        background: {
          color: { value: "#0f172a" }, // dark background (change if needed)
        },
        particles: {
          number: { value: 60 },
          color: { value: ["#8b5cf6", "#ec4899", "#38bdf8"] }, // Purple, pink, sky
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
