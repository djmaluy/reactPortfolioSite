import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { LandingPageSocialItems } from "./LandingPageSocialItems";
import { LandingPageAvatar } from "./LandingPageAvatar";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <LandingPageAvatar />
            <div className="banner-text">
              <h1>Junior front-end developer (ReactJS)</h1>
              <hr />
              <p>
                HTML5/CSS3 | JavaScript(ES6)| Bootstrap | Materialize | MySQL |
                ReactJS
              </p>
              <LandingPageSocialItems />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
