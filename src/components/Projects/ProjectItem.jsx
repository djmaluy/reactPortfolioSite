import React from "react";
import { Card, CardTitle, CardText, CardActions } from "react-mdl";
import classes from "./Projects.module.css";

const ProjectItem = (props) => {
  return (
    <Card className={classes.card}>
      <CardTitle className={classes.cardtitle}></CardTitle>
      <CardText className={classes.project_text}>
        <p>{props.text}</p>
      </CardText>
      <CardActions border className={classes.link}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Link for GitHub
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
