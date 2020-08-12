import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl";
import classes from "./Projects.module.css";

export const ProjectItem2 = () => {
  return (
    <Card>
      <CardTitle className={classes.cardtitle}></CardTitle>
      <CardText className={classes.project_text}>
        <p>
          Second attempt to make up the site from the layout using bootstrap
          version 4
        </p>
      </CardText>
      <CardActions border className={classes.link}>
        <a
          href="https://github.com/djmaluy/tinyone"
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
