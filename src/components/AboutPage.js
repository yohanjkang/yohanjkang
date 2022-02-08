import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about">About</h1>
      <hr />
      <div className="profile">
        <img
          src="/images/profile.png"
          alt="/images/profile.png"
          className="profile-picture"
        />
        <div className="profile-desc">
          <div>
            <h2>Here's a little about myself</h2>
            <p>
              I’m a recent graduate at the University of Southern California
              where I received a B.S. in Computer Science with a specialization
              in Video Game Programming. I’m currently delving into programing
              for VR and developing games in Unity.
            </p>
          </div>
          <div>
            <h2>Skills & Tools</h2>
            <p>
              Here are some of the programming languages and tools I have
              experience with:
            </p>
          </div>
        </div>
      </div>
      <div className="skills-tools">
        <div className="skills-list">
          <h2>Skills</h2>
          <ul className="about-list">
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skills-list">
          <h2>Tools</h2>
          <ul className="about-list">
            <li>Unity3D</li>
            <li>Visual Studio</li>
            <li>VS Code</li>
            <li>Android Studio</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <div className="hobbies">
        <h2>Hobbies</h2>
        <p>I like to move it move it</p>
      </div>
    </div>
  );
}
