import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  const [hovered, setHovered] = useState(true);

  return (
    <div
      className="flex flex-col h-[100vh] justify-center items-center cursor-default"
      onMouseEnter={(e) => {}}
    >
      <div
        className={
          hovered ? "text-center parent hovered" : "text-center parent"
        }
      >
        <div
          className="relative py-4 px-6"
          onMouseEnter={() => setHovered(true)}
          onAnimationEnd={() => setHovered(false)}
        >
          <div className="px-5 space-y-2">
            <h1 className="text-4xl tracking-wide">
              Hey! I'm <span className="text-accent">Yohan</span>
            </h1>
            <p className="text-xl">I'm a software developer.</p>
          </div>
          <div className="header-line top absolute bg-black w-full h-[5px] top-0 left-0 animate" />
          <div className="header-line bottom absolute bg-black w-full h-[5px] bottom-0 right-0" />
          <div className="header-line left absolute bg-black h-full w-[5px] left-0 bottom-0" />
          <div className="header-line right absolute bg-black h-full w-[5px] right-0 top-0" />
        </div>
        <a href="#about">
          <FaArrowDown
            size={30}
            className="absolute right-20 bottom-20 animate-bounce"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
