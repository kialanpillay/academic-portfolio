import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
import image01 from "../assets/Mellon-Found-Logo.png";
import image02 from "../assets/logo-nrf.jpg";
import image03 from "../assets/ford-foundation-logo.jpg";

export default class Research extends React.Component {
  render() {
    return (
      <div className="App-body">
        <Container style={{}}>
          <Row
            style={{
              marginTop: "2rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Research Output</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeText">78 Publications</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Button className="button" variant="warning" size="lg">
                <Link className="buttonLink" to="/publications">
                  View My Publications
                </Link>
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "2rem",
            }}
          >
            <Col>
              <h1 className="largeText">6 Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col
              md="auto"
              style={{
                marginRight: "10rem",
                marginBottom: "1rem",
              }}
            >
              <Button className="button" variant="warning" size="lg">
                <Link className="buttonLink" to="/projects">
                  View My Projects
                </Link>
              </Button>
            </Col>
            <Col></Col>
            <Col md="auto">
              <Carousel
                style={{
                  height: "20rem",
                  width: "40rem",
                  color: "#282c34",
                }}
              >
                <Carousel.Item
                  style={{
                    marginTop: "0rem",
                    alignItems: "left",
                  }}
                >
                  <img
                    width="250"
                    src={image01}
                    alt="Mellon Foundation"
                    style={{
                      marginBottom: "1rem",
                      border: "1px solid whitesmoke",
                      borderRadius: "5px",
                    }}
                  />
                  <h3 className="projectSubtitle">Mellon Foundation</h3>
                  <a className="funderLink" href={"https://mellon.org"} target="_blank">
                    <h4>Project Funder</h4>
                  </a>
                </Carousel.Item>
                <Carousel.Item
                  style={{
                    marginTop: "0rem",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <img
                    width="400"
                    src={image03}
                    alt="Ford Foundation"
                    style={{
                      marginBottom: "1rem",
                      border: "1px solid whitesmoke",
                      borderRadius: "5px",
                    }}
                  />
                  <h3 className="projectSubtitle">Ford Foundation</h3>
                  <a className="funderLink" href={"https://fordfoundation.org"} target="_blank">
                    <h4>Project Funder</h4>
                  </a>
                </Carousel.Item>
                <Carousel.Item
                  style={{
                    marginTop: "0rem",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="250"
                    src={image02}
                    alt="NRF"
                    style={{
                      marginBottom: "1rem",
                      border: "1px solid whitesmoke",
                      borderRadius: "5px",
                    }}
                  />
                  <h3 className="projectSubtitle">
                    National Research Foundation
                  </h3>
                  <a className="funderLink" href={"https://www.nrf.ac.za"} target="_blank">
                    <h4>Project Funder</h4>
                  </a>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
