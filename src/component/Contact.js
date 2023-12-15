import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/banner/foto.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img  className="my-foto" src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form className="form-contact" onSubmit={() => {console.log('send');}}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value="Full Name : Rangga Saputra Boderingan" placeholder="Full Name" disabled/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value="Email : anggarangga646@gmail.com" placeholder="Email Address" disabled/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value="Phone : +628" placeholder="Phone No." disabled/>
                    </Col>
                   
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}