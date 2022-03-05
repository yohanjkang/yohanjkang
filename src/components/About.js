import React from "react";

function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-center">
        <div className="about-description">
          <h2>Here's a little about my story</h2>
          <p>
            Hey there! My name is Yohan and I like to create things through
            code.
          </p>
          <br />
          <p>
            I'm a bit of a late bloomer when it comes to coding. I didn't write
            my first "Hello, World!" until I was 19! Despite this late start,
            I've been able to sharpen my skills throughout the years thanks to
            incredibly helpful professors and peers and the wonderful world of
            free online tutorials.
          </p>
          <br />
          <p>
            I recently graduated at the University of Southern California (USC)
            where I received a B.S. in Computer Science. At USC, I dived deelpy
            into the worlds of video game programming and frontend development.
            I’m currently furthering my skills in VR and Unity game development.
          </p>
        </div>
        <div className="skills">
          <h2>Some of my skills</h2>
          <p>
            Here are some of the skills I picked up throughout my academic
            career or while trying to expand my toolset during my free time:
          </p>
          <div className="skills-grid">
            <ul className="skills__column">
              <li className="item">JavaScript</li>
              <li className="item">React</li>
              <li className="item">Node.js</li>
              <li className="item">HTML</li>
              <li className="item">CSS</li>
              <li className="item">Sass</li>
            </ul>
            <ul className="skills__column">
              <li className="item">C#</li>
              <li className="item">Python</li>
              <li className="item">C/C++</li>
              <li className="item">Java</li>
              <li className="item">SQL</li>
              <li className="item">Kotlin</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
