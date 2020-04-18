import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";

export default class Editorial extends React.Component {
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
              <h1 className="largeHeading">Editorial Roles</h1>
            </Col>
          </Row>
          <Row
            style={{
              paddingBottom: "1rem",
            }}
          >
            
             
              <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                date="2016 - Present"
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Editorial Board
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>
                    AlterNation: Interdisciplinary Journal for the Study of Arts
                    and Humanities in Southern Africa{" "}
                  </i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2015 - Present"</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                date="2016 - Present"
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Editorial Board
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>
                    Anthropology Southern Africa
                  </i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2014 - Present"</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Co-Guest Editor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>The Oriental Anthropologist</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2016</h4>
                <p>
                  Special Issue of <i>Women in Global South</i> in The Oriental
                  Anthropologist. Collaborating editors Prof. M Mduna
                  (University of Witwatersrand) &amp; Prof. S Manuel (Eduardo
                  Mondle University Mozambique).
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Guest Editor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Journal of Religion in Southern Africa</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2013</h4>
                <p>
                  Special Issue of <i>Women in Spiritual Leadership</i> in The
                  Oriental Anthropologist.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Guest Editor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Journal of Human Ecology</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  2013 - 2014
                </h4>
                <p>
                  Special Themed Issue on Tourism in Special Volume:
                  <i>
                    {" "}
                    Southern Africa: Human Ecology and Tourism Interactions
                  </i>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Guest Editor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>AlterNations: Mobilities and Transnationalism</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  2012 - 2013
                </h4>
                <p>Special Issue.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(53, 58, 64)",
                  color: "whitesmoke",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Editor</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Nidan: International Journal for the Study of Hinduism</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2009</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>
        </Container>
      </div>
    );
  }
}