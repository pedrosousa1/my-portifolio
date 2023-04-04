import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import typescript from "../assets/img/typescript.png";
import postgrees from "../assets/img/postgrees.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Hard Skills</h2>
              <p>
                Especializado em desenvolvimento web full-stack já atuei no
                mercado de trabalho com diversas tecnologias e frameworks dentre
                eles temos:
                <br />
                HTML5, CSS3 e JavaScript, ReactJS/TS e Python.
                <br />
                Bibliotecas de estilização como Bootstrap e Styled-Components.
                <br />
                Facilidade com banco de dados utilizando a ferramenta dBeaver
                com as tecnologias: SQL Server e PostgreSQL.
                <br />
                Familiarizado no back-end com Node.JS, Nest.JS e Express.
                <br />
                Já fiz projetos também no-code e low-code com Bubble.
              </p>
              <div className="align-items-center">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={js} alt="" />
                  </div>
                  <div className="item">
                    <img src={typescript} alt="" />
                  </div>
                  <div className="item">
                    <img src={postgrees} alt="" />
                  </div>
                  <div className="item">
                    <img src={react} alt="" />
                  </div>
                  <div className="item">
                    <img src={html} alt="" />
                  </div>
                  <div className="item">
                    <img src={css} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
