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
              <h1 className="largeHeading">Teaching &amp; Supervision</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
            }}
          >
            <Col>
              <h1 className="largeText">Graduated</h1>
              <h1 className="mediumText">14 PhD Candidates</h1>
              <h1 className="mediumText">11 MA Candidates</h1>
              <h1 className="mediumText">5 Postdoctoral Candidates</h1>
              <h1 className="mediumText">
                3 <i>Cum Laude </i>Candidates
              </h1>
              <h1 className="mediumText">
                1 <i>Summa Cum Laude </i>Candidate{" "}
              </h1>
            </Col>
            <Col>
              <h1 className="largeText">Current</h1>
              <h1 className="mediumText">4 PhD Candidates</h1>
              <h1 className="mediumText">2 MA Candidates</h1>
              <h1 className="mediumText">2 Interdisciplinary PhD Candidates</h1>
              <h1 className="mediumText">2 Interdisciplinary MA Candidates</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
            }}
          >
            <Col md="auto">
              <Button className="button" variant="outline-warning" size="lg" href="/graduated">
                View Details
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
