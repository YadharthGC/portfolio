import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Contact() {
  let datas = [
    {
      link: "mailto:ganeshyadharth@gmail.com",
      title: "ganeshyadharth@gmail.com",
      srcs: "./images/gmail.png",
    },
    {
      link: "https://www.linkedin.com/in/yadharth/",
      title: "https://www.linkedin.com/in/yadharth/",
      srcs: "./images/in.png",
    },
    {
      link: "https://github.com/YadharthGC?tab=repositories",
      title: "https://github.com/YadharthGC?tab=repositories",
      srcs: "./images/gb.png",
    },
  ];
  return (
    <div class="container" style={{ marginTop: "1%" }}>
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
          <u>Contacts and references</u>
        </h3>
      </div>
      <div class="row">
        {datas.map((data) => {
          return (
            <div class="col" style={{ textAlign: "center" }}>
              <a href={data.link} target="_blank" title={data.title}>
                <img src={data.srcs} class="imgss" />
              </a>
            </div>
          );
        })}
      </div>
      <div class="tk">thank you for exploring my portfolio</div>
      <div className="exps" style={{ marginTop: "20%" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="exp">&nbsp;Back to Home&#8594;&nbsp;</div>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
