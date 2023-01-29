import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { i18n, LOCALES } from "../i18n/i18next";

import Logo from "../img/white-logo.webp";

export const Header = ({ mode, toggleMode }) => {
  return (
    <>
      <Navbar className="fixed-top" bg="black" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              {" "}
              <img src={Logo} alt="err" />{" "}
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link className="mx-4  text-light " to="/">
                Home
              </Link>
              <Link className="text-light" to="/">
                About
              </Link>
              <Link className="mx-4  text-light " to="/">
                Pages
              </Link>
              <Link className="text-light" to="/">
                Contant
              </Link>
            </Nav>
            <div className="d-flex">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              {LOCALES.map((locale) => (
                <Button
                  key={locale}
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locale.toUpperCase()}
                </Button>
              ))}
              <Button onClick={toggleMode}>
                {mode === "light" ? "☀️" : "🌙"}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
