import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { ProjectItem1 } from "./ProjectItem1";
import { ProjectItem2 } from "./ProjectItem2";
import { ProjectReact1 } from "./ProjectReact1";
import { ProjectReact2 } from "./ProjectReact2";
import { ProjectReact3 } from "./ProjectReact3";
import classes from "./Projects.module.css";

export default class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className={classes.projects}>
          <div>
            <ProjectItem1 />
          </div>
          <div>
            <ProjectItem2 />
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1)
      return (
        <div className={classes.projects}>
          <div>
            <ProjectReact1 />
          </div>
          <div>
            <ProjectReact2 />
          </div>
          <div>
            <ProjectReact3 />
          </div>
        </div>
      );
  }

  render() {
    return (
      <div className="category-tabs" style={{ background: "#b2ebf2" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>ReactJS</Tab>
        </Tabs>
        <div className={classes.items}>
          <Grid>
            <Cell col={12}>
              <div className="project-item">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
