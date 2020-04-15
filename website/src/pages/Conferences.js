import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";
import Map from "../components/Map";

function Conferences() {
  const [content, setContent] = useState("");
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
            <h1 className="largeHeading">Conferences &amp; Seminars</h1>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <h1 className="mediumText">19 International Presentations</h1>
            <h1 className="mediumText">4 International Public Seminars</h1>
            <h1 className="mediumText">3 International Keynotes</h1>
            <h1 className="mediumText">3 International Research Seminars</h1>
            <h1 className="mediumText">2 International Workshops</h1>
            <h1 className="mediumText">1 National Keynote</h1>
          </Col>
          <Col>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Map setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
          </Col>
        </Row>
        <Row
          >
            <Col md="auto">
              <Button  variant="outline-warning" size="lg" href="/graduated">
                View Details
              </Button>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Conferences;
