import React from "react";
import { BsFillBookFill } from "react-icons/bs";

export default function Education() {
  return (
    <div className="container">
      <div className="icon-border">
        <div id="education" className="icon-edu">
          <BsFillBookFill />
          <div className="icon-text-edu">
            <p>education</p>
          </div>
        </div>
      </div>
      <div  className="c-height text-light">
        <div className="heading-education">
          <h2>EDUCATION</h2>
          <p>2017 – 2020</p>
        </div>
        <div className="content-education">
          <h2>Diploma</h2>
          <span>Computer Engineering</span>
          <p>Government Polytechnic Jamnagar.</p>
        </div>
      </div>
    </div>
  );
}
