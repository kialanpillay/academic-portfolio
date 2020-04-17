import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
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
              <h1 className="largeHeading">
                Supervised Research Topics
              </h1>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "1rem",
              marginBottom: "0rem",
            }}
          >
            <Col>
              <p className="smallText">Gender and Transnationalism</p>
              <p className="smallText">
                Female Condoms: From Practice to Policy
              </p>
              <p className="smallText">
                Identity and Migrant Sierra Leone Networks
              </p>
              <p className="smallText">Township Masculinities</p>
              <p className="smallText">Constructions of Health and Illness</p>
              <p className="smallText">Medical Male Circumcision</p>
              <p className="smallText">Female Condom Use</p>
              <p className="smallText">
                Lesbian Students’ Experiences in Higher Education
              </p>
              <p className="smallText">Poverty and Masculinities</p>
              <p className="smallText">African Female Smokers</p>
              <p className="smallText">Instagram and Female Body Image</p>
              <p className="smallText">Masculinized Care-Patient Health Care Models for Breast Cancer</p>
              <p className="smallText">Conflict Transformation in Africa-The case of Lesotho and Congo</p>
              
            </Col>
            <Col>
            <p className="smallText">Policies and Practices around Water Access in Rural Zimbabwe</p>
              <p className="smallText">Politics of Chieftaincy</p>
              <p className="smallText">Internally Displaced People: Human Rights &amp; Access to Education</p>
              <p className="smallText">Indigenous Conflict Resolution Methods</p>
              <p className="smallText">Conflict Transformation in Africa-The case of Lesotho and Congo</p>
              <p className="smallText">Traditional Birth Attendants</p>
              <p className="smallText">Medical Pluralism &amp; Experiences of People Living with HIV/AIDS</p>
              <p className="smallText">Gender and Social Construction of Womanhood among Shangaan</p>
              <p className="smallText">Gendered Water Practices</p>
              <p className="smallText">Power and Transactional Sex</p>
              <p className="smallText">Xenophobia and Human Security</p>
              <p className="smallText">Coercive Sexual Practices in Higher Education Institutions</p>
              <p className="smallText">Sexist Humour and Misogyny in Higher Education Institutions</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
