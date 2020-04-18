import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

export default class Teaching extends React.Component {
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
              marginTop: "3rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Graduated Students</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "2rem",
            }}
          >
            <Col>
              <h1 className="largeText">Current</h1>
              <h1 className="mediumText">4 PhD Candidates</h1>
              <h1 className="mediumText">2 MA Candidates</h1>
              <h1 className="mediumText">2 Interdisciplinary PhD Candidates</h1>
              <h1 className="mediumText">2 Interdisciplinary MA Candidates</h1>
            </Col>
            <Col>
              <h1 className="largeText">Graduated</h1>
              <h1 className="mediumText">14 PhD Candidates</h1>
              <h1 className="mediumText">11 MA Candidates</h1>
              <h1 className="mediumText">5 Postdoctoral Candidates</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "2rem",
            }}
          >
            <Col md="auto">
              <Button className="button" variant="warning" size="lg">
                <Link className="buttonLink" to="/topics">
                  View Details
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
