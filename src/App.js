import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Main } from "./components/Main";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My portfolio" scroll>
          <Navigation>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </Navigation>
        </Header>
        <Drawer title="My portfolio">
          <Navigation>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
