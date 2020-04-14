import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

export default class Research extends React.Component {
  render() {
    return (
      <div className="App-body">
        <Container
          style={{
            marginBotton: "2rem",
          }}
        >
          <Row
            style={{
              marginTop: "4rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Research Output</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "3rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeText">63 Publications</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Button className="button" variant="outline-warning" size="lg">
                View My Publications
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "3rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeText">5 Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Button className="button" variant="outline-warning" size="lg" href="/projects">
                View My Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
