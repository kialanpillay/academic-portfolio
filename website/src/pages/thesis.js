import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
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
              <h1 className="largeHeading">Supervised Research Topics</h1>
            </Col>
          </Row>
          <Carousel
            style={{
              height: "30rem",
              width: "100%",
              color: "#282c34",
            }}
          >
            <Carousel.Item
              style={{
                marginTop: "3rem",
                alignItems: "center",
              }}
            >
              <p className="topic">Gender and Transnationalism</p>
              <p className="topic">Female Condoms: From Practice to Policy</p>
              <p className="topic">
                Identity and Migrant Sierra Leone Networks
              </p>
              <p className="topic">Township Masculinities</p>
              <p className="topic">Constructions of Health and Illness</p>
              <p className="topic">Medical Male Circumcision</p>
            </Carousel.Item>
            <Carousel.Item
              style={{
                marginTop: "3rem",
                alignItems: "center",
              }}
            >
              <p className="topic">
                Lesbian Students’ Experiences in Higher Education
              </p>
              <p className="topic">Poverty and Masculinities</p>
              <p className="topic">African Female Smokers</p>
              <p className="topic">Instagram and Female Body Image</p>
              <p className="topic">
                Masculinized Care-Patient Health Care Models for Breast Cancer
              </p>
              <p className="topic">Conflict Transformation in Africa</p>
            </Carousel.Item>
            <Carousel.Item
              style={{
                marginTop: "3rem",
                alignItems: "center",
              }}
            >
              <p className="topic">
                Policies and Practices around Water Access in Rural Zimbabwe
              </p>
              <p className="topic">Politics of Chieftaincy</p>
              <p className="topic">
                Internally Displaced People: Human Rights &amp; Access to
                Education
              </p>
              <p className="topic">Indigenous Conflict Resolution Methods</p>
              <p className="topic">Traditional Birth Attendants</p>
              <p className="topic">
                Gender and Social Construction of Womanhood among Shangaan
              </p>
            </Carousel.Item>
            <Carousel.Item
              style={{
                marginTop: "3rem",
                alignItems: "center",
              }}
            >
              <p className="topic">Gendered Water Practices</p>
              <p className="topic">Power and Transactional Sex</p>
              <p className="topic">Xenophobia and Human Security</p>
              <p className="topic">
                Coercive Sexual Practices in Higher Education Institutions
              </p>
              <p className="topic">
                Sexist Humour and Misogyny in Higher Education Institutions
              </p>
              <p className="topic">Female Condom Use</p>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}
