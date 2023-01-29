import { Col, Container, Row } from "react-bootstrap";
import Brand1 from "../img/client-logo-01.webp";
import Brand2 from "../img/client-logo-02.webp";
import Brand3 from "../img/client-logo-03.webp";
import Brand4 from "../img/client-logo-04.webp";

const BRANDS = [Brand1, Brand2, Brand3, Brand4];

export const Brands = () => (
  <Container>
    <Row>
      <Col lg="12" className="d-flex justify-content-between">
        {BRANDS.map((brand) => (
          <div key={brand}>
            <img src={brand} alt={brand} />
          </div>
        ))}
      </Col>
    </Row>
  </Container>
);
