import React from "react";
import Education from "./Education";
import Experience from "./Experience";

function Resume() {
  return (
    <section className="section" id="resume">
      <Education />
      <Experience />
    </section>
  );
}

export default Resume;
