import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

export default class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={0} style={{ minwidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://pomelnikov.com/images/obuchenie/Pomelnikov-htmlcss.jpg) center / cover",
              }}
            >
              Project 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={0} style={{ minwidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://pomelnikov.com/images/obuchenie/Pomelnikov-htmlcss.jpg) center / cover",
              }}
            >
              Project 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#000" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1)
      return (
        <div>
          <h2>This is ReactJS</h2>
        </div>
      );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>ReactJS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="project-item">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
