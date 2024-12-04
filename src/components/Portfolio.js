import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div class="container">
        <h1 class="sub-title">My Work</h1>
        <div class="work-list">
          <div class="work">
            <img src="images/work-1.png" alt="" />
            <div class="layer">
              <h3>Social Media App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div class="work">
            <img src="images/work-2.png" alt="" />
            <div class="layer">
              <h3>Music App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div class="work">
            <img src="images/work-3.png" alt="" />
            <div class="layer">
              <h3>Online shop App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" class="btn">
          See more
        </a>
      </div>
    </div>
  );
};
export default Portfolio;
