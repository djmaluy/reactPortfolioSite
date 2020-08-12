import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import classes from "./Projects.module.css";
import { ReactProjects } from "./ReactProjects";
import { HtmlCssProjects } from "./HtmlCssProjects";

export default class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <HtmlCssProjects />;
    } else if (this.state.activeTab === 1) return <ReactProjects />;
  }

  render() {
    return (
      <div className="category-tabs" style={{ background: "#b2ebf2" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ fontSize: "18px", fontWeight: "bold" }}>HTML/CSS</Tab>
          <Tab style={{ fontSize: "18px", fontWeight: "bold" }}>ReactJS</Tab>
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
