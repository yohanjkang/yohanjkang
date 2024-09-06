import React from "react";

const projectData = [
  {
    name: "ArceDex",
    desc:
      'ArceDex is a react native application that is inspired by the "dataDex" mobile application. ' +
      "It's a Pokémon encyclopedia that lists the 1000+ existing Pokémon species along with additional information " +
      "such as their type(s), base stats, evolution chain, and more.",
    tools: ["React Native", "GraphQL", "JavaScript"],
  },
  {
    name: "DaVinci Code",
    desc:
      'DaVinci Code is an online multiplayer card game based on the "DaVinci Code" board game I often play with my friends. ' +
      "Since it was difficult for us to meet during the lockdown, I decided to make an online version of the game. " +
      "It includes features such as an initial lobby and an in-game chat.",
    tools: ["Socket.IO", "Phaser 3", "Heruko"],
  },
  {
    name: "Coterie",
    desc:
      "Coterie is a social networking app for building new communities for special interests. " +
      "This 6-person team project allows users to create specialized rooms where they can share, " +
      "discuss, and organize with other users sharing similar interests.",
    tools: ["Android Studio", "Java", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-[100vh]" id="projects">
      <div className="">
        <h2>Projects</h2>
        <div className=""></div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
    </section>
  );
};

export default Projects;
