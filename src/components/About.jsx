import React from "react";

const About = ({ theme }) => {
  return (
    <section
      data-theme={theme}
      className="bg-primary min-h-[100vh] w-full py-40 flex flex-col items-center text-text-primary"
      id="about"
    >
      <div className="w-[60%] flex flex-col">
        <div className="mr-[15%]">
          <h1 className="mb-5 text-4xl font-bold">Here's a Little About Me</h1>
          <p className="ml-5 leading-7">
            Hey there! My name is Yohan and I'm a sofware developer based on LA.
            I've been delving into the world of coding since 2019. Currently,
            I'm employed at Playbook3D where I worked on various projects using
            tools like Unity3D, React, and Blender. Outside of programming, I
            enjoy playing drums and guitar, working out, learning a new
            language, and playing whatever PC games my friends and I can find on
            Steam.
          </p>
        </div>
        <div className="mt-32">
          <h2 className="uppercase">Some of my skills</h2>
          <p className="mb-5 text-4xl font-bold">Skills I've Picked Up</p>
          <p className="text-2xl">Programming Languages</p>
          <ul className="">
            <li className="">C#</li>
            <li className="">Python</li>
            <li className="">JavaScript</li>
            <li className="">TypeScript</li>
            <li className="">HTML</li>
            <li className="">CSS</li>
          </ul>
          <p className="text-2xl">Technologies and Frameworks</p>
          <ul className="">
            <li className="">Unity3D</li>
            <li className="">React</li>
            <li className="">React Native</li>
            <li className="">Blender</li>
            <li className="">Tailwind CSS</li>
          </ul>
          <div>
            <p>I can also speak these languages:</p>
            <p className="text-2xl">Global Languages</p>
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
