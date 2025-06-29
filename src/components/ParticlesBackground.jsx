// src/components/ParticlesBackground.jsx
import React from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0f172a" }, // dark bg, Tailwind dark:bg-slate-900
        },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#a855f7", "#6366f1", "#ec4899"], // purple, indigo, pink
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
