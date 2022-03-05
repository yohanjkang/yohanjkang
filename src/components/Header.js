import React from "react";
import Div100vh from "react-div-100vh";

function Header(props) {
  return (
    <Div100vh className="header">
      <img
        className="navbar-menu-icon"
        src={require(`../images/bars.png`)}
        alt="Hamburger Icon"
        onClick={props.clickHandler}
      />
      <div className="header-section-center">
        <div className="header-line"></div>
        <div className="header-introduction">
          <h1>
            Hey! I'm <strong>Yohan</strong>
          </h1>
        </div>
        <h3>I'm a software developer.</h3>
        <div className="header-line"></div>
      </div>
      <a href="#about" className="down-icon">
        <img
          src={require(`../images/down_chevron.png`)}
          alt="Down Chevron Icon"
        />
      </a>
    </Div100vh>
  );
}

export default Header;
