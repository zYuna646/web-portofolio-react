import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner/rocket .png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Game Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Rangga`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Full Stack Developer", "Game Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    As a beginner, I am versatile in programming and data
                    science and have a keen interest in game development. I
                    enjoy activities such as reading, writing, drawing, and
                    conducting research. I am enthusiastic about both personal
                    growth and collaborative teamwork.
                  </p>
                  <span className="social-text">
                    <div className="social-icon">
                      <a href="https://www.facebook.com/rangga.saputraboderingan">
                        <FaFacebook className="icon" />
                      </a>
                      <a href="https://www.instagram.com/zyuna646/">
                        <FaInstagram className="icon" />
                      </a>
                      <a href="https://www.linkedin.com/in/rangga-saputra-boderingan-910016254/">
                        <FaLinkedin className="icon" />
                      </a>
                      <a href="https://github.com/zYuna646">
                        <FaGithub className="icon" />
                      </a>
                    </div>
                    <button
                      className="vvd"
                      onClick={() => console.log("lets to connect")}
                    >
                      Lets To Connect
                    </button>
                  </span>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img"  className="headerImg"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
