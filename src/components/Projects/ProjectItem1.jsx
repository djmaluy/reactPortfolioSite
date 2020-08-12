import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl";
import classes from "./Projects.module.css";

export const ProjectItem1 = () => {
  return (
    <Card>
      <CardTitle className={classes.cardtitle}></CardTitle>
      <CardText className={classes.project_text}>
        <p>
          My first project, ActiveBox, was made up from a layout using HTML/CSS
          and some JS
        </p>
      </CardText>
      <CardActions border className={classes.link}>
        <a
          href="https://github.com/djmaluy/ActiveBox"
          target="_blank"
          rel="noopener noreferrer"
          colored
        >
          Link for GitHub
        </a>
      </CardActions>
    </Card>
  );
};
