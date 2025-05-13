// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Header } from "@/components/header";
import { ScrollTop } from "@/components/scroll-top";
import { Footer } from "@/components/footer";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

export const Layout = () => {
  useEffect(() => {
    initParticlesEngine((engine) => {
      loadSlim(engine);
    });
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 220, density: { enable: true, area: 900 } },
      color: { value: "#FFDE00" },
      links: {
        enable: true,
        distance: 120,
        color: "#FFDE00",
        opacity: 0.2,
        width: 1,
      },
      move: { enable: true, speed: 1.5, outModes: { default: "out" } },
      size: { value: { min: 4, max: 5 } },
      opacity: { value: 0.8 },
      shape: { type: "circle" },
    },

    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.7 } },
        push: { quantity: 4 }, 
      },
    },
    detectRetina: true,
  };

  return (
    <Fragment>
      <Header />

      <div className="relative w-full bg-black">
        <Particles
          id="layout-particles"
          options={particlesOptions}
          className="fixed inset-0 z-0 pointer-events-none"
        />

        <main className="">
          <Outlet />
        </main>
      </div>

      <ScrollTop />
      <Footer />
    </Fragment>
  );
};

export default Layout;
