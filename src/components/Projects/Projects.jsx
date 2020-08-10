import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { ProjectItem1 } from "./ProjectItem1";
import { ProjectItem2 } from "./ProjectItem2";

export default class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <ProjectItem1 />
          <ProjectItem2 />
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
