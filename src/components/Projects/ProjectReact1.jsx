import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl";
import classes from "./Projects.module.css";

export const ProjectReact1 = () => {
  return (
    <Card>
      <CardTitle className={classes.title_pic}></CardTitle>
      <hr />
      <CardText className={classes.project_text}>
        <p>
          I wrote this project based on the lessons of one of the bloggers on
          YouTube
        </p>
      </CardText>
      <CardActions border className={classes.link}>
        <a
          href="https://github.com/djmaluy/react-site"
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
