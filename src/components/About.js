import React from "react";

const About = () => {
  return (
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="about-col-1">
            <img src="images/user.png" alt="" />
          </div>
          <div class="about-col-2">
            <h1 class="sub-title">About Me</h1>
            <p>
              As a frontend React developer with 4 years of experience, I have a
              passion for creating user-friendly and engaging web applications.
              With my Bachelor of Technology in Computer Science, I have a
              strong foundation in computer programming and software
              development, which I have leveraged to build dynamic and
              responsive websites and applications. My expertise in React,
              combined with my ability to communicate effectively with both
              technical and non-technical stakeholders, has allowed me to
              deliver projects on time and within budget. I am always seeking
              opportunities to further improve my skills and stay up to date
              with the latest technologies in the industry.
            </p>

            <div class="tab-titles">
              <p class="tab-links active-link" onclick="opentab('skills')">
                Skills
              </p>
              <p class="tab-links" onclick="opentab('exp')">
                Experience
              </p>
              <p class="tab-links" onclick="opentab('education')">
                Education
              </p>
            </div>
            <div class="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>React</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>Node</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>Javascript</span>
                  <br />
                  Designing web/app interfaces
                </li>
              </ul>
            </div>

            <div class="tab-contents" id="exp">
              <ul>
                <li>
                  <span>UI/ 2016</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>UI/2017</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>UI/20177</span>
                  <br />
                  Designing web/app interfaces
                </li>
              </ul>
            </div>

            <div class="tab-contents" id="education">
              <ul>
                <li>
                  <span>2016</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>2017</span>
                  <br />
                  Designing web/app interfaces
                </li>
                <li>
                  <span>2018</span>
                  <br />
                  Designing web/app interfaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
