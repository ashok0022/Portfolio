import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-sharp fa-regular fa-paper-plane"></i>
              makhija.ashok22@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-square-phone"></i> +91-7987182040
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a href="images/my-cv.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
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
              <button type="submit" className="btn btn2" id="submitclick">
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright Ashok. <i className="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
  );
};
export default Contact;
