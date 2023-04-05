import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import construtora from "../assets/img/construtora.png";
import toDo from "../assets/img/to-do.png";
import erp from "../assets/img/erp.png";
import clima from "../assets/img/clima.png";
import books from "../assets/img/books.png";
import refloresta from "../assets/img/refloresta.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Refloresta (Secretaria do meio ambiente de SP)",
      description: "Design, Desenvolvimento e consumo de API com SQLServer",
      imgUrl: refloresta,
    },
    {
      title: "Projeto Pessoal Lista de tarefas.",
      description: "Design, Desenvolvimento e CRUD com JSON Server",
      imgUrl: toDo,
    },
    {
      title: "Projeto Privado de ERP.",
      description: "Design, Desenvolvimento e consumo de API em Java",
      imgUrl: erp,
    },
    {
      title: "Projeto Pessoal Clima-Tempo.",
      description: "Design, Desenvolvimento e consumo de API",
      imgUrl: clima,
    },
    {
      title: "Projeto Pessoal Biblioteca interativa.",
      description: "Design, Desenvolvimento no-code em Bubble",
      imgUrl: books,
    },
    {
      title: "Projeto Privado de divulgação.",
      description: "Design & Desenvolvimento",
      imgUrl: construtora,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Alguns de meus projetos já concluídos, fazendo a utilização
                    das tecnologias citadas anteriormente, o CRUD está presente
                    em todos os projetos a seguir, inclusive no no-code.
                    <br />
                    Principais tecnologias utilizadas para o front-end: ReactTS,
                    Bubble, HTML e CSS, JavaScript.
                    <br />
                    Principais tecnologias utilizadas para o back-end: NestJS,
                    SQLServer, PostgreSQL, Mongoose e MongoDB.
                    <br />
                    Integração de API foi utilizado o cliente HTTP Axios.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Em Breve</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Em Breve</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
