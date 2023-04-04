import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };

  const redirecionarParaWhatsapp = () => {
    var numeroDeTelefone = "13991058048";
    var mensagem = "Olá! Pedro, tudo bem? Vim pelo seu portifólio!";
    var numeroDeTelefoneAPI = numeroDeTelefone.replace(/[^\d]/g, "");

    window.open(
      "https://api.whatsapp.com/send?phone=" +
        numeroDeTelefoneAPI +
        "&text=" +
        encodeURIComponent(mensagem),
      "_blank"
    );
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="nameHeader">
          Pedro Sousa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Início
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "habilidades"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("habilidades")}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projetos" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projetos")}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/pedrosousa-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/pedrosousa1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/_peedro_sousa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={redirecionarParaWhatsapp}>
              <span>Vamos nos conectar!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
