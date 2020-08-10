import React from "react";
import { Layout, Header, Content } from "react-mdl";
import { Main } from "./components/Main";
import "./App.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My portfolio" scroll>
          <HeaderNav />
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
