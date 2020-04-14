import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";

export default class Research extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <Button className="button" variant="warning" size="lg">
                View Prof. Naidu's Publications
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
              <Button className="button" variant="warning" size="lg">
                View Prof. Naidu's Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
