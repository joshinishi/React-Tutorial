import React from "react";
import { BsPersonFill } from "react-icons/bs";

export default function About() {
  return (
    <div className="container">
      <div className="icon-border">
        <div id="about" className="icon-about">
          <BsPersonFill />
          <div className="icon-text-about">
            <p>about</p>
          </div>
        </div>
      </div>
      <div className="c-height text-light">
        <div className="heading-about">
          <h2>ABOUT ME</h2>
        </div>
        <div className="content-about">
          <p>
            software engineer with a passion for developing innovative programs
            that expedite the efficiency and effectiveness of organizational
            success. Well-versed in technology and writing code to create
            systems that are reliable and user-friendly.
          </p>
          <p>
            Professional Software Engineer skilled with web application and
            infrastructure experience.
          </p>
          <p>
            Confident communicator, strategic thinker, and innovative creator to
            develop software that is customized to meet a company’s
            organizational needs, highlight its core competencies, and further
            its success.
          </p>
          <p>
            Strongly interested in Communication and Leadership with Management
            of Product. Software Engineer with Quick Learning Quality and
            Enthusiastic with actively dedicated.
          </p>
        </div>
      </div>
    </div>
  );
}
