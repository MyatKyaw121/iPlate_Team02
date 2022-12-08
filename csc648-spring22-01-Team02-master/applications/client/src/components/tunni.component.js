import React, { Component } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

export default class TunniUser extends Component {
  render() {
    return (
      <div>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="bi bi-list mobile-nav-toggle"></i>
        </button>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li>
                <Link to="/about" className="nav-link scrollto">
                  <i className="bx bx-left-arrow"></i> <span>Back</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main">
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>Tun-Ni Chiang</h2>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <img
                    src="assets/img/portfolio/tunni_icon.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                  <h3>Front-End Lead</h3>
                  <p className="fst-italic">
                    This is my second to the last semester at SFSU! Wish our
                    application could help some people who are struggling in
                    building a healthy eating habits or help them to rebuild
                    their relationship with foods :)
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Birthday:</strong>{" "}
                          <span>17 January 2000</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Place:</strong> <span>Taiwan</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong> <span>Taipei</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Age:</strong> <span>22</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Degree Pursuing:</strong>{" "}
                          <span>Bachelor</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right"></i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>tchiang3@mail.sfsu.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    I transferred from Bellevue College in Washington State in
                    2020. After coming here, I got some chances to learn Web Dev
                    related skills. After learning them, I realized my interest
                    for future career is more in this area so wanting to explore
                    and practice more! <br />
                    In Spring 2022, I will be joining Food Haven as their SDE
                    Intern to support them on the second version of their web
                    and mobile app interface. It's going to be my first
                    internship experience and I'm looking forward to improve my
                    skills! <br /> <br />
                    I'm still pretty new in web app development and am excited
                    to work with others on building this custom food recording
                    app! Wish to provide some helpful tool to help our society!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="container">
            <div className="social-links">
              <a href="mailto:tchiang3@mail.sfsu.edu" className="instagram">
                <i className="bx bx-envelope"></i>
              </a>
              <a
                href="https://github.com/tunni-chiang"
                target="_blank"
                rel="noreferrer"
                className="facebook"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tunni-chiang-9171631a3"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
