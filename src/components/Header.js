import React from "react";
import Typewriter from "typewriter-effect";
// import Particle from "./Particle";
import homeLogo from "../Assets/home-main.svg";

const Header = () => {
  return (
    <div>
      {/* <!-- Header Section --> */}
      <div id="header">
        {/* <Particle /> */}
        <div class="container">
          <nav>
            {/* <img src="images/logo.png" className="logo" alt="img" /> */}
            <div></div>

            <ul id="sidemenu" style={{ marginTop: "6px" }}>
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

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div class="header-text">
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
              <h1>
                Hi, I'm <span>Ashok </span>{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                <br />
                Makhija From India
              </h1>
            </div>

            <div style={{ marginTop: "200px" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
