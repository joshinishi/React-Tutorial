import React from "react";
import { BsHouseFill } from "react-icons/bs";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Home(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="home" className="container">
      <div className="cover-letter">
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal  
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in a modal!
          Woohoo, you are reading this text in   a modal!
          Woohoo, you are reading this text in a modal!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
      <div className="icon-border">
        <div className="icon">
          <BsHouseFill />
          <div className="icon-text">
            <p>introduce</p>
          </div>
        </div>
      </div>
      <div className="c-height text-light">
        <div className="nav-btn"></div>
        <div className="heading-home">
          <h2>NISHITA JOSHI</h2>
          <p>SOFTWARE ENGINEER</p>
        </div>
        <div className="content-home">
          <p>
            Software Engineer with a passion for developing innovative programs
            that expedite the efficiency and effectiveness of organizational
            success. Adept at identifying opportunities to enhance the user
            experience and develop new features to improve app functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
