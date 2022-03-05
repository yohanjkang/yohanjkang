import React from "react";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="project">
          <img src={require(`../images/davinci_code.png`)} alt="" />
          <div className="project__content">
            <h3>DaVinci Code</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              atque repellat non enim illo ratione temporibus corporis tenetur
              eligendi. Architecto accusantium facere cupiditate quis voluptate
              corrupti ducimus aspernatur fugiat ad.
            </p>
            <div className="project__tools">
              <div className="tool">Socket.io</div>
              <div className="tool">Phaser 3</div>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={require(`../images/coterie.png`)} alt="" />
          <div className="project__content">
            <h3>Coterie</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              atque repellat non enim illo ratione temporibus corporis tenetur
              eligendi. Architecto accusantium facere cupiditate quis voluptate
              corrupti ducimus aspernatur fugiat ad.
            </p>
            <div className="project__tools">
              <div className="tool">Android Studio</div>
              <div className="tool">Java</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
