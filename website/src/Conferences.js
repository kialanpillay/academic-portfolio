import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

export default class Projects extends React.Component {
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
              marginTop: "2rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Conferences</h1>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}
