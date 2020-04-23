import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./App.css";

export default class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.key,
    };
    this.setKey = this.setKey.bind(this);
  }

  setKey(key) {
    this.setState({ key: key });
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
              marginTop: "3rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">
                Grants, Awards &amp; Scholarships
              </h1>
            </Col>
          </Row>
          <Tabs
            style={{
              marginTop: "1rem",
              marginBottom: "2rem",
              color: "yellow",
            }}
            activeKey={this.state.key}
            onSelect={(k) => this.setKey(k)}
          >
            <Tab eventKey="grants" title="Grants">
              <Row
                style={{
                  marginTop: "1rem",
                }}
              >
                <Col
                  md="auto"
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <h1 className="smallText">2019</h1>
                  <h1 className="smallText">2018</h1>
                  <h1 className="smallText">2018</h1>
                  <h1 className="smallText">2015</h1>
                  <h1 className="smallText">2014</h1>
                  <h1 className="smallText">2012</h1>
                  <h1 className="smallText">2012</h1>
                  <h1 className="smallText">2012</h1>
                  <h1 className="smallText">2007</h1>
                </Col>
                <Col>
                <h1 className="award">
                    R5.9M Grant, African Cities Flagship Project
                  </h1>
                  <h1 className="award">
                    R9M Grant, Big Data Flagship Project
                  </h1>
                  <h1 className="award">
                    R8.7M Grant, Spatial Humanities Project
                  </h1>
                  <h1 className="award">Knowledge Interchange Grant Award</h1>
                  <h1 className="award">Gender Research Grant</h1>
                  <h1 className="award">Knowledge Interchange Grant Award</h1>
                  <h1 className="award">Strategic Research Grant Award</h1>
                  <h1 className="award">Teaching and Learning Grant Award</h1>
                  <h1 className="award">Knowledge Interchange Grant Award</h1>
                  <h1 className="award">African Origins Grant Award</h1>
                </Col>
                <Col>
                <h1 className="smallText">University of KwaZulu Natal</h1>
                  <h1 className="smallText">University of KwaZulu Natal</h1>
                  <h1 className="smallText">The Andrew W. Mellon Foundation</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">Ford Foundation | African Gender Institute</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">University of KwaZulu Natal</h1>
                  <h1 className="smallText">University of KwaZulu Natal</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="scholarships" title="Scholarships">
              <Row
                style={{
                  marginTop: "1rem",
                }}
              >
                <Col
                  md="auto"
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <h1 className="smallText">2009</h1>
                  <h1 className="smallText">2008</h1>
                  <h1 className="smallText">2002</h1>
                  <h1 className="smallText">1998</h1>
                  <h1 className="smallText">1995</h1>
                  <h1 className="smallText">1993</h1>
                </Col>
                <Col
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <h1 className="award">Thuthuka Doctoral Scholarship</h1>
                  <h1 className="award">Doctoral Scholarship</h1>
                  <h1 className="award">
                    Transformative Thinking &amp; Training Scholarship
                  </h1>
                  <h1 className="award">Masters Research Scholarship</h1>
                  <h1 className="award">Honours Research Scholarship</h1>
                  <h1 className="award">Cultural Scholarship</h1>
                </Col>
                <Col>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">
                    Bayreuth University, Institute of African Studies
                  </h1>
                  <h1 className="smallText">Byron Katie Academy, Netherlands</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">National Research Foundation</h1>
                  <h1 className="smallText">World Council of Religions, USA</h1>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="awards" title="Awards">
              <Row
                style={{
                  marginTop: "1rem",
                  marginBottom: "0rem",
                }}
              >
                <Col
                  md="auto"
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <h1 className="smallText">2017</h1>
                  <h1 className="smallText">2016</h1>
                  <h1 className="smallText">2016</h1>
                  <h1 className="smallText">2015</h1>
                  <h1 className="smallText">2014</h1>
                  <h1 className="smallText">2014</h1>
                  <h1 className="smallText">2013</h1>
                  <h1 className="smallText">2012</h1>
                  <h1 className="smallText">2011</h1>
                  <h1 className="smallText">2010</h1>
                  <h1 className="smallText">2010</h1>
                  <h1 className="smallText">2008</h1>
                </Col>
                <Col
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <h1 className="award">
                    College of Humanities Excellence Researcher Award
                  </h1>
                  <h1 className="award">
                    College of Humanities Excellence Researcher Award
                  </h1>
                  <h1 className="award">Top 30 Researcher Award</h1>
                  <h1 className="award">
                    College of Humanities Excellence Researcher Award
                  </h1>
                  <h1 className="award">Top Published Woman Researcher</h1>
                  <h1 className="award">Top 30 Researcher Award</h1>
                  <h1 className="award">National Women in Science Award</h1>
                  <h1 className="award">
                    College Excellence Award for Top Emerging Researcher
                  </h1>
                  <h1 className="award">Top 30 Researcher Award</h1>
                  <h1 className="award">Top Published Female Researcher Award</h1>
                  <h1 className="award">Top 10 Researcher Award</h1>
                  <h1 className="award">Top 30 Researcher Award</h1>
                </Col>
                <Col>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">
                    Department of Science and Technology
                  </h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                  <h1 className="smallText">University of KwaZulu-Natal</h1>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>
    );
  }
}
