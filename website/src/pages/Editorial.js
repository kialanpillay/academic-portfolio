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
              marginTop: "4rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading">Editorial Roles</h1>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "4rem",
            }}
          >
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  <i>Oriental Anthropologist</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2016</h4>
                <p>
                  Special Issue of <i>Women in Global South</i> in Oriental
                  Anthropologist. Collaborating editors Prof. M Mduna
                  (University of Witwatersrand) &amp; Prof. S Manuel (Eduardo
                  Mondle University Mozambique).
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                date="2016"
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Editorial Board
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Alternation</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2015</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  <i>Anthropology</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2014</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  <i>Oriental Anthropologist</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2014</h4>
                <p>
                  Special Volume on <i>Feminisms, International</i> in Oriental
                  Anthropologist.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  Special Issue of <i>Women in Spiritual Leadership</i> in
                  Oriental Anthropologist.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  . SAPSE Accredited Journal.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
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
                  <i>Alternations: Mobilities and Transnationalism</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  2012 - 2013
                </h4>
                <p>Special Issue. SAPSE Accredited Journal.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Editorial Board
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Noumenon: Journal for Transformative Work</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  2005 - 2008
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Editor</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Nidan: International Journal for Hinduism</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">2009</h4>
                <p>SAPSE Accredited Journal.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(245, 245, 245)",
                  color: "#282c34",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid  rgb(245, 245, 245)",
                }}
                iconStyle={{ background: "rgb(246, 196, 68)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Managing Editor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <i>Nidan: International Journal for Hinduism</i>
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  2007 - 2008
                </h4>
                <p>SAPSE Accredited Journal.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>
        </Container>
      </div>
    );
  }
}
