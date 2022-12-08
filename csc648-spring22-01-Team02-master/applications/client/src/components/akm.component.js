import React, { Component } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class AungUser extends Component{
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
                                <h2>Aung Myat</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <img src="assets/img/portfolio/aung_icon.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content">
                                    <h3>Scrum Master</h3>
                                    <p className="fst-italic">
                                        I am a undergraduate student, majoring in Computer Science. This is my last year
                                        at SFSU. For this team 02, which is about offering healthy habits, my role is
                                        Scrum Master.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>06 January 1999</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Place:</strong> <span>California</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>San Francisco</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>amyat@mail.sfsu.edu</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        I transferred to SFSU from City College of San Francisco back in 2020. <br />
                                        After transferring, I have learned a lot of materials about Web Development,
                                        Database Management System as well as multiple programming languages.<br /><br />

                                        This semester is supposed to be my last semester at SFSU as a undergraduate student
                                        I believe this semester and this course will help me learn a lot of new things,
                                        hoping everything works out well
                                         <br />
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>

                <footer id="footer">
                    <div className="container">
                        <div className="social-links">
                            <a href="mailto:amyat@mail.sfsu.edu"><span>&#9993;</span></a>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}