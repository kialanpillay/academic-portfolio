import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
              marginTop: "2rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Projects</h1>
            </Col>
          </Row>
          <Row>
            <Carousel
              style={{
                width: "68rem",
                height: "30rem",
                color: "whitesmoke",
              }}
            >
              <Carousel.Item
                style={{
                  marginTop: "4rem",
                  alignItems: "center",
                }}
              >
                <h1>Big Data Flagship Project</h1>
                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2019 - 2021</h5>
                <p className="projectContent">
                  Principle Investigator (PI) of a three-year project Project
                  with two other PIs (Prof. Kavilan Moodley - Astrophysics and
                  Prof. Onisimo Mutanga - Earth Observation). This is an
                  inter-college and interdisciplinary Big Data and Analytics
                  project that comprises a large team of colleagues, (Computer
                  Science, Information Studies, Statistics, Social Sciences,
                  Physics, Earth Observation) and includes a large cohort of
                  Postdoctoral researchers and PhD candidates.
                </p>
                <p className="projectContent">
                  My sub-project is in Geo-Spatial Humanities and data and
                  involves GIS mapping of vulnerabilities in the context of
                  informal settlements. GIS and Remote Sensing and large
                  datasets from Landsat are used to answer social science
                  questions for policy intervention in the context of urban
                  sprawl and "slum" settlements.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "4rem",
                  alignItems: "center",
                }}
              >
                <h1>Spatial Humanties Project</h1>
                <h3 className="projectSubtitle">
                  The Andrew W. Mellon Foundation | UKZN
                </h3>
                <h5 className="projectYear">2018 - 2023</h5>
                <p className="projectContent">
                  R8.7 Million Grant. Project involves the creation of
                  geo-maps/cultural atlases in context of spatial mapping and
                  GIS technologies. Project also entails the curriculum design
                  of two new degrees; Masters in Spatial Humanities and PhD in
                  Spatial Humanities with an emphasis on African Spatial
                  Humanities.
                </p>
                <p className="projectContent">
                  Project includes the curation of a large repository of both
                  narrative story maps as well as geo-maps of the three sites;
                  historically racially segregated spaces of Umlazi, Chatsworth
                  and Durban CBD.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "4rem",
                  alignItems: "center",
                }}
              >
                <h1>Young University Women’s Leadership Project</h1>
                <h3 className="projectSubtitle">
                  Ford Foundation | African Gender Institute | UKZN
                </h3>
                <h5 className="projectYear">2014 - 2018</h5>
                <p className="projectContent">
                  Entailed collaboration with colleagues from Universities of
                  University of Cape Town, WITS, University of Zimbabwe,
                  University of Namibia, University of Johannesburg, Eduardo
                  Mondle Mozambique and University of Botswana. The Project
                  included my postdoctoral students and doctoral students in a
                  mentoring bid to build capacity and develop intellectual
                  skills.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "4rem",
                  alignItems: "center",
                }}
              >
                <h1>Education, Language and Belonging</h1>
                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2012</h5>
                <p className="projectContent">
                  Surveyed students across several UKZN campuses (including
                  Howard, Edgewood and Pietermaritzburg) on attitudes towards
                  bilingualism teaching.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "4rem",
                  alignItems: "center",
                }}
              >
                <h1>Paleo-anthropology and African Identity</h1>
                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2007</h5>
                <p className="projectContent">
                  As part of the project, a documentary on African Identity and
                  Palaeo-Heritage was produced (African Origins). This formed
                  part of the teaching toolkit of the Module{" "}
                  <i> Introduction to African Societies</i>.
                </p>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    );
  }
}
