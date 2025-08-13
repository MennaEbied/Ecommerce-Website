import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroLights from "./HeroLights";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textContentRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        [textContentRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 lg:p-8 "
    >
      <div className="rounded-2xl bg-gray-200 dark:bg-gray-800 w-full max-w-6xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 lg:p-16">
          {/* Left Side: Text Content */}
          <div
            ref={textContentRef}
            className="z-10 text-center md:text-left md:w-1/2"
          >
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Beats Solo
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Wireless
            </h1>
            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white dark:text-gray-700 -mt-2 sm:-mt-4">
              HEADPHONE
            </h2>
            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-transform transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0">
              Shop By Category
            </button>
          </div>
          <div className="relative md:w-1/2 mt-8 md:mt-0 w-full h-[500px] z-20">
            <HeroLights />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
