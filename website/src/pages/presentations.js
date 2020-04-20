import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import "./App.css";

export default class Presentations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: true,
    };
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
              <h1 className="largeHeading">Invited Presentations</h1>
            </Col>
            <Toast
              show={this.state.tooltip}
              onClose={() => this.setState({ tooltip: !this.state.tooltip })}
            >
              <Toast.Header>
                <strong className="mr-auto">Tip</strong>
              </Toast.Header>
              <Toast.Body style={{ color: "#282c34", fontSize: "0.6rem" }}>
                Hover over the Title to explore more.
              </Toast.Body>
            </Toast>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
            }}
          >
            <Col md="auto" style={{ marginRight: "0rem" }}>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="https://graduate.aur.edu/news/sustainable-cultural-heritage-master-program-welcomes-guest-lecturer-dr-maheshvari-naidu"
                >
                  Masters Seminar: Memory, Paleo-anthropology and African
                  Branding
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="http://ndaba-online.ukzn.ac.za/UkzndabaStory/1177/anthropology-professor-presents-teaching-seminar-in-switzerland/#sthash.z0csnJzu.dpbs"
                >
                  Presentation: Faith and Experiences of Lesbian Women in Church
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="https://graduate.aur.edu/events/repositioning-memory-and-heritage-anthropology-tourism-robben-island-museum"
                >
                  Masters Seminar: (Re)positioning Memory and Heritage
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol4-Issue8/Anthropology%20Academic%20Hosted%20in%20Seychelles/"
                >
                  Workshop: Body Work and Trauma
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol3-Issue50/Academic%20Meets%20the%20Vice%20Chancellor%20of%20University%20of%20Seychelles/"
                >
                  Workshop: Doing Self-work and Self-care in the Context of
                  Gender Activism
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="https://www.ukzn.ac.za/news/academic-invited-to-deliver-public-lecture-at-syracuse-university-florence-italy"
                >
                  Lecture: Queering or Querying: Theory and Activism around
                  LBGTI Issues in SA
                </a>
              </h6>
              <h6 className="presentation">
                Research Seminar: Mobility and Foreign Students in Higher
                Education
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/NdabaOnline-Vol2-Issue9/Academic%20Gives%20Keynote%20Address%20at%20Higher%20Education%20Research%20Conference/"
                >
                  Keynote Address: Mobility Pathways of Foreign African Students
                </a>
              </h6>
              <h6 className="presentation">
                <a
                  className="link"
                  target="_blank"
                  href="https://www.tandfonline.com/doi/abs/10.1080/13032917.2018.1550662?src=recsys&journalCode=rana20"
                >
                  Public Seminar: Doing Ethnographic Work in the Context of
                  Tourism Studies
                </a>
              </h6>
              <h6 className="presentation">
                Keynote Address: Women’s Empowerment and Traditional Masculine
              </h6>
            </Col>
            <Col md="auto">
              <h6 className="location">
                American University at Rome, Italy (2018)
              </h6>
              <h6 className="location">
                Graduate Institute, Gender Centre, Switzerland (2017)
              </h6>
              <h6 className="location">
                American University at Rome, Italy (2016)
              </h6>
              <h6 className="location">
                Ministry of Social Work, Seychelles (2016)
              </h6>
              <h6 className="location">
                University of Seychelles, Seychelles (2015)
              </h6>
              <h6 className="location">
                Syracuse University, Gender Department, Italy (2014)
              </h6>
              <h6 className="location">
                Mauritius Institute of Education, Mauritius (2014)
              </h6>
              <h6 className="location">
                2nd International Conference in Education, Malaysia (2014)
              </h6>
              <h6 className="location">
                3rd Interdisciplinary Tourism Conference, Turkey (2014)
              </h6>
              <h6 className="location">
                Syracuse University, Gender Department, Italy (2012)
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
