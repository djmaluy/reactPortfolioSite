import React from "react";
import classes from "./Projects.module.css";
import ProjectItemReact from "./ProjectItemReact";

export const ReactProjects = () => {
  let ReactProjectsItems = [
    {
      id: 1,
      text:
        "I wrote this project based on the lessons of one of the bloggers on YouTube",
      url: "https://github.com/djmaluy/react-site",
    },
    {
      id: 2,
      text: "My first project on react. Trained by IT incubator lessons",
      url: "https://github.com/djmaluy/my-social",
    },
    {
      id: 3,
      text: "Portfolio site written in react using Material UI",
      url: "https://github.com/djmaluy/reactPortfolioSite",
    },
  ];

  let ReactProjects = ReactProjectsItems.map((project) => {
    return (
      <div>
        <ProjectItemReact
          key={project.id}
          text={project.text}
          url={project.url}
        />
      </div>
    );
  });

  return <div className={classes.projects}>{ReactProjects}</div>;
};
