import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function Presentations() {
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
            <h1 className="largeHeading">Selected Presentations</h1>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "1rem",
          }}
        >
          <Col md="auto" style={{ marginRight: "0rem" }}>
            <h6 className="presentation">Masters Seminar: Memory, Paleo-anthropology and African Branding</h6>
            <h6 className="presentation">Presentation: Faith and Experiences of Lesbian Women in Church</h6>
            <h6 className="presentation">Workshop: Body Work and Trauma</h6>
            <h6 className="presentation">Workshop: Doing Self-work and Self-care in the Context of Gender Activism</h6>
            <h6 className="presentation">Public Lecture: Queering or Querying: Theory and Activism around LBGTI Issues in SA</h6>
            <h6 className="presentation">Research Seminar: Mobility and Foreign Students in Higher Education</h6>
            <h6 className="presentation">Keynote Address: Mobility Pathways of Foreign African Students</h6>
            <h6 className="presentation">Public Seminar: Doing Ethnographic Work in the Context of Tourism Studies</h6>
            <h6 className="presentation">Keynote Address: Women’s Empowerment and Traditional Masculine</h6>
          </Col>
          <Col md="auto"  >
            <h6 className="location">Graduate Institute, Gender Centre, Switzerland (2018)</h6>
            <h6 className="location">American University at Rome, Italy (2017)</h6>
            <h6 className="location">Ministry of Social Work, Seychelles (2016)</h6>
            <h6 className="location">University of Seychelles, Seychelles (2015)</h6>
            <h6 className="location">Syracuse University, Gender Department, Italy (2014)</h6>
            <h6 className="location">Mauritius Institute of Education, Mauritius (2014)</h6>
            <h6 className="location">2nd International Conference in Education, Malaysia (2014)</h6>
            <h6 className="location">3rd International Interdisciplinary Tourism Conference, Turkey (2014)</h6>
            <h6 className="location">Syracuse University, Gender Department, Italy (2012)</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Presentations;
