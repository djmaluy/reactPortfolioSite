import React from "react";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

export const HtmlCssProjects = () => {
  let HtmlCssProjects = [
    {
      text:
        "My first project, ActiveBox, was made up from a layout using HTML/CSS and some JS",
      url: "https://github.com/djmaluy/ActiveBox",
    },
    {
      text:
        "Second attempt to make up the site from the layout using bootstrap version 4",
      url: "https://github.com/djmaluy/tinyone",
    },
  ];

  return (
    <div className={classes.projects}>
      <div>
        <ProjectItem
          text={HtmlCssProjects[0].text}
          url={HtmlCssProjects[0].url}
        />
      </div>
      <div>
        <ProjectItem
          text={HtmlCssProjects[1].text}
          url={HtmlCssProjects[1].url}
        />
      </div>
    </div>
  );
};
