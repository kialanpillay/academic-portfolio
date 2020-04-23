import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import "./App.css";

export default class Projects extends React.Component {
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
                height: "36rem",
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
                <a
                  style={{
                    textDecoration: "none",
                    color: "#282c34",
                  }}
                  className="link"
                  target="_blank"
                  href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol7-Issue5/UKZN%20Invests%20in%20Innovative%20Big%20Data%20Research%20to%20Boost%20Flagship%20Project/"
                >
                  <h1 className="projectTitle">
                    African Cities Flagship Project
                  </h1>
                </a>

                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2020 - 2021</h5>
                <p className="projectContent">
                  R5.9 Million Grant. building Well-being, sOcial cOhesion, and
                  Dignity by restoring environmental RIGHTS (WOODRIGHTS). PI
                  along with Prof. A Modi, Prof. R Slotow, Prof C. Downs, Prof
                  C. Buckley, Dr. K Sutherland and Prof. T Mabhaudhi. The
                  project takes a transdisciplinary approach and brings together
                  academics from disciplines of Biodiversity, Crop Science,
                  Plant Sciences, Environmental Science, Sustainability Science,
                  Hydrology, GIS and Remote Sensing, Law, Social Sciences,
                  Development Studies, and partners from government (eThekwini
                  Municipality, KZN COGTA, KZN EDTEA) and civil society
                  (Institute for Natural Resources, BOARDA South Africa, Kanyisa
                  Projects, Duzi uMngeni Conservation Trust).
                </p>
                <p className="projectContent">
                  The project is concerned with ecosystem restoration and
                  contribution towards the reversal of ecosystem degradation.
                  The aim is to improve natural capital, enhance community
                  livelihoods and social cohesion, and reduce risks to people
                  and infrastructure, including disaster risk mitigation, while
                  boosting the services that natural ecosystems provide to
                  society.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "3rem",
                  alignItems: "center",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "#282c34",
                  }}
                  className="link"
                  target="_blank"
                  href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol7-Issue5/UKZN%20Invests%20in%20Innovative%20Big%20Data%20Research%20to%20Boost%20Flagship%20Project/"
                >
                  <h1 className="projectTitle">
                    Big Data for Science and Society Flagship Project
                  </h1>
                </a>

                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2019 - 2021</h5>
                <p className="projectContent">
                  R9 Million Grant. Principle Investigator (PI) of a three-year
                  project Project with co-PIs (Prof. Kavilan Moodley -
                  Astrophysics and Prof. Onisimo Mutanga - Earth Observation).
                  This is an inter-college and interdisciplinary Big Data and
                  Analytics project that comprises a large team of colleagues,
                  (Computer Science, Information Studies, Pyschology,
                  Astrophysics, Statistics, Social Sciences, Physics, Earth
                  Observation) and includes a large cohort of Postdoctoral
                  researchers and PhD candidates.
                </p>
                <p className="projectContent">
                  My sub-project is in Geo-Spatial Humanities and Data and
                  involves GIS mapping of vulnerabilities in the context of
                  informal settlements. GIS and Remote Sensing and large
                  datasets from Landsat are used to answer social science
                  questions for policy intervention in the context of urban
                  sprawl and "slum" settlements.
                </p>
                <p>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginRight: "2rem",
                    }}
                    className="link"
                    target="_blank"
                    href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol7-Issue5/UKZN%20Invests%20in%20Innovative%20Big%20Data%20Research%20to%20Boost%20Flagship%20Project/"
                  >
                    Feature Article 1
                  </a>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginRight: "2rem",
                    }}
                    className="link"
                    target="_blank"
                    href="https://quantum.ukzn.ac.za/news/big-data-for-science-and-society-flagships-project-workshop-promotes-transdisciplinary-research/"
                  >
                    Feature Article 2
                  </a>

                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                    className="link"
                    target="_blank"
                    href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/isizulu/Big%20Data%20for%20Science%20and%20Society%20Launch%20Goes%20Big"
                  >
                    Feature Article 3
                  </a>
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "3rem",
                  alignItems: "center",
                }}
              >
                <h1 className="projectTitle">Spatial Humanties Project</h1>
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
                <p>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                    className="link"
                    target="_blank"
                    href="https://sss.ukzn.ac.za/news/2018/11/mellon-foundation-awards-over-nine-million-rand-u657000-in-grants-to-college-of-humanities/"
                  >
                    Feature Article
                  </a>
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "3rem",
                  alignItems: "center",
                }}
              >
                <h1 className="projectTitle">
                  Young University Women’s Leadership Project
                </h1>
                <h3 className="projectSubtitle">
                  Ford Foundation | African Gender Institute | UKZN
                </h3>
                <h5 className="projectYear">2014 - 2020</h5>
                <p className="projectContent">
                  Entailed collaboration with colleagues from the following
                  institutions: University of Cape Town, University of the
                  Witwatersrand, University of Zimbabwe, University of Namibia,
                  University of Johannesburg, Eduardo Mondle Mozambique and
                  University of Botswana. The Project included my postdoctoral
                  students and doctoral students in a mentoring bid to build
                  capacity and develop intellectual skills.
                </p>
                <p>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginRight: "2rem",
                    }}
                    className="link"
                    target="_blank"
                    href="http://ndabaonline.ukzn.ac.za/UkzndabaStory/Vol4-Issue22/UKZN%20Students%20Part%20of%20SADC%20InterInstitutional%20Workshop/"
                  >
                    Feature Article 1
                  </a>

                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginRight: "2rem",
                    }}
                    className="link"
                    target="_blank"
                    href="http://ndabaonline.ukzn.ac.za/StoryPrinter.aspx?id=1586"
                  >
                    Feature Article 2
                  </a>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginRight: "2rem",
                    }}
                    className="link"
                    target="_blank"
                    href="https://www.ukzn.ac.za/news/ukzn-anthropologist-gets-grant-to-join-uct-project-on-sexuality-and-rights/"
                  >
                    Feature Article 3
                  </a>
                  <a
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                    className="link"
                    target="_blank"
                    href="https://www.ukzn.ac.za/news/excavating-body-stories-workshop-a-success/"
                  >
                    Feature Article 4
                  </a>
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "3rem",
                  alignItems: "center",
                }}
              >
                <h1 className="projectTitle">
                  {" "}
                  HIV/AIDS and Women's Sexual and Reproductive Health Rights
                  (SRHR)
                </h1>
                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2012 - 2013</h5>
                <p className="projectContent">
                  Principle Investigator of a large project in niche area on
                  HIV/AIDS and Women’s Health. Project sampled approximately
                  1400 women and probed the use of Female Condoms and
                  Empowerment in the context of female control over sexual
                  behaviour and contraception. Project probed the viability of
                  female condoms as a prophylactic device in the context of the
                  AIDS pandemic and gendered nature of intervention programmes.
                </p>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  marginTop: "3rem",
                  alignItems: "center",
                }}
              >
                <h1 className="projectTitle">
                  Education, Language and Belonging
                </h1>
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
                  marginTop: "3rem",
                }}
              >
                <h1 className="projectTitle">
                  Paleoanthropology and African Identity
                </h1>
                <h3 className="projectSubtitle">UKZN</h3>
                <h5 className="projectYear">2007</h5>
                <p className="projectContent">
                  As part of the project, a documentary on African Identity and
                  Paleo-Heritage was produced (African Origins). This formed
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
