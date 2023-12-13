import React from "react";
import Button from "react-bootstrap/Button";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="container">
      <div className="icon-border">
        <div id="contact" className="icon-edu">
          <BsFillEnvelopeFill />
          <div className="icon-text-contact">
            <p>contact</p>
          </div>
        </div>
      </div>
      <div  className="c-height text-light">
        <div className="heading-contact">
          <h2>Contact</h2>
        </div>
        <div className="contact-data">
          <h4>Nishita Joshi</h4>
        </div>
        <div className="contact-details">
          <p>Mail: nishitajoshi9696@gmail.com</p>
          <p>Contact: 9714807904</p>
          <p>Ahmedabad.</p>
        </div>
        <div className="btn-contact">
          <Button variant="c-btn">
            <a
              href="https://www.linkedin.com/in/nishita-joshi-1bb5b6217"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </Button>
        </div>
        <div className="scroll-btn"></div>
      </div>
    </div>
  );
}
