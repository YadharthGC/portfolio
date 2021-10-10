import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Projects() {
  let datas = [
    {
      name: "Web scrap",
      link: "./images/scrap.png",
      src: "https://yadharthscrapping.netlify.app/",
    },
    {
      name: "catsapi",
      link: "./images/cat.png",
      src: "https://yadharthcatsaxios.netlify.app/",
    },
    {
      name: "cart",
      link: "./images/cart.png",
      src: "https://yadharthpricecart.netlify.app/",
    },
    {
      name: "tvmaze",
      link: "./images/tv.png",
      src: "https://yadharthtvmaze.netlify.app/",
    },
    {
      name: "survey form",
      link: "./images/survey.png",
      src: "https://yadharthsurveyform.netlify.app/",
    },
    {
      name: "laud page",
      link: "./images/laud.png",
      src: "https://yadharthlaudpage.netlify.app/",
    },
    {
      name: "banner",
      link: "./images/obesity.png",
      src: "https://yadharth-task2.netlify.app/",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "1%" }}>
      <div className="ok">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="span">Home</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <span className="span"> About</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <span className="span">Projects</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <span className="span"> Contacts</span>
        </Link>
      </div>
      <div class="con">
        <h3>
          <u>These are some of my projects i did of my own</u>
        </h3>
      </div>
      <div className="row">
        {datas.map((data) => {
          return (
            <div className="col-lg-2" id="col">
              <a href={data.src} target="_blank">
                <img src={data.link} class="imgs" />
              </a>
              <div style={{ textAlign: "center" }}>{data.name}</div>
            </div>
          );
        })}
      </div>

      <div className="exps" style={{ marginTop: "3%" }}>
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <div className="exp">&nbsp;Contacts&#8594;&nbsp;</div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
