import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  var globalVar = window.sessionStorage;
  var isSucceed = globalVar.getItem("isSucceed");

  const handleSubmit1 = () => {
    globalVar.removeItem("isSucceed");
    globalVar.removeItem("username");
    globalVar.removeItem("testMessage");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-container">
          <a className="navbar-brand">
            {" "}
            <img
              className="icon"
              src="assets/img/iPlate_icon.png"
              alt="iPlate-icon"
            />
          </a>
        </div>
        <div className="flex-center">
          <h3 className="navbar-quote text-center text-secondary">iPlate- A Food Recording App </h3>
          <i><h5 className="navbar-quote text-center text-muted">"Eat well, Live Well, Be well"</h5></i>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      {isSucceed && (
        <div>
          <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
          <header
            id="header"
            className="d-flex flex-column justify-content-center"
          >
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/home" className="nav-link scrollto">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/FoodRecord" className="nav-link scrollto">
                    <i className="bx bx-food-tag"></i> <span>Meal Record</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/viewHistory" className="nav-link scrollto">
                    <i className="bx bx-history"></i> <span>Meal History</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/about" className="nav-link scrollto">
                    <i className="bx bx-user"></i>{" "}
                    <span>About Team</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link to="/Contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar nav-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={handleSubmit1}
                    className="nav-link scrollto"
                  >
                    <i className="bx bx-log-out"></i> <span>LOGOUT</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
}

export default Navbar;
