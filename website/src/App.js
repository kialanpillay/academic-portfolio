import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Research from "./pages/Research";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Conferences from "./pages/Conferences"
import Editorial from "./pages/Editorial";
import Teaching from "./pages/Teaching";
import "./pages/App.css";
import image from "./assets/1200px-UKZN_logo.svg.png"

export default class App extends React.Component {
  render() {
    return (
      <Router>
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
                    <Link className="link" to="/graduated">
                      Graduated Students
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/curriculum">
                      Curriculum Development
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Experience" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link className="link" to="/conferences">
                      Conferences &amp; Seminars
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link" to="/editorials">
                      Editorial Roles &amp; Service
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
              <Route path="/conferences">
                <Conferences />
              </Route>
              <Route path="/publications">
              </Route>
              <Route path="/editorials">
                <Editorial />
              </Route>
              <Route path="/teaching">
                <Teaching />
              </Route>
            </Switch>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </Router>
    );
  }
}
