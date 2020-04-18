import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import image01 from "../assets/Mellon-Found-Logo.png";
import image03 from "../assets/b2ap3_large_ford-foundation-logo.png";

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
              <h1 className="largeText">75 Publications</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Button className="button" variant="warning" size="lg" href="/publications">
                View My Publications
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
            <Col md="auto"
              style={{
                marginRight: "20rem",
                marginBottom: "1rem",
              }}
            >
              <Button
                className="button"
                variant="warning"
                size="lg"
                href="/projects"
              >
                View My Projects
              </Button>
            </Col>
            <Col md="auto">
              <Card
                bg="warning"
                style={{
                  width: "16rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Card.Img variant="top" src={image01} />
                <Card.Body>
                  <Card.Title className="funder">Project Funder</Card.Title>
                  <Card.Text>
                    <a className="funderLink" href={"https://mellon.org"}>
                      Mellon Foundation
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              <Card
                bg="warning"
                style={{
                  width: "16rem",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                <Card.Img variant="top" src={image03} />
                <Card.Body>
                  <Card.Title className="funder">Project Funder</Card.Title>
                  <Card.Text>
                    <a
                      className="funderLink"
                      href={"https://fordfoundation.org"}
                    >
                      Ford Foundation
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
