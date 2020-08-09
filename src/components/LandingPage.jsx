import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src="https://lh3.googleusercontent.com/proxy/t3nCXOJMeqA6w8IsYqXrcfkA9B0sElthWpATCZPUAsnUjs9klFXfE4OM4j7u4bjBqt8_iGNj0nG-ao2IKj3z_3mlsAxxD8oOwQMhnSuwE7tgBjFt82-aU2pgoCkiUEFSczVAT8SMk4-Ujyn0Dg"
              alt="avatar"
            />
            <div className="banner-text">
              <h1>Junior front-end developer (ReactJS)</h1>
              <hr />
              <p>
                HTML5/CSS3 | JavaScript(ES6)| Bootstrap | Materialize | MySQL |
                ReactJS
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/andrii-tsvirko/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100015343337267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-facebook-square"></i>
                </a>
                <a
                  href="mailto:andrii.tsvirko@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-google"></i>
                </a>
                <a
                  href="https://github.com/djmaluy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github-square"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
