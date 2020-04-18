import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Research from "./pages/research";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Publications from "./pages/publications";
import Presentations from "./pages/presentations";
import Editorial from "./pages/editorial";
import Teaching from "./pages/teaching";
import Theses from "./pages/theses";
import Awards from "./pages/awards";
import "./pages/App.css";
import image from "./assets/1200px-UKZN_logo.svg.png";

export default class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Navbar id="nav" bg="light">
            <Navbar.Brand id="brand" href="/home">
              MAHESHVARI NAIDU
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Research" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link className="link" to="/research">
                      Overview
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/publications">
                      Publications
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/projects">
                      Projects
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Teaching" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link className="link" to="/teaching">
                      Overview
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/theses">
                      Supervision
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Work" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link className="link" to="/presentations">
                      Presentations
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/editorials">
                      Editorial Roles
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link className="link" to="/awards">
                    Awards
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="https://www.ukzn.ac.za/">
              <img
                src={image}
                width="120"
                height="44"
                className="d-inline-block align-top"
                alt="UKZN Logo"
              />
            </Navbar.Brand>
          </Navbar>
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/research">
                <Research />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/presentations">
                <Presentations />
              </Route>
              <Route path="/publications">
                <Publications />
              </Route>
              <Route path="/editorials">
                <Editorial />
              </Route>
              <Route path="/teaching">
                <Teaching />
              </Route>
              <Route path="/theses">
                <Theses />
              </Route>
              <Route path="/awards">
                <Awards />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
