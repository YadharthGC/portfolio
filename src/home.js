import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
  return (
    <div className="container" id="home">
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
      <div className="im">
        <div className="gc">
          <div style={{ fontSize: "50px" }}>hello, I'M</div>
          <div>HARI YADHARTH</div>
          <div style={{ fontSize: "35px" }}>I MAKE BEAUTIFUL WEBSITES</div>
        </div>
      </div>
      <div className="exps">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="exp">&nbsp;Explore&#8594;&nbsp;</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
