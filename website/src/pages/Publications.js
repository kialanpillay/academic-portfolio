import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import "./App.css";

export default class Publications extends React.Component {
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
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading" id="publications">Publications</h1>
            </Col>
          </Row>
          <Tabs activeKey={this.state.key} onSelect={(k) => this.setKey(k)}>
            <Tab
              eventKey="peer"
              title="Peer-Reviewed Journals"
              style={{
                marginBottom: "2rem",
              }}
            >
              <Row
                style={{
                  marginTop: "2rem",
                }}
              >
                <Col md="auto">
                  <h1 className="largeText">Peer-Reviewed Journals</h1>
                </Col>
              </Row>
              <Row>
                <Col md="auto" style={{ marginRight: "0rem" }}>
                  <h6 className="presentation">
                    Shoko, E. &amp; Naidu, M. (2020). The Conceptualisation of
                    Peace in Zimbabwean Rural Water Sector.{" "}
                    <i>Journal of Peacebuilding and Development</i>, 15(1),
                    31-44.
                  </h6>
                  <h6 className="presentation">
                    Makanda, J. &amp; Naidu, M. (2019). The South Africa’s
                    Peacebuilding Interventions in the Democratic Republic of
                    Congo: Insights from the Congolese Refugees in Johannesburg,
                    Cape Town and Durban.{" "}
                    <i>Journal of African Foreigners Affairs</i>. 6(1), 65-84.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Benhura, A. (2018). Humanitarianism in
                    Praxis? Probing Power Dynamics Around Key Actors in
                    Zimbabwe’s Forced Migration.{" "}
                    <i>Journal of International Migration and Integration</i>,
                    20(13), 735-749.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M (2018). The Butcher, the Baker, the Brewer …and
                    Barber: Reflections on Migrant Micro- Entrepreneurship and
                    Informal Economies.{" "}
                    <i>Journal of Social Development in Africa</i>, 33 (2),
                    37-60.
                  </h6>
                  <h6 className="presentation">
                    Shoko E. &amp; Naidu, M. (2018). Peace-based Informal
                    Practices around Shared Communal Water Resources in Tyrone
                    Village, Zimbabwe.{" "}
                    <i>International Journal of African Renaissance Studies</i>,
                    13(2), 77-91.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2017). The Feminine Divine, the Hug and Spiritual
                    Hindu Leadership.{" "}
                    <i>Journal of Social Development in Africa</i>, 32(2).
                  </h6>
                  <h6 className="presentation">
                    Naidu, M &amp; Mutambara, V. (2017). Questioning
                    Heteronormative in Higher Education Spaces.{" "}
                    <i>South African Journal of Higher Education</i>,Vol.31.
                    doi: 10.20853/31-4-1320.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2017). When My Body is in the Way: Body Mapping
                    &amp; Positionality. <i>Agenda</i>, 32(2),106-112.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2016). Displaced Sense: Displacement &amp;
                    Sense-making. <i>Journal for the Study of Religion</i>,
                    29(1), 104-126.
                  </h6>
                  <h6 className="presentation">
                    10. Naidu, M (2016). ‘’Plastic Migrants and’’ and Deprived
                    Livelihoods: Resettlement &amp; Forced Migration.{" "}
                    <i>Migracijske i etničke teme</i>, 32(2), 221-244.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M &amp; Benhura, A (2016). Gazing on Xenophobia:
                    Issues of Foreigness and (non)Belonging.{" "}
                    <i>Journal of Social Development in Africa</i>, 31(1), 7-26
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2015). I want love too... What is so wrong with
                    that? <i>Agenda</i>, 29(2), 44-53.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Darong G. (2015). When Illness is more than
                    a Sick Body: Probing How IsiZulu-Speaking Nurses Construct
                    Illnesses and Healing, <i>The Anthropologist</i>, 15(1),
                    91-108.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Benhura, A. (2015). Caught Between
                    Definitions: Locating the Zimbabwean Internal Displacement
                    within the Global Humanitarian Regime Support.{" "}
                    <i>The Oriental Anthropologist</i>. doi:
                    10-1177/0976343020170202.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Mazibuko N (2015). The ‘First Skin’: Clothes
                    and Masculinity amongst the Izikhothani.{" "}
                    <i>Journal of Social Sciences</i>, 45(3), 212-220.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Makanda, J. (2017). Peacebuilding in the
                    Congo: Arguing for the Inclusion of the Subaltern Voice of
                    the Congolese Refugee. <i>Journal of Social Sciences</i>,
                    45(2), 96-102.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Darong, G. (2015). Illness and Health as
                    Constructions: Narratives of Sangoma Nurses.{" "}
                    <i>Ethno Medicine</i>. 9(3), 289-295.
                  </h6>
                  <h6 className="presentation">
                    Naidu M &amp; Mazibuko, N. (2015). Izikhothani Perceptions
                    on Women, Sex and Sexuality. <i>Oriental Anthropologists</i>
                    , Vol. 15. doi: 10-1177/0976343020160101.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M &amp; Khumalo S. (2015). I’m Circumcised so
                    HIV/AIDS Can’t Touch Me: Young Black African University Men
                    and Narratives of Masculinity.{" "}
                    <i>The Oriental Anthropologist</i>, 16, 163-181.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2014). Social Face of Networks: The Features of
                    Maintaining Self in Migrant Space.{" "}
                    <i>Sociological Bulletin</i>, 63(1), 41-58.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Nzuza, N. (2014). Transnationalised Memories
                    among Migrants: How ‘Indigenous’ Food can Bring Home Closer.{" "}
                    <i>The Anthropologist</i>, 17(2), 333-340.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2014). Colouring Continuity: Coloured Community
                    in Wentworth. <i>Journal of Social Sciences</i>, 39(1),
                    19-30.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2014). Not ‘Bio-Prospecting’ But
                    ‘Bio-Respecting’: Seeing Forests as Culturally Embedded
                    Spaces. <i>Journal of Dharma</i>, 39(3), 113-138.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Transnationalising the Sacred: Yagna as
                    ‘Spectacle’? <i>South Asian Survey</i>, 20(1), 1-13.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Pedagogies of Belief: Teaching and
                    Learning in a Small Christian School. <i>AlterNation</i>,
                    10, 200-220.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). African Religion and Ethics: Ethical Non
                    dualism, <i>Journal of Dharma</i>, 38(4), 211-224.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Constructing Patient and Patient
                    Healthcare: Indigenous Knowledge and the use of Isihlambezo.{" "}
                    <i>Indilinga</i>, 12(2), 252-262.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Ngqila K. (2013). Enacting Masculinities:
                    Pleasure to Men and Violence to Women. <i>Agenda</i>, 26(1),
                    1-10.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Perceptions around Female Condoms:
                    Reporting on Women’s Experiences,{" "}
                    <i>Anthropological Notebooks</i>, 19(1), 25-34.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Attending to the Patient: Bioethics and
                    Medical Literature. <i>Journal of Dharma</i>, 38 (1), 7-26.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Sinful Liaisons (!)Lesbian and Religious.{" "}
                    <i>Journal of Gender and Religion in Africa</i>, 19(1),
                    1-18.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Migrant Mothers: Raising Children in
                    Migrant Space. <i>The Oriental Anthropologist</i>, 13(1),
                    35-53.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Female Power and Revisiting Notion of
                    African Feminism.{" "}
                    <i>
                      AlterNation: Interdisciplinary Journal for the Study of
                      Art and Humanities in Southern Africa
                    </i>{" "}
                    20(2), 147-163.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Nzuza, N. (2013). Stories of the ‘Call” in a
                    Pentecostal Church. <i>Journal of Social Sciences</i>,
                    36(2), 153-163.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). (Editorial) Mobilities and Transnational
                    Lives.{" "}
                    <i>
                      AlterNation: Interdisciplinary Journal for the Study of
                      Art and Humanities in Southern Africa
                    </i>
                    , 191, 1-6
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). Belief and Bereavement: Attachment and the
                    ‘Grief Work’ Hypothesis,{" "}
                    <i>Journal for Study of Religion</i>, 25 (2), 71-87.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). Performing Illness and Health: The
                    Humanistic Value of Cancer Narratives, ASnA,{" "}
                    <i>Journal of Anthropology Association Southern Africa</i>,
                    35(3/ 4), 71-80.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). Urban Encounters with God: When God Lends
                    a Hand. <i>Journal of Dharma</i>, 37(3), 293-312.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). Mind the Gap: The Structural Ecology of
                    Small Networked Communities,{" "}
                    <i>
                      AlterNation: Interdisciplinary Journal for the Study of
                      Art and Humanities in Southern Africa
                    </i>{" "}
                    19(1), 280-305.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2012). Transcendent Genealogical &amp; Kinship
                    Relations: Afterlife in African Traditional Religions,{" "}
                    <i>Journal of Dharma</i>, 37(2), 411-426.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2011). Shaping and Gazing on Foreign African
                    Female Bodies. <i>The Oriental Anthropologis</i>, 11(2).
                    doi: 10.1177/0976343020110205.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2011). Indian Women in Marriage: When Sacred
                    Thread becomes a Noose. <i>Agenda</i>, 25(1), 84-92.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M (2011). Gendered Religion: Auto-ethnography as
                    Methodological Tool in Religion Studies,{" "}
                    <i>Journal of Dharma</i>, 36(4), 257-273.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2011) Queering Women: Disembedding the Maternal
                    Script from Women and Earth.{" "}
                    <i>Journal for the Study of Religion</i>, 24(2), 33-46.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Indigenous Cultural Bodies in Tourism: An
                    Analysis of Local ‘Audience’ Perception of Global Tourist
                    Consumers. <i>Journal of Social Sciences</i>, 26(1), 29-39.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M (2011). Animated Environment: ‘’Animism’’ and
                    Environment Revisited. <i>Journal of Dharma</i>, 36(3),
                    257-273.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2010). Wrestling with Standpoint Theory: Some
                    Thoughts on Standpoint and African Feminism. <i>Agenda</i>,
                    83(2010), 24-35.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Ojong V. (2010). (Re) Producing Motherhood:
                    Comparative Study of Hindu and Christian Women in Religion.{" "}
                    <i>Nidan: International Journal of Indian Studies</i>, 22
                    (1), 96-112.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2010). "Tied to Each Other": Religion and
                    Networked Capital. <i>The Anthropologist</i>, Special
                    Volume.
                  </h6>

                  <h6 className="presentation">
                    Naidu, M. &amp; Shukla, U (2010). Hindu Studies: Studying
                    the “Past-Present”,{" "}
                    <i>Nidan: International Journal of Indian Studies</i>, 22(1)
                    VI-VIII.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Seeing (through) the Gaze: Marking
                    Religious and Cultural Differences on Muslim Female Bodies.{" "}
                    <i>Journal for the Study of Religion</i>, 2(2), 23-42.
                    19(1), 280-305.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Belief across Borders: Religion as
                    Networked Capital. <i>Journal of Dharma</i>, 34(4), 380-395.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Top-less Tradition for Tourists: Young
                    Zulu Girls in Tourism. <i>Agenda</i>, 23(79), 38-48
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Glaring Invisibility: Dressing the Body of
                    the Female Cleaner.{" "}
                    <i>Journal of Anthropology Association Southern Africa</i>,
                    32(3-4), 128-138.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2009). Constructing the Religious 'Other'.{" "}
                    <i>Nidan: International Journal of Indian Studies </i>, Vol.
                    21.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2008). Anthropology of (Female) Body: Site of
                    Hi-jacking in the HIV/AIDS Discourse. <i>, Agenda, </i>,
                    1(1), 78-90.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2008). Inscribing the Female Body: Fuzzy Gender
                    and Goddess in a South Indian Saiva Marriage Myth.{" "}
                    <i>, Journal for the Study of Religion</i>, 21(1), 19-36.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2008). The Mobile Global Subject: Mobility and
                    Transnationalising Hinduism.{" "}
                    <i>Nidan: International Journal of Indian Studies</i>,, 20,
                    16-31.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2010). Wrestling with Standpoint Theory: Some
                    Thoughts on Standpoint and African Feminism. <i>Agenda</i>,
                    83(2010), 24-35.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2008). Eco-femin(ism) and
                    Hindu(ism)...Eco-Compassion, <i>Dharma</i>, 33(2), 221-243.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2008). Creating an African Tourist Experience at
                    the Cradle of Humankind World Heritage Site.{" "}
                    <i>, Historia, Journal of Historical Studies</i>, 53(2),
                    182-207.
                  </h6>

                  <h6 className="presentation">
                    Naidu, M. (2007). Religion Education or Religious Education,{" "}
                    <i>Nidan: International Journal of Indian Studies</i>, Vol.
                    15.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2005). The Hindu Women’s Religious Identity in
                    South Africa. <i>Journal of Dharma</i>.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2003). Business Suits Priests: Power and
                    Priesthood.{" "}
                    <i>Nidan: International Journal of Indian Studies</i>, Vol.
                    15.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (1999). Marriage Reaffirming Sacred Space.{" "}
                    <i>Nidan: International Journal of Indian Studies</i>, 11,
                    52-76.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (1997). Critical Distance: Some Methodological
                    Problems Encountered in the Field,{" "}
                    <i>Journal for the Study of Religion in Southern Africa</i>,
                    10(1), 19-39.
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <Button
                    className="button"
                    variant="outline-warning"
                    href="#publications"
                  >
                    Back to Top
                  </Button>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="articles" title="Non-Accredited Journals">
              <Row
                style={{
                  marginTop: "2rem",
                }}
              >
                <Col md="auto">
                  <h1 className="largeText">Non-Accredited Journals</h1>
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <h6 className="presentation">
                    Naidu, M. &amp; Darong, G. (2015). Narratives of Sangoma
                    Nurses. <i>Studies in Ethno-Medicine</i>, 9(3), 289-295.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2014). Communicating ‘Self’: Language and Issues
                    of Belonging. <i>Journal of Communication</i>, 5(1), 23-34.
                  </h6>

                  <h6 className="presentation">
                    Naidu, M. (2014). Engaged Pedagogy and Performative
                    Teaching: Examples from Teaching Practice,{" "}
                    <i>Journal of Educational Studies</i> 6(3), 459-468.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2014). Seeing with the Blind: Teaching and
                    Learning with Differently-Abled Students,{" "}
                    <i>Journal of Educational Studies</i>, 7(2), 349-355.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. &amp; Nzuza N. (2013). Food and Maintaining
                    Identity: Sierra Leone Migrants in Durban.{" "}
                    <i>Journal of Sociology and Social Anthropology</i>. 4(3),
                    193-200.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2013). Anthropology of Experience: Touring the
                    Past at Robben Island. <i>Journal of Human Ecology</i>,
                    43(1), 51-60.
                  </h6>
                  <h6 className="presentation">
                    Naidu, M. (2011). Indigenous Female Cultural Bodies in
                    Tourism: An Analysis of Local ‘Audience’ Perception of
                    Global Tourist Consumers.{" "}
                    <i>International Journal of Social Sciences</i>, 26(1),
                    29-39.
                  </h6>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="chapters" title="Chapters">
              <Row
                style={{
                  marginTop: "2rem",
                }}
              >
                <Col md="auto">
                  <h1 className="largeText">Chapters</h1>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2rem",
                }}
              >
                <Col md="auto">
                  <h6 className="presentation">
                    "Tied to Each Other": Religion and Networked Capital in{" "}
                    <i>
                      Anthropology Today: Contemporary Trends in Anthropology
                    </i>
                    , (Ed) Shalina Mehta, India: Kre Publishers, 2010.
                  </h6>
                  <h6 className="presentation">
                    Revisiting Standpoint Theory through Ethnographic Vignettes in{" "}
                    <i>
                      Introduction to Gender Studies in eastern and Southern
                      Africa: A Reader
                    </i>
                    , (Ed) James Etim. USA: Sentient Publishers, 2016.
                  </h6>

                  <h6 className="presentation">
                    Teaching and Learning with Video and Video-Ethnography: Some
                    Pedagogic Reflections from Classroom Practice, (Ed) James
                    Etim. USA: Nova Science Publishers, 2018.
                  </h6>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>
    );
  }
}
