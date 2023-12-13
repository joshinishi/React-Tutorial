import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function Experience() {
  return (
    <div className="container">
      <div className="icon-border">
        <div id="experience" className="icon-edu">
          <BsFillBriefcaseFill />
          <div className="icon-text-edu">
            <p>experience</p>
          </div>
        </div>
      </div>
      <div className="c-height text-light">
        <div className="heading-experience">
          <h2>Experience</h2>
        </div>
        <div className="content-experience">
          <div className="ex1">
            <div className="ex1-heading">
              <h2>SMART WEBTECH</h2>
            </div>
            <div className="ex1-content">
              <p>Java Automation Developer, </p>
              <p> WordPress Developer,</p>
              <p> Aug 2021 – Nov 2021</p>
            </div>
          </div>
          <div className="ex2">
            <div className="ex2-heading">
              <h2>CODAL SYSTEMS PVT. LTD.</h2>
            </div>
            <div className="ex2-content">
              <p>WordPress Developer</p>
              <p>
                [ With Dedicated Project along with Client Coordination and
                Management. ]
              </p>
              <p> [ Familiar with GitHub and Bitbucket. ] </p>
              <p>Apr 2022 – Feb 2023</p>
            </div>
          </div>
          <div className="ex2">
            <div className="ex3-heading">
              <h2>ISPARK IT SERVICES PVT. LTD​</h2>
            </div>
            <div className="ex3-content">
              <p>WordPress Developer</p>
              <p>Familiar with WP-Headless,</p>
              <p>WordPress Theme Customization and Plugin Customization.</p>
              <p>Core concepts of React Js.</p>
              <p>March 2023 – Till Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
