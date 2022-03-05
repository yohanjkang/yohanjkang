import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const experiences = [
  {
    company: "Playbook",
    jobTitle: "VR Developer",
    timeFrame: "August 2021 - Present",
    descriptions: [
      "Developed and implemented functionality for a VR design tool using Unity3D.",
      "Created various assets using the Blender 3D modeling software.",
      "Fixed bugs throughout multiple stages of production.",
      "Simultaneously managed multiple functionalities to meet strict deadlines.    ",
    ],
  },
  {
    company: "Code For Fun",
    jobTitle: "Computer Science Instructor",
    timeFrame: "May 2021 - December 2021",
    descriptions: [
      "Instructed classes in multiple levels of the Python and Scratch programming languages.",
      "Enhance student learning in online and in-person environments by using instructional strategies and engaging classroom activities.",
    ],
  },
  {
    company: "Natural History Museum of Los Angeles",
    companyBtn: "NHMLA",
    jobTitle: "Research Assistant",
    timeFrame: "February 2020 - May 2020",
    descriptions: [
      "Collected and maintained necessary data in the museum database system.",
      "Assisted in laboratory-based research studying the anatomy of echinoderms while following proper lab procedures.",
    ],
  },
];

function Experience() {
  const [index, setIndex] = useState(0);

  const onClick = (_index) => {
    if (index === _index) return;
    const container = document.querySelector(".experience-info");
    container.classList.add("hidden");

    setTimeout(() => {
      setIndex(_index);
      container.classList.remove("hidden");
    }, 400);
  };

  const { company, jobTitle, timeFrame, descriptions } = experiences[index];
  return (
    <section className="section" id="experience">
      <div className="section-title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="experience-center">
        <div className="btn-container">
          {experiences.map((item, itemIndex) => {
            return (
              <button
                key={item.id}
                onClick={() => onClick(itemIndex)}
                className={`experience-btn ${
                  index === itemIndex ? "active-btn" : ""
                }`}
              >
                {item.companyBtn || item.company}
              </button>
            );
          })}
        </div>
        <div className="divider-line"></div>
        <article className="experience-info">
          <h3>{company}</h3>
          <h4>{jobTitle}</h4>
          <p className="experience-date">{timeFrame}</p>
          {descriptions.map((desc, index) => {
            return (
              <div key={index} className="description">
                <FontAwesomeIcon className="job-icon" icon={faChevronRight} />
                <div className="job-desc">
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
