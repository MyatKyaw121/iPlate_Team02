import React, { Component } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class ChristopherUser extends Component{
render() {
    return (
        <div>
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
        
         <nav id="navbar" className="navbar nav-menu">
           <ul>
             <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-left-arrow"></i> <span>Back</span></Link></li>
           </ul>
         </nav>
        
        </header>
        
        <main id="main">
        
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Christopher Ling</h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/portfolio/christopher_icon.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Front-end Support</h3>
            <p className="fst-italic">
				I'm part of the CSC-648 section 01 team 02 web development collaboration
				that is building an app to promote healthy habits.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 September 1992</span></li>
				  <li><i className="bi bi-chevron-right"></i> <strong>Place:</strong> <span>California</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Oakland</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cling1@mail.sfsu.edu</span></li>
                </ul>
              </div>
            </div>
            <p>
			I've been in and out of Commuunity College from College of San Mateo, Kinata, and Skyline before transfering to
			SFSU in Fall 2018.<br />
			This semester fulfils my last core CSC requirements; if everything goes well,
				I just need to finish my senior presentation and complete 4 more CSC upper-division
				Electives to finish my BS in Computer Science.<br /><br />
			I wouldn't say I'm strong in web development, but I hope to learn and refresh myself on these 
			methods and technology along with my Team. <br />
            </p>
          </div>
        </div>

      </div>
    </section>

  </main> 
</div>
      )
    }
}