import React from "react";
import "./ResumePage.css";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume">
        <h1>Resume</h1>
        <hr className="resume-line-break" />
        <div className="education">
          <h2>Education</h2>
          <div className="resume-section">
            <img src="/images/USC_Logo.png" alt="" className="usc-logo" />
            <div>
              <h3>University of Southern California</h3>
              <h4>
                Bachelor of Science in Computer Science w/ Specialization in
                Video Game Programming, December 2021
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <img src="/images/USC_Logo.png" alt="" className="ecc-logo" />
            <div>
              <h3>El Camino College</h3>
              <h4>Associate of Science in Computer Science, June 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="resume-section">
            <img src="/images/USC_Logo.png" alt="" className="playbook-logo" />
            <div>
              <h3>PlaybookVR</h3>
              <h4>Software Developer, August 2021 - Present</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <img src="/images/USC_Logo.png" alt="" className="cff-logo" />
            <div>
              <h3>Code For Fun</h3>
              <h4>Computer Science Instructor, May 2021 - December 2021</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <img src="/images/USC_Logo.png" alt="" className="nhm-logo" />
            <div>
              <h3>Natural History Museum of Los Angeles</h3>
              <h4>Research Assistant</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
