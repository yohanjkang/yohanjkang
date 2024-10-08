import React, { useState } from "react";

const Home = ({ theme }) => {
  const [hovered, setHovered] = useState(true);

  return (
    <section
      data-theme={theme}
      id="home"
      className="bg-primary flex flex-col h-[100vh] justify-center items-center cursor-default"
      onMouseEnter={(e) => {}}
    >
      <div
        className={
          hovered
            ? "text-center home-parent hovered"
            : "text-center home-parent"
        }
      >
        <div
          className="relative py-4 px-6"
          onMouseEnter={() => setHovered(true)}
          onAnimationEnd={() => setHovered(false)}
        >
          <div className="px-5 space-y-2">
            <h1 className="text-text-primary text-4xl font-bold tracking-wide">
              Hey! I'm <span className="text-accent">Yohan</span>
            </h1>
            <p className="text-text-primary text-xl">
              I'm a software developer.
            </p>
          </div>
          <div className="header-line top absolute bg-secondary w-full h-[5px] top-0 left-0 animate" />
          <div className="header-line bottom absolute bg-secondary w-full h-[5px] bottom-0 right-0" />
          <div className="header-line left absolute bg-secondary h-full w-[5px] left-0 bottom-0" />
          <div className="header-line right absolute bg-secondary h-full w-[5px] right-0 top-0" />
        </div>
      </div>
    </section>
  );
};

export default Home;
