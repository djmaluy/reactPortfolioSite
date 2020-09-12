import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";
import Projects from "./Projects/Projects";

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route exact path="/home" component={LandingPage} /> */}
      <Route path="/about" component={AboutMe} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/projects" component={Projects} />
      <Route
        render={() => (
          <h1
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "150px",
              fontSize: "80px",
            }}
          >
            Page not found
          </h1>
        )}
      />
    </Switch>
  );
};
