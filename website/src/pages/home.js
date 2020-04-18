import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";
import image from "../assets/IMG_4579.JPG";

export default class Home extends React.Component {
  render() {
    return (
      <div className="App-body">
        <Jumbotron id="jumbo">
          <Container>
            <Row>
              <Col md="auto">
                <img
                  width="120"
                  id="picture"
                  src={image}
                  alt="Ford Foundation"
                  style={{
                    marginLeft: "0rem",
                    borderRadius: "4px",
                  }}
                />
              </Col>
              <Col>
                <h1 id="tag">Academic. Researcher. Social Scientist.</h1>
                <h4 id="name">Professor Maheshvari Naidu</h4>
                <p id="q">BA UDW, BA Hons (cum laude), MA (cum laude), PhD UKZN</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container
          style={{
            marginBotton: "2rem",
          }}
        >
          <h2 className="heading">Profile</h2>
          <Row>
            <div>
              <Card.Body>
                <Card.Text id="bio">
                  Professor Naidu is an NRF Rated Scientist who has received
                  both institutional and national recognition for her research.
                  In 2013 she won a National Award from the Department of
                  Science and Technology for Women in Science. She was the first
                  person in the College of Humanities and the first female
                  academic at UKZN to obtain the PhD by Publication.
                </Card.Text>
                <Card.Text id="bio">
                  She is widely published with work that cuts across multiples
                  disciplines and is on the editorial boards of the journals,{" "}
                  <i>Anthropology Southern Africa </i> (Taylor and Francis) and{" "}
                  <i>Oriental Anthropologist </i>(Sage).
                </Card.Text>
                <Card.Text id="bio">
                  She teaches from a critical feminist perspective and is
                  currently supervising a large cohort of Post-Doctoral Fellows,
                  Doctoral and Masters Students. She has graduated 11 Masters
                  and 14 Doctoral students. She has been invited to offer
                  teaching and research seminars in many international
                  institutions.
                </Card.Text>
                <Card.Text id="bio">
                  She is committed to enhancing and nurturing strong academic
                  scholarship among the pool of young African female scholars in
                  the Social Sciences.
                </Card.Text>
              </Card.Body>
            </div>
          </Row>
          <Row
            style={{
              marginTop: "4rem",
              marginBottom: "4rem",
              alignContent: "center",
            }}
          >
            <Col>
              <Card
                bg="dark"
                style={{
                  textAlign: "left",
                  width: "21rem",
                  marginBottom: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title>Research</Card.Title>
                  <Card.Text>Explore publications and projects.</Card.Text>
                  <Button className="button" variant="warning">
                    <Link className="buttonLink" to="/research">
                      Explore
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="dark"
                style={{
                  textAlign: "left",
                  width: "21rem",
                  marginBottom: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title>Supervision</Card.Title>
                  <Card.Text>Explore my students and supervision.</Card.Text>
                  <Button className="button" variant="warning">
                    <Link className="buttonLink" to="/teaching">
                      Explore
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="dark"
                style={{
                  textAlign: "left",
                  width: "21rem",
                  marginBottom: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title>Awards</Card.Title>
                  <Card.Text>Explore grants and awards.</Card.Text>
                  <Button className="button" variant="warning">
                    <Link className="buttonLink" to="/awards">
                      Explore
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <footer id="footer">
          WEB DESIGN:{" "}
          <a
            className="footerLink"
            href="https://www.linkedin.com/in/kialan-p-a63779140/"
          >
            KIALAN PILLAY
          </a>{" "}
          <a className="footerLink" href="https://kialan.co.za">
            c/o ALPHA Q LABS.
          </a>{" "}
        </footer>
      </div>
    );
  }
}
