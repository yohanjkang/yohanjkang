import React from "react";

const educationData = [
  {
    institution: "University of Southern California",
    degree: "BS in Computer Science",
    timeFrame: "August 2019 - December 2021",
  },
  {
    institution: "El Camino College",
    degree: "AS in Computer Science",
    timeFrame: "February 2018 - June 2019",
  },
];

const Education = () => {
  return (
    <section className="" id="education">
      <div className="">
        <h2>Education</h2>
        <div className=""></div>
      </div>
      <div className="">
        <div className="">
          <h3>University of Southern California</h3>
          <div className=""></div>
          <h4>BS in Computer Science</h4>
          <p>August 2019 - December 2021</p>
        </div>
        <div className="">
          <h3>El Camino College</h3>
          <div className=""></div>
          <h4>AS in Computer Science</h4>
          <p>February 2017 - June 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
