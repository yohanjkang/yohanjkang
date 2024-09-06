import React from "react";

const About = ({ theme }) => {
  return (
    <section
      data-theme={theme}
      className="bg-black h-[100vh] w-full flex flex-col items-center text-text-primary"
      id="about"
    >
      <div className="w-[70%] flex flex-col">
        <h2 className="text-center">About Me</h2>
        <div className="">
          <h1>Here's a little about me</h1>
          <p>
            Hey there! My name is Yohan and I'm a sofware developer based on LA.
            I've been delving into the world of coding since 2019. Currently,
            I'm employed at Playbook3D where I worked on various projects using
            tools like Unity3D, React, and Blender.
          </p>
          <p>
            Outside of programming, I enjoy playing drums and guitar, working
            out, learning Japanese, and playing whatever PC games my friends and
            I can find on Steam.
          </p>
        </div>
        <div className="">
          <h2>Some of my skills</h2>
          <p>Here are some of the skills I've picked up:</p>
          <ul className="">
            <li className="">C#</li>
            <li className="">Python</li>
            <li className="">JavaScript</li>
            <li className="">TypeScript</li>
            <li className="">React</li>
            <li className="">React Native</li>
            <li className="">HTML</li>
            <li className="">CSS</li>
            <li className="">Tailwind CSS</li>
          </ul>
          <div>
            <p>I can also speak these languages:</p>
            <ul>
              <li>Korean</li>
              <li>Spanish</li>
              <li>Japanese</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
