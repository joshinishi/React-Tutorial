import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";


export default function Skills() {
  return (
    <div className="container">
      <div className="icon-border">
        <div id="skills" className="icon-skill">
          <BsReverseLayoutTextSidebarReverse />
          <div className="icon-text-skill">
            <p>Skills</p>
          </div>
        </div>
      </div>
      <div  className="c-height text-light">
        <div className="heading-experience">
          <h2>skills</h2>
        </div>
        <div className="accordian-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Technical Skills</Accordion.Header>
              <Accordion.Body>
                <div className="acc-list">
                  <p>WP – Headless.</p>
                  <p>WP Custom Gutenberg Block.</p>
                  <p>
                    WordPress Theme Customization and Plugin Customization..
                  </p>
                  <p>React Js.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Non-Technical Skills</Accordion.Header>
              <Accordion.Body>
                <div className="acc-list">
                  <p>Project Management.</p>
                  <p>Client Coordination.</p>
                  <p>Decision Making.</p>
                  <p>Problem Solution.</p>
                  <p>Reading</p>
                  <p>Writing</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
