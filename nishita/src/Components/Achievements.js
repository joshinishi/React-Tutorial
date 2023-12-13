import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import scrum from "./scrum.jpeg";
import scrum2 from "./scrum2.jpg";
import pm from "./pm.jpg";
import react from "./react.jpg";
import { BsAwardFill } from "react-icons/bs";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

export default function Achievements() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="container">
      <div className="icon-border">
        <div id="achievements" className="icon-achieve">
          <BsAwardFill />
          <div className="icon-text-achieve">
            <p>achievements</p>
          </div>
        </div>
      </div>
      <div className="c-height text-light">
        <div className="heading-achievements">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-cards">
          <Container className="my-5">
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <img src={scrum} className="card-img img-fluid" alt="Scrum" />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <img
                  src={scrum2}
                  className="card-img img-fluid"
                  alt="Scrum 2"
                />
              </Col>
            </Row>
          </Container>
          <Container className="my-5">
            <Row>
              <Col xs={12} md={6} className="mb-3">
                <img
                  src={pm}
                  className="card-img img-fluid"
                  alt="Project Management"
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <img src={react} className="card-img img-fluid" alt="React" />
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="button">
              <h2>BOOK</h2>
              <p>First Book of Mine has been Authorized by Me</p>
              <Button variant="book-btn" onClick={toggleShowA}>
                {/* <a
                  href="https://www.amazon.in/BIOPIC-INTROVERT-Untold-Biopic-Personality-ebook/dp/B0CFM16VVV/ref=sr_1_3?crid=3OGP0E5AYP46K&keywords=Nishita+Joshi&qid=1693918810&sprefix=nishita+jos%2Cspecialty-aps%2C788&sr=8-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  biopic of introvert!
                </a> */}
                biopic of introvert!
              </Button>
              <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                  <strong className="me-auto">Book Link</strong>
                  <small>Click</small>
                </Toast.Header>
                <Toast.Body>
                  <a
                    href="https://www.amazon.in/BIOPIC-INTROVERT-Untold-Biopic-Personality-ebook/dp/B0CFM16VVV/ref=sr_1_3?crid=3OGP0E5AYP46K&keywords=Nishita+Joshi&qid=1693918810&sprefix=nishita+jos%2Cspecialty-aps%2C788&sr=8-3"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "green", textDecoration: "none", fontWeight: "bold" }}
                    onMouseOver={(e) => (e.target.style.color = "green")}
                    onMouseOut={(e) => (e.target.style.color = "black")}
                  >
                    {" "}
                    BIOPIC OF INTROVERT!
                  </a>
                </Toast.Body>
              </Toast>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
