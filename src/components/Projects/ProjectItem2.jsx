import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

export const ProjectItem2 = () => {
  return (
    <Card shadow={0} style={{ minwidth: "450px", margin: "auto" }}>
      <CardTitle
        style={{
          color: "#000",
          height: "176px",
          background:
            "url(https://pomelnikov.com/images/obuchenie/Pomelnikov-htmlcss.jpg) center / cover",
        }}
      >
        Project 2
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </CardText>
      <CardActions border>
        <Button colored>GitHub</Button>
      </CardActions>
    </Card>
  );
};
