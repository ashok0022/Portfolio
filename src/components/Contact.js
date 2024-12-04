import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div class="container">
        <div class="row">
          <div class="contact-left">
            <h1 class="sub-title">Contact Me</h1>
            <p>
              <i class="fa-sharp fa-regular fa-paper-plane"></i>
              makhija.ashok22@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-square-phone"></i> +91-7987182040
            </p>
            <div class="social-icons">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a href="images/my-cv.pdf" download class="btn btn2">
              Download CV
            </a>
          </div>
          <div class="contact-right">
            <form id="form" name="form">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" class="btn btn2" id="submitclick">
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          Copyright Ashok. <i class="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
  );
};
export default Contact;
