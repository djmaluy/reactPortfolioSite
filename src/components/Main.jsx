import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Contacts from "./Contacts";
import Projects from "./Projects";

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/experience" component={Experience} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};
