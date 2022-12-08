import React, { Component } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class MTKComponent extends Component{
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
                                <h2>Myat Kyaw</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="assets/img/portfolio/mtk_icon.JPG" className="img-fluid" alt=""/>
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content">
                                    <h3>GitHub Master</h3>
                                    <p className="fst-italic">
                                        This is my final semester here at SFSU and I am excited to collaborate with my teammates
                                        ( Section 01 Team 02 for CSC 648 ) to participate in developing this food recording app :)
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 April 1996</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Place:</strong> <span>Myanmar</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Yangon</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelors</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mkyaw@sfsu.com</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        My name is Myat Kyaw. I transferred from City college of San Francisco
                                        to SFSU back in 2020, and this is my final semester here at SFSU. At the moment,my programming career goal would be
                                        to be a Web Developer.<br/>
                                    This is my second Web Development className, and I am still kind of new to the field.
                                        <br/>
                                     I am excited to collaborate and work with other students on this major web development project.
                                        <br/>
                                    </p>
            </div>
    </div>

    </div>
    </section>

    </main>


    <footer id="footer">
    <div className="container">
    <div className="social-links">
    <a href="mailto:mkyaw@mail.sfsu.edu"><span>&#9993;</span></a>
    <a href="https://www.linkedin.com/in/myat-kyaw-0a82511b5/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
    </div>
    </div>
    </footer>
 </div>
        )
    }
}

