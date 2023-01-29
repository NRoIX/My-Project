import React from "react";
import AboutUsImage from "../img/about-us-02.webp";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Container className="py-120">
      <Row>
        <Col lg="6">
          <img src={AboutUsImage} alt="about us" />
        </Col>
        <Col lg="6">
          <h6 className="section-sub-title">{t("about.subTitle")}</h6>
          <h3 className="mb-10 section-title">{t("about.sectionTitle1")}</h3>
          <h3 class="mb-20 section-title">{t("about.sectionTitle2")}</h3>
          <h4 class="mb-20 font-weight-light">{t("about.content")}</h4>
          <p className="mb-40 font-weight-light">{t("about.description")}</p>
          <Button type="button" className="btn btn-primary">
            Contact US
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
