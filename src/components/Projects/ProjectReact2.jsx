import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl";
import classes from "./Projects.module.css";

export const ProjectReact2 = () => {
  return (
    <Card>
      <CardTitle className={classes.title_pic}></CardTitle>
      <hr />
      <CardText className={classes.project_text}>
        <p>My first project on react. Trained by IT incubator lessons</p>
      </CardText>
      <CardActions border className={classes.link}>
        <a
          href="https://github.com/djmaluy/my-social"
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
