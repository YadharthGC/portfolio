import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function About() {
  return (
    <div className="container" id="about" style={{ marginTop: "1%" }}>
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
      <div class="intro">
        I am Hari Yadharth GC, 21 years old and recently graduated from
        Mahalingam college with a B.E in Mechatronics. While there, I learned a
        lot of theory in subjects and now I’m ready to apply my knowledge into
        practice.
      </div>
      <hr></hr>
      <div class="row" style={{ marginTop: "2%" }}>
        <div class="col-8" id="expl">
          I am good with 3 programming languages that include c,c++, and
          javascript(reactjs and nodejs). I am comfortable with windows and
          Linux operating systems. I have the knowlege about HTML,CSS and
          Bootstrap. With my native language Tamil, I am fine with the other two
          languages, English and Telugu. Last but not least i love travelling
          and i use to play badminton for my health.
          <div className="expsa" style={{ marginTop: "1%" }}>
            <a
              href="https://drive.google.com/file/d/1BmOHa8kGYeJXg0sHgd7vhZm24MEtqNSs/view?usp=drivesdk"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <div className="exp">&nbsp;View my Resume&nbsp;</div>
            </a>
          </div>
        </div>

        <div class="col-4">
          <img
            class="me"
            src="./images/me.jpg"
            style={{ objectFit: "cover" }}
            title="Yadharth GC"
            alt="Hari Yadharth gc"
          ></img>
        </div>
      </div>
      <div className="exps" style={{ marginTop: "1%" }}>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div className="exp">&nbsp;projects&#8594;&nbsp;</div>
        </Link>
      </div>
    </div>
  );
}

export default About;
