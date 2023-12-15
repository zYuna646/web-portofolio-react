import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../assets/img/banner/placeholder.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "SISAGIZ",
      position: "Mobile Developer & Data Scienctist",
      description:
        "SISAGIZ is a nutritional information system that functions to assess whether a toddler is stunted or not based on the provided data",
      url: "https://github.com/zYuna646/Sisagiz-APP",
      imgUrl: placeholder,
    },
    {
      title: "MyHealth",
      position: "Mobile Developer",
      description: "MyHealth is an intermediary application used by doctors to communicate with hearing-impaired patients with special needs regarding theri health",
      imgUrl: placeholder,
      url: "https://github.com/zYuna646/MyHealth-APP",
    },
    {
      title: "Business Startup",
      position: "Mobile Developer & Data Scienctist",
      description: "Design & Development",
      imgUrl: placeholder,
    },
    {
      title: "Business Startup",
      position: "Mobile Developer & Data Scienctist",
      description: "Design & Development",
      imgUrl: placeholder,
    },
    {
      title: "Business Startup",
      position: "Mobile Developer & Data Scienctist",
      description: "Design & Development",
      imgUrl: placeholder,
    },
    {
      title: "Business Startup",
      position: "Mobile Developer & Data Scienctist",
      description: "Design & Development",
      imgUrl: placeholder,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s...
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} md={4} sm={6}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
