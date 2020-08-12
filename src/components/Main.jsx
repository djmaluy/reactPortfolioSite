import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./AboutMe";

import Contacts from "./Contacts/Contacts";
import Projects from "./Projects/Projects";

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={LandingPage} />
      <Route path="/about" component={AboutMe} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};
