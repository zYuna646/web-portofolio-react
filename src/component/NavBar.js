import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
import React from "react";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [activeLink, setactiveLink] = useState("Home");
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setactiveLink("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setactiveLink("Projects")}
            >
              Project
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setactiveLink("Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
