import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import "./App.css";

export default class Publications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.key,
      tooltip: true,
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
            marginBotton: "0rem",
          }}
        >
          <Row
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Col md="auto">
              <h1 className="largeHeading" id="top">
                Publications
              </h1>
            </Col>
            <Toast
              show={this.state.tooltip}
              onClose={() => this.setState({ tooltip: !this.state.tooltip })}
            >
              <Toast.Header>
                <strong className="mr-auto">Tip</strong>
              </Toast.Header>
              <Toast.Body style={{ color: "#282c34", fontSize: "0.6rem" }}>
                Hover over the DOI or Journal to visit the publication.
              </Toast.Body>
            </Toast>
          </Row>
          <Tabs activeKey={this.state.key} onSelect={(k) => this.setKey(k)}>
            <Tab
              eventKey="peer"
              title="Peer-Reviewed Journals"
              style={{
                marginBottom: "0rem",
              }}
            >
              <Row
                style={{
                  marginTop: "2rem",
                }}
              >
                <Col md="auto">
                  <h1 className="largeText">Peer-Reviewed Journal Articles</h1>
                </Col>
              </Row>
              <Row>
                <Col md="auto" style={{ marginRight: "0rem" }}>
                  <h6 className="publication">
                    Shoko, E. &amp; Naidu, M. (2020). The Conceptualisation of
                    Peace in Zimbabwean Rural Water Sector.{" "}
                    <i>Journal of Peacebuilding and Development</i>, 15(1),
                    31-44.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/1542316619880778"
                    >
                      DOI: 10.1177/1542316619880778
                    </a>
                  </h6>
                  <h6 className="publication">
                    Makanda, J. &amp; Naidu, M. (2019). South Africa’s
                    Peacebuilding Interventions in the Democratic Republic of
                    Congo: Insights from the Congolese Refugees in Johannesburg,
                    Cape Town and Durban.{" "}
                    <i>Journal of African Foreigners Affairs</i>. 6(1), 65-84.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://doi.org/10.31920/2056-5658/2019/v6n1a4"
                    >
                      DOI: 10.31920/2056-5658/2019/v6n1a4
                    </a>
                  </h6>
                  <h6 className="publication">
                    Benhura, AR. &amp; Naidu, M. (2019). Delineating caveats for
                    (quality) education during displacement: Critiquing the
                    impact of forced migration on access to education.{" "}
                    <i>Migration Studies</i>.{" "}
                  </h6>
                  <h6 className="publication">
                    Mutambara, V. &amp; Naidu, M. (2019). The Human Security
                    Implications of Migration on Zimbabwean Migrant Women in
                    South Africa. <i>African Human Mobility Review</i>. 5(3)
                    174-179.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Benhura, AR. (2018). Humanitarianism in
                    Praxis? Probing Power Dynamics Around Key Actors in
                    Zimbabwe’s Forced Migration.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://link.springer.com/article/10.1007/s12134-018-0629-2"
                    >
                      <i>Journal of International Migration and Integration</i>
                    </a>
                    , 20(13), 735-749.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2018). The Butcher, the Baker, the Brewer …and
                    Barber: Reflections on Migrant Micro-Entrepreneurship and
                    Informal Economies.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.scopus.com/record/display.uri?eid=2-s2.0-85070351147&origin=inward&txGid=b3bd114d1973aed58121aebcebf897fb"
                    >
                      <i>Elsevier: Journal of Social Development in Africa</i>
                    </a>
                    , 33 (2), 37-60.
                  </h6>
                  <h6 className="publication">
                    Shoko E. &amp; Naidu, M. (2018). Peace-based Informal
                    Practices around Shared Communal Water Resources in Tyrone
                    Village, Zimbabwe.{" "}
                    <i>International Journal of African Renaissance Studies</i>,
                    13(2), 77-91.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/18186874.2018.1533383"
                    >
                      DOI: 10.1080/18186874.2018.1533383
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2017). The Feminine Divine, the Hug and Spiritual
                    Hindu Leadership.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.ajol.info/index.php/jsda/article/view/170148"
                    >
                      <i>Elsevier: Journal of Social Development in Africa</i>
                    </a>
                    , 32(2).
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Mutambara, V. (2017). Questioning
                    Heteronormative in Higher Education Spaces.{" "}
                    <i>South African Journal of Higher Education</i>,Vol.31.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.journals.ac.za/index.php/sajhe/article/view/1320"
                    >
                      DOI: 10.20853/31-4-1320.
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2017). When My Body is in the Way: Body Mapping
                    &amp; Positionality.{" "}
                    <i>Agenda: Empowering Women for Gender Equity</i>,
                    32(2),106-112.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/10130950.2018.1455293"
                    >
                      DOI: 10.1080/10130950.2018.1455293
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2016). Displaced Sense: Displacement &amp;
                    Sense-making.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="http://www.scielo.org.za/scielo.php?script=sci_abstract&pid=S1011-76012016000100005&lng=en&nrm=iso"
                    >
                      <i>Journal for the Study of Religion</i>
                    </a>
                    , 29(1), 104-126.
                  </h6>
                  <h6 className="publication">
                    10. Naidu, M. (2016). "Plastic Migrants" and Deprived
                    Livelihoods: Resettlement &amp; Forced Migration.{" "}
                    <i>Migracijske i etničke teme</i>, 32(2), 221-244.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://hrcak.srce.hr/index.php?show=clanak&id_clanak_jezik=248188"
                    >
                      DOI: 10.11567/met.32.2.3
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Benhura, AR. (2016). Gazing on Xenophobia:
                    Issues of Foreigness and (non)Belonging.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.ajol.info/index.php/jsda/article/view/156585"
                    >
                      <i>Elsevier: Journal of Social Development in Africa</i>
                    </a>
                    , 31(1), 7-26
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2015). I want love too... What is so wrong with
                    that? <i>Agenda: Empowering Women for Gender Equity</i>,
                    29(2), 44-53.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/10130950.2015.1048935"
                    >
                      {" "}
                      DOI: 10.1080/10130950.2015.1048935
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Darong G. (2015). When Illness is more than
                    a Sick Body: Probing How IsiZulu-Speaking Nurses Construct
                    Illnesses and Healing.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=When+Illness+is+more+than+a+Sick+Body%3A+Probing+How+IsiZulu-Speaking+Nurses+Construct+Illnesses+and+Healing&btnG="
                    >
                      <i>The Oriental Anthropologist</i>
                    </a>
                    , 15(1), 91-108.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Benhura, AR. (2015). Caught Between
                    Definitions: Locating the Zimbabwean Internal Displacement
                    within the Global Humanitarian Regime Support.{" "}
                    <i>The Oriental Anthropologist</i>, 17(2), 337-256.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0976343020170202?journalCode=oana"
                    >
                      {" "}
                      DOI: 10-1177/0976343020170202
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Mazibuko N (2015). The ‘First Skin’: Clothes
                    and Masculinity amongst the Izikhothani.{" "}
                    <i>Journal of Social Sciences</i>, 45(3), 212-220.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2015.11893503"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2015.11893503{" "}
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Makanda, J. (2017). Peacebuilding in the
                    Congo: Arguing for the Inclusion of the Subaltern Voice of
                    the Congolese Refugee. <i>Journal of Social Sciences</i>,
                    45(2), 96-102.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2015.11893491"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2015.11893491
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Khumalo S. (2015). I’m Circumcised so
                    HIV/AIDS Can’t Touch Me: Young Black African University Men
                    and Narratives of Masculinity.{" "}
                    <i>The Oriental Anthropologist</i>, 16, 163-181.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/10.1177/0976343020160113"
                    >
                      {" "}
                      DOI: 10.1177/0976343020160113
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2014). Social Face of Networks: The Features of
                    Maintaining Self in Migrant Space.{" "}
                    <i>Sociological Bulletin</i>, 16(1), 41-58.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/10.1177/0038022920140103"
                    >
                      {" "}
                      DOI: 10.1177/0038022920140103
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Nzuza, N. (2014). Transnationalised Memories
                    among Migrants: How ‘Indigenous’ Food can Bring Home Closer.{" "}
                    <i>The Anthropologist</i>, 17(2), 333-340.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09720073.2014.11891442"
                    >
                      {" "}
                      DOI: 10.1080/09720073.2014.11891442
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2014). Colouring Continuity: Coloured Community
                    in Wentworth. <i>Journal of Social Sciences</i>, 39(1),
                    19-30.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2014.11893265"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2014.11893265
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2014). Not "Bio-Prospecting" But
                    "Bio-Respecting": Seeing Forests as Culturally Embedded
                    Spaces.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://dialnet.unirioja.es/servlet/articulo?codigo=5066353"
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 39(3), 113-138.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Transnationalising the Sacred: Yagna as
                    "Spectacle"? <i>South Asian Survey</i>, 20(1), 1-13.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0971523114559874?casa_token=qK19KKKTs2gAAAAA:dwq9DCCjSougBI5mfNy4BUrVx3J7fwnLwehlDXwe4yXB0t7IGb_dcr-IyCFQO6xDgzwEisKShlooPQ"
                    >
                      {" "}
                      DOI: 10.1177/0971523114559874
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Pedagogies of Belief: Teaching and
                    Learning in a Small Christian School.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="http://alternation.ukzn.ac.za/Files/docs/20.7/21 Bin.pdf#page=205"
                    >
                      <i>
                        AlterNation: Interdisciplinary Journal for the Study of
                        Art and Humanities in Southern Africa
                      </i>
                    </a>
                    , 10, 200-220.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). African Religion and Ethics: The Notion of
                    Ethical Non-dualism.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=https%3A%2F%2Fdialnet.unirioja.es%2Fservlet%2Farticulo%3Fcodigo%3D4573745&btnG="
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 38(4), 211-224.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Constructing Patient and Patient
                    Healthcare: Indigenous Knowledge and the use of Isihlambezo.{" "}
                    <i>Indilinga</i>, 12(2), 252-262.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/10130950.2013.793898?journalCode=ragn203"
                    >
                      {" "}
                      DOI: 10.1080/10130950.2013.793898
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Ngqila K. (2013). Enacting Masculinities:
                    Pleasure to Men and Violence to Women.{" "}
                    <i>Agenda: Empowering Women for Gender Equity</i>, 26(1),
                    1-10.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/full/10.1080/10130950.2013.793898?casa_token=OzxSNr5wl3oAAAAA%3Abr-lr0-vgqIc_IdZ5epn8xQXaulCaZzd7VksqT-Wc3MRnlVajdh-ebxtJscb2Cm_ZAu3hw94dAf4Jg"
                    >
                      {" "}
                      DOI: 10.1080/10130950.2013.793898
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Perceptions around Female Condoms:
                    Reporting on Women’s Experiences.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=%29.+Perceptions+around+Female+Condoms%3A+Reporting+on+Women%E2%80%99s+Experiences%2C&btnG="
                    >
                      <i>Anthropological Notebooks</i>
                    </a>
                    , 19(1), 25-34.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Attending to the Patient: Bioethics and
                    Medical Literature.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Attending+to+the+Patient%3A+Bioethics+and+Medical+Literature&btnG="
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 38 (1), 7-26.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Sinful Liaisons (!)Lesbian and Religious.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Sinful+Liaisons+%28%21%29Lesbian+and+Religious&btnG="
                    >
                      <i>Journal of Gender and Religion in Africa</i>
                    </a>
                    , 19(1), 1-18.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Migrant Mothers: Raising Children in
                    Migrant Space. <i>The Oriental Anthropologist</i>, 13(1),
                    35-53.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0976343020130104"
                    >
                      {" "}
                      DOI: 10.1177/0976343020130104
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Revisiting Female Power and the Notion of
                    African Feminism.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Female+Power+and+Revisiting+Notion+of+African+Feminism+by+naidu&btnG="
                    >
                      <i>
                        AlterNation: Interdisciplinary Journal for the Study of
                        Art and Humanities in Southern Africa
                      </i>
                    </a>{" "}
                    , 20(2), 147-163.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). (Editorial) Mobilities and Transnational
                    Lives.{" "}
                    <i>
                      AlterNation: Interdisciplinary Journal for the Study of
                      Art and Humanities in Southern Africa
                    </i>
                    , 191, 1-6
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). Belief and Bereavement: Attachment and the
                    "Grief Work" Hypothesis,{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/24798425?casa_token=_7y81PSOTR4AAAAA:taJmAt05f7Ru54evWwKstcG88BiPmbH7XVRNwxwT_uYcV1_Kjjh3draBKNFbXBUDztlCDIe-hC-OCed9112l_IInEIeAPgkaGbqaPAExW3OJwyoXvo9k&seq=1#metadata_info_tab_contents"
                    >
                      <i>Journal for Study of Religion</i>
                    </a>
                    , 25 (2), 71-87.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). Performing Illness and Health: The
                    Humanistic Value of Cancer Narratives. ASnA,{" "}
                    <i>Journal of Anthropology Association Southern Africa</i>,
                    35(3/4), 71-80.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0976343020130104"
                    >
                      {" "}
                      DOI: 10.1080/23323256.2012.11500026
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). Urban Encounters with God: When God Lends
                    a Hand.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://philpapers.org/rec/NAIUEW"
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 37(3), 293-312.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). Mind the Gap: The Structural Ecology of
                    Small Networked Communities.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Mind+the+Gap%3A+The+Structural+Ecology+of+Small+Networked+Communities%2C&btnG="
                    >
                      <i>
                        AlterNation: Interdisciplinary Journal for the Study of
                        Art and Humanities in Southern Africa
                      </i>
                    </a>{" "}
                    , 19(1), 280-305.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2012). Transcendent Genealogical &amp; Kinship
                    Relations: Afterlife in African Traditional Religions.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://philpapers.org/rec/NAITAK"
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 37(2), 411-426.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2011). Shaping and Gazing on Foreign African
                    Female Bodies. <i>The Oriental Anthropologist</i>, 11(2),
                    1-25.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0976343020110205?journalCode=oana"
                    >
                      {" "}
                      DOI: 10.1177/0976343020110205
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2011). Indian Women in Marriage: When Sacred
                    Thread becomes a Noose.{" "}
                    <i>Agenda: Empowering Women for Gender Equity</i>, 25(1),
                    84-92.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/10130950.2011.575587"
                    >
                      {" "}
                      DOI: 10.1080/10130950.2011.575587
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M (2011). Gendered Religion: Auto-ethnography as
                    Methodological Tool in Religion Studies,{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0,5&q=Gender+Religion%3A+Autoethnography+as+Methodological+Tool+in+Religion+Studies+by+naidu"
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 36(4), 257-273.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2011) Queering Women: Disembedding the Maternal
                    Script from Women and Earth.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/24764283?casa_token=aTi5kmvGNxYAAAAA:DrRxAcBdWnVc1RkIxwJZy7SZkHOHrUOtWD7u6J2McLVCf2SpwylBkMFn14FfaKWRJ7MVjpL_6GGILp95_mOtDp-cP1-NW-_oZdG0h0jrWlTXguQu7VFv&seq=1#metadata_info_tab_contents"
                    >
                      <i>Journal for the Study of Religion</i>
                    </a>
                    , 24(2), 33-46.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2009). Indigenous Cultural Bodies in Tourism: An
                    Analysis of Local ‘Audience’ Perception of Global Tourist
                    Consumers. <i>Journal of Social Sciences</i>, 26(1), 29-39.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2011.11892879"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2011.11892879
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M (2011). Animated Environment: "Animism" and
                    Environment Revisited.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Animated+Environment%3A+%E2%80%98%E2%80%99Animism%E2%80%99%E2%80%99+and+Environment+Revisited.&btnG="
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 36(3), 257-273.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2010). Wrestling with Standpoint Theory: Some
                    Thoughts on Standpoint and African Feminism.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Wrestling+with+Standpoint+Theory%3A+Some+Thoughts+on+Standpoint+and+African+Feminism.+&btnG="
                    >
                      <i>Agenda: Empowering Women for Gender Equity</i>
                    </a>
                    , 83(2), 24-35.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Ojong V. (2010). The "Re Production" of
                    "Woman" and Mothering: Women in Hindu and Christian
                    Religio-Cultural Traditions.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.ingentaconnect.com/content/sabinet/nidan/2010/00000022/00000001/art00007"
                    >
                      <i>
                        Nidan: International Journal for the Study of Hinduism
                      </i>
                    </a>
                    , 22 (1), 96-112.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Shukla, U (2010). Hindu Studies: Studying
                    the “Past-Present”.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.co.za/content/nidan/22/1/EJC84466"
                    >
                      <i>
                        Nidan: International Journal for the Study of Hinduism
                      </i>
                    </a>
                    , 22(1) VI-VIII.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2009). Seeing (through) the Gaze: Marking
                    Religious and Cultural Differences on Muslim Female Bodies.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/24764317?casa_token=7KtyKOmFPWEAAAAA:RKxOsUNVx60pt9lcu90RAzpwDydUT8PeaUIN67dvjvZaXt1pYGz6jXD4VrPzdag8e0yZfwFgv5aj1x4ejlZZq7k7QUtOR0uSBzAb2dVT5X_Rkk16KKNx&seq=1#metadata_info_tab_contents"
                    >
                      <i>Journal for the Study of Religion</i>
                    </a>
                    , 2(2), 23-42. 19(1), 280-305.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2009). Belief across Borders: Religion as
                    Networked Capital.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://philpapers.org/rec/NAIBAB"
                    >
                      <i>Journal of Dharma</i>
                    </a>
                    , 34(4), 380-395.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2009). Top-less Tradition for Tourists: Young
                    Zulu Girls in Tourism.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/toc/ragn20/23/79"
                    >
                      <i>Agenda: Empowering Women for Gender Equity</i>
                    </a>
                    , 23(79), 38-48
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2009). Glaring Invisibility: Dressing the Body of
                    the Female Cleaner.{" "}
                    <i>Journal of Anthropology Association Southern Africa</i>,
                    32(3-4), 128-138.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/23323256.2009.11499987?casa_token=y1K-5e5e5e8AAAAA:UcwYCaHyGqd7Iey_syAy20JIhZ37S4KgndQOBeXOgPBarMzBDfX_Cr68XqEXoJzobIq6vXQE42xRjw"
                    >
                      {" "}
                      DOI: 10.1080/23323256.2009.11499987
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2008). Anthropology of (Female) Body: Site of
                    Hi-jacking in the AIDS Discourse.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/10130950.2008.9674911?casa_token=yN53uByr7kIAAAAA:JT5lPiI3hX4Ea75BZeUQ031vN0HBljZ4dzzJwtnP59GBZVFpS_xC3otxqIGUkKDsh02npXYmDGhVRw"
                    >
                      <i>Agenda: Empowering Women for Gender Equity</i>
                    </a>
                    , 22(1), 78-90.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2008). Inscribing the Female Body: Fuzzy Gender
                    and Goddess in a South Indian Saiva Marriage Myth.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/24764033?casa_token=-JrH9LvIyIoAAAAA:W3YviknAlJBznK-w0tk4QYbq05KAu0LP545TITWhfoqJx9hp87QAPUhsvzcvQXztUJtvt-Fqg9Tfvk78nHDDPh23dgNP8-36gFxdHW4vh00KJ_kM-tqZ&seq=1#metadata_info_tab_contents"
                    >
                      <i>Journal for the Study of Religion</i>
                    </a>
                    , 21(1), 19-36.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2008). The Mobile Global Subject: Mobility and
                    Transnationalising Hinduism.{" "}
                    <i>
                      Nidan: International Journal for the Study of Hinduism
                    </i>
                    , 20, 16-31.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2008). Eco-femin(ism) and Hindu(ism) Positioning
                    Contemporary Eco-ethic Conversation.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/24764033?casa_token=-JrH9LvIyIoAAAAA:W3YviknAlJBznK-w0tk4QYbq05KAu0LP545TITWhfoqJx9hp87QAPUhsvzcvQXztUJtvt-Fqg9Tfvk78nHDDPh23dgNP8-36gFxdHW4vh00KJ_kM-tqZ&seq=1#metadata_info_tab_contents"
                    >
                      <i>Journal for the Study of Religion</i>
                    </a>
                    , 33(2), 221-243.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2008). Creating an African Tourist Experience at
                    the Cradle of Humankind World Heritage Site.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="http://www.scielo.org.za/scielo.php?script=sci_arttext&pid=S0018-229X2008000200009"
                    >
                      <i>Historia, Journal of Historical Studies</i>
                    </a>
                    , 53(2), 182-207.
                  </h6>

                  <h6 className="publication">
                    Naidu, M. (2007). Taking your God into the Classroom, Religious
                    Education and Religion Education: The Westville Hindu School
                    as an Alternate Model of Education.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.ingentaconnect.com/content/sabinet/nidan/2007/00000019/00000012/art00009"
                    >
                      <i>
                        Nidan: International Journal for the Study of Hinduism
                      </i>
                    </a>
                    , 19(12), 59-88.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2005). Religious Belonging and Identity among South African Hindu Women. <i>Journal of Dharma</i>.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2003). Business Suits and Priests: The Politics
                    of Sacred Space.{" "}
                    <i>
                      Nidan: International Journal for the Study of Hinduism
                    </i>
                    , 15, 1-13.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (1999). Marriage As Reaffirming Sacred Space.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.co.za/content/nidan/11/12/AJA10165320_141"
                    >
                      <i>
                        Nidan: International Journal for the Study of Hinduism
                      </i>
                    </a>
                    , 11, 52-76.
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (1997). Critical Distance: Some Methodological
                    Problems Encountered in the Field.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.jstor.org/stable/44945329?casa_token=24-R49PuUeQAAAAA:OgbvKmQcJYq3qvuXH5pcABDcjY0aAEVdy_qlYUofxTwVQqhmmzVyE3FK9sbJSRjUXoYUBAEPR8DzSh-6VywXzxbDnM-_XoML6-FqXPtYMXYfn_gpSdKU&seq=1#metadata_info_tab_contents"
                    >
                      <i>
                        Journal for the Study of Religion in Southern Africa
                      </i>
                    </a>
                    , 10(1), 19-39.
                  </h6>
                </Col>
              </Row>
              <Row
                style={{
                  paddingBottom: "2rem",
                }}
              >
                <Col md="auto">
                  <Button
                    className="button"
                    variant="outline-warning"
                    href="#top"
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
                  <h1 className="largeText">Non-Accredited Journal Articles</h1>
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <h6 className="publication">
                    Naidu M. &amp; Mazibuko, N. (2015). Izikhothani Perceptions
                    on Women, Sex and Sexuality. <i>Oriental Anthropologists</i>
                    , Vol. 15.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://journals.sagepub.com/doi/abs/10.1177/0976343020160101?journalCode=oana"
                    >
                      {" "}
                      DOI: 10.1177/0976343020160101
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Darong, G. (2015). Illness and Health as
                    Constructions: Narratives of Sangoma Nurses.{" "}
                    <i>Studies in Ethno-Medicine</i>, 9(3), 289-295.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09735070.2015.11905446"
                    >
                      {" "}
                      DOI: 10.1080/09735070.2015.11905446
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2014). Communicating "Self": Language and Issues
                    of Belonging.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.co.za/scholar?hl=en&as_sdt=0%2C5&as_vis=1&q=Communicating+%E2%80%98Self%E2%80%99%3A+Language+and+Issues+of+Belonging.&btnG="
                    >
                      <i>Journal of Communication</i>
                    </a>
                    , 5(1), 23-34.
                  </h6>

                  <h6 className="publication">
                    Naidu, M. (2014). Engaged Pedagogy and Performative
                    Teaching: Examples from Teaching Practice,{" "}
                    <i>Journal of Educational Studies</i> 6(3), 459-468.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09751122.2014.11890157"
                    >
                      {" "}
                      DOI: 10.1080/09751122.2014.11890157
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2014). Seeing with the Blind: Teaching and
                    Learning with Differently-Abled Students,{" "}
                    <i>Journal of Educational Studies</i>, 7(2), 349-355.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09751122.2014.11890197"
                    >
                      {" "}
                      DOI: 10.1080/09751122.2014.11890197
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Nzuza N. (2013). Food and Maintaining
                    Identity: Sierra Leone Migrants in Durban.{" "}
                    <i>Journal of Sociology and Social Anthropology</i>. 4(3),
                    193-200.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09735070.2015.11905446"
                    >
                      {" "}
                      DOI: 10.1080/09766634.2013.11885596
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2013). Anthropology of Experience: Touring the
                    Past at Robben Island. <i>Journal of Human Ecology</i>,
                    43(1), 51-60.{" "}
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://d.docs.live.net/72e063d1ed2b7e15/Desktop/doi.org/10.1080/09709274.2013.11906611"
                    >
                      {" "}
                      DOI: 10.1080/09709274.2013.11906611
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. &amp; Nzuza, N. (2013). When God Beckons: Stories
                    of the "Call" in a Pentecostal Church.{" "}
                    <i>Journal of Social Sciences</i>, 36(2), 153-163.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2013.11893184"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2013.11893184
                    </a>
                  </h6>
                  <h6 className="publication">
                    Naidu, M. (2011). Indigenous Female Cultural Bodies in
                    Tourism: An Analysis of Local ‘Audience’ Perception of
                    Global Tourist Consumers.{" "}
                    <i>International Journal of Social Sciences</i>, 26(1),
                    29-39.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://www.tandfonline.com/doi/abs/10.1080/09718923.2011.11892879"
                    >
                      {" "}
                      DOI: 10.1080/09718923.2011.11892879
                    </a>
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
                  <h6 className="publication">
                    "Tied to Each Other": Religion and Networked Capital in{" "}
                    <i>
                      Anthropology Today: Contemporary Trends in Anthropology
                    </i>
                    , (Ed) Shalina Mehta, India: Kre Publishers, 2010.
                  </h6>
                  <h6 className="publication">
                    Revisiting Standpoint Theory through Ethnographic Vignettes
                    in{" "}
                    <i>
                      Introduction to Gender Studies in eastern and Southern
                      Africa: A Reader
                    </i>
                    , (Ed) James Etim. USA: Sentient Publishers, 2016.
                    <a
                      className="pubLink"
                      target="_blank"
                      href="https://scholar.google.co.za/scholar?hl=en&as_sdt=0%2C5&as_vis=1&q=.+Revisiting+Standpoint+through+Ethnographic+Vignettes+in+Introduction+to+Gender+Studies+in+eastern+and+Southern+Africa%3A+A+&btnG="
                    >
                      {" "}
                      DOI: 10.1007/978-94-6300-558-6
                    </a>
                  </h6>

                  <h6 className="publication">
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
