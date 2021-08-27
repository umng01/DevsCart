import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Template.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StarsIcon from "@material-ui/icons/Stars";
import FourKIcon from "@material-ui/icons/FourK";

const Template = () => {
  return (
    <div>
      <div style={{ marginTop: "60px" }} className="design-bar">
        <div className="bar">
          <span>
            <PlayCircleFilledIcon
              style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
            />
          </span>
          <h3>Learn in-demand skills with over various video courses</h3>
        </div>
        <div className="bar">
          <StarsIcon
            style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
          />
          <h3>Choose courses taught by real-world experts</h3>
        </div>
        <div className="bar">
          <FourKIcon
            style={{ fontSize: "50", marginRight: "15px", marginTop: "15px" }}
          />
          <h3>Learn at your own pace, with lifetime access at high Quality</h3>
        </div>
      </div>
      <div className="template">
        <Grid style={{ marginBottom: "50px" }} item xs={12}>
          <div className="row1">
            <div className="template-text">
              <h1>So much to choose from:</h1>
              <p>
                DevsCart aims to fulfil all your learning in one place. There
                are a variety of courses like Web Development, Android
                Development etc. to quench your thirst for knowledge.
              </p>
            </div>
            <img
              className="template-img"
              src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="row1">
            <img
              className="template-img"
              src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
              alt=""
            />
            <div className="template-text">
              <h1>Growing as A community:</h1>
              <p>
                We believe in growing as a community. DevsCart is not about
                fierce competition, but about encouraging growth at an
                individual level as well as on a team level.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="row1">
            <div className="template-text">
              <h1>Step-by-step learning:</h1>
              <p>
                Starting from the basics and going up to an advanced level by
                following a pre-planned curriculum is what makes DevsCart
                special!
              </p>
            </div>
            <img
              className="template-img"
              src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
              alt=""
            />
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Template;
