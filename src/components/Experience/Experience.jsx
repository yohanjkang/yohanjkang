import React from "react";
import ProfessionalExperienceItem from "./ProfessionalExperienceItem";
import EducationItem from "./EducationItem";

const experienceData = [
  {
    company: "Playbook3D",
    title: "Software Developer",
    timeFrame: "2021 - Present",
    description:
      "My work at Playbook can be divided into three major projects:\n\n" +
      "1. Developing VR animation and design tool using Unity3D and C#.\n" +
      "2. Creating a Blender add-on for a diffusion-based AI engine using Python and ComfyUI.\n" +
      "3. Building 3D web editor using Three.js, React, and TypeScript.\n\n" +
      "During my time at Playbook, I honed my skills in code optimization and performance, " +
      "version control management, and debugging/testing practices. Additionally, I mentored" +
      "new hires to ensure that our established coding practices were followed.",
    toolsets: [
      "Unity3D",
      "C#",
      "Blender",
      "Python",
      "Three.js",
      "React",
      "TypeScript",
    ],
  },
  {
    company: "Code For Fun",
    title: "Coding Instructor",
    timeFrame: "May - Dec 2021",
    description:
      "During my time as an instructor at this young-learners coding camp, I taught multiple " +
      "classes of 7-12 students in beginner to intermediate courses on Python. The intermediate " +
      "Python courses introduced students to data science concepts, including hands-on projects " +
      "using the Pandas library for data analysis.\n\n My role involved designing lesson plans, " +
      "guiding students through coding exercises, and fostering a collaborative learning environment.",
    toolsets: ["Python", "Pandas"],
  },
];

const educationData = [
  {
    institution: "University of Southern California",
    degree: "BS in Computer Science",
    timeFrame: "2019 - 2021",
  },
  {
    institution: "El Camino College",
    degree: "AS in Computer Science",
    timeFrame: "2018 - 2019",
  },
];

const Experience = ({ theme }) => {
  return (
    <section
      data-theme={theme}
      className="bg-primary min-h-[100vh] w-full py-40 flex flex-row items-center text-text-primary"
      id="experience"
    >
      <div className="flex flex-row mx-auto justify-between w-[60%]">
        {/* Experience */}
        <div className="relative flex-auto w-3/4">
          <h1 className="text-2xl font-bold mb-3">Professional Experience</h1>
          <div className="w-3/4">
            {experienceData.map(
              ({ company, title, timeFrame, description, toolsets }) => {
                return (
                  <ProfessionalExperienceItem
                    key={company}
                    company={company}
                    title={title}
                    timeFrame={timeFrame}
                    description={description}
                    toolsets={toolsets}
                  />
                );
              }
            )}
          </div>
        </div>
        {/* Education */}
        <div className="flex-auto w-1/4">
          <h1 className="text-2xl font-bold mb-3">Education</h1>
          {educationData.map(({ institution, degree, timeFrame }) => {
            return (
              <EducationItem
                key={institution}
                institution={institution}
                degree={degree}
                timeFrame={timeFrame}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
