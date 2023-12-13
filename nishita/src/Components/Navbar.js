import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BsHouseFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFillBookFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function AppNavbar() {
  return (
    <div className="container">
      <div className="element-widget-container">
        <ul className="element-icon-list-items">
          <li className="element-icon-list-item">
            <a href="#home">
              <span className="element-icon-list-icon">
                <BsHouseFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#about">
              <span className="element-icon-list-icon">
                <BsPersonFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#education">
              <span className="element-icon-list-icon">
                <BsFillBookFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#experience">
              <span className="element-icon-list-icon">
                <BsFillBriefcaseFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#skills">
              <span className="element-icon-list-icon">
                <BsReverseLayoutTextSidebarReverse />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#achievements">
              <span className="element-icon-list-icon">
                <BsAwardFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
          <li className="element-icon-list-item">
            <a href="#contact">
              <span className="element-icon-list-icon">
                <BsFillEnvelopeFill />{" "}
              </span>
              <span className="element-icon-list-text"></span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="d-flex justify-content-center">
      <Navbar expand="lg" bg="light" variant="light">
        <h2>NISHITA</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <div className="elementor-widget-container">
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
            <a href="#home">
              <span className="elementor-icon-list-icon">
                <BsHouseFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#about">
              <span className="elementor-icon-list-icon">
                <BsPersonFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#education">
              <span className="elementor-icon-list-icon">
                <BsFillBookFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#experience">
              <span className="elementor-icon-list-icon">
                <BsFillBriefcaseFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#skills">
              <span className="elementor-icon-list-icon">
                <BsReverseLayoutTextSidebarReverse />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#achievements">
              <span className="elementor-icon-list-icon">
                <BsAwardFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
          <li className="elementor-icon-list-item">
            <a href="#contact">
              <span className="elementor-icon-list-icon">
                <BsFillEnvelopeFill />{" "}
              </span>
              <span className="elementor-icon-list-text"></span>
            </a>
          </li>
        </ul>
      </div> */}
      {/* </div> */}
    </div>
  );
}
