import React from "react";

function Education() {
  return (
    <section className="section" id="education-section">
      <div className="section-title">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>
      <div className="education-center">
        <div className="education-item">
          <img src={require(`../images/USC_Logo.png`)} alt="USC Logo" />
          <h3>University of Southern California</h3>
          <div className="underline"></div>
          <h4>BS in Computer Science</h4>
          <p>August 2019 - December 2021</p>
        </div>
        <div className="education-item">
          <img src={require(`../images/ECC_Logo.png`)} alt="ECC Logo" />
          <h3>El Camino College</h3>
          <div className="underline"></div>
          <h4>AS in Computer Science</h4>
          <p>February 2017 - June 2019</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
