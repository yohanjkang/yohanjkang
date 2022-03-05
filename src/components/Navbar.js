import React, { useEffect, useState } from "react";

function Navbar(props) {
  let navbar;
  let navHeight;

  // useEffect(() => {
  //   navbar = document.querySelector(".navbar");
  //   navHeight = navbar.getBoundingClientRect().height;

  //   const homeObserver = new IntersectionObserver(stickyNav, {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: "-10px",
  //   }).observe(document.querySelector(".hero"));

  //   document.querySelector(
  //     ".hero"
  //   ).style.transform = `translateY(${-navHeight})`;
  // });

  ////////////////////////////////////////////////////////////////
  // Navbar
  ////////////////////////////////////////////////////////////////

  const stickyNav = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      navbar.classList.add("sticky");
    } else navbar.classList.remove("sticky");
  };

  return (
    <nav className={`navbar ${props.isOpen ? "open" : ""}`}>
      <img
        className="navbar-menu-icon"
        src={require(`../images/close.png`)}
        alt="Close Icon"
        onClick={props.clickHandler}
      />
      <div className="nav-links">
        <div className="nav-link" onClick={props.clickHandler}>
          <a href="#about">
            <img
              src={require(`../images/account_icon.png`)}
              alt="Contact Icon"
            />
            <span>About</span>
          </a>
        </div>
        <div className="nav-link" onClick={props.clickHandler}>
          <a href="#experience">
            <img
              src={require(`../images/office_bag_icon.png`)}
              alt="Experience Icon"
            />
            <span>Experience</span>
          </a>
        </div>
        <div className="nav-link" onClick={props.clickHandler}>
          <a href="#projects">
            <img
              src={require(`../images/monitor_icon.png`)}
              alt="Projects Icon"
            />
            <span>Project</span>
          </a>
        </div>
        <div className="nav-link" onClick={props.clickHandler}>
          <a href="#contact">
            <img
              src={require(`../images/message_icon.png`)}
              alt="Contact Icon"
            />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
