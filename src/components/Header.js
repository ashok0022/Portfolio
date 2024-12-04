import React from "react";

const Header = () => {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <div id="header">
        <div class="container">
          <nav>
            <img src="images/logo.png" className="logo" alt="img" />

            <ul id="sidemenu">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
            </ul>
            <i class="fa-solid fa-bars" onclick="openmenu()"></i>
          </nav>

          <div class="header-text">
            <p>Front End Developer</p>
            <h1>
              Hi, I'm <span>Ashok </span> <br />
              Makhija From India
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
