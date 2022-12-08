import React, { Component } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class PrathibaUser extends Component{
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
           <h2>Prathiba Ramesh</h2>
         </div>
    
         <div className="row">
           <div className="col-lg-4">
             <img src="assets/img/portfolio/prathiba_icon.jpg" className="img-fluid" alt="" />
           </div>
           <div className="col-lg-8 pt-4 pt-lg-0 content">
             <h3>Team Leader</h3>
             <p className="fst-italic">
         This is my first semester in San Francisco State University and I am pursuing my Master's in Computer Science. 
         I am happy to be a part of Section 01 Team 02 for CSC 648/848 and develop a custom app that each individual should 
         have in order to indulge in a healthy lifestyle.
             </p>
             <div className="row">
               <div className="col-lg-6">
                 <ul>
                   <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 October 1995</span></li>
           <li><i className="bi bi-chevron-right"></i> <strong>Place:</strong> <span>Chennai, India</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Stack:</strong> <span>React | JavaScript | MongoDB</span></li>
                 </ul>
               </div>
               <div className="col-lg-6">
                 <ul>
                   <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Master</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pramesh@sfsu.com</span></li>
                 </ul>
               </div>
             </div>
             <p>
        I completed my Undergrad in BE, Electronics and Instrumentation and have started working at the Tata consultancy Services Limited since 2017
        as a Software Developer. <br />
        To date, I have worked on two projects, the first of which involved data migration and upgrading applications to the 
        latest framework. For this company, I had to refurbish over 30 web based applications into the latest .Net framework and 
        rewrite the classic ASP code into MVC framework with the use of C#, HTML, CSS, Javascript and JQuery. <br /> <br />
        The next project I worked on was a windows application used by the retail sector of corporate buying department to 
        maintain the social monitoring processes and freight management systems. Lastly, I worked on supporting the market-leading 
        retail firms such as JCPenney and Aldi Sued, wherein I was responsible for solving all the problems faced by the end-user.
             </p>
           </div>
         </div>
    
       </div>
     </section>
    
    </main>
    
    <footer id="footer">
     <div className="container">
       <div className="social-links">         
         <a href="mailto:pramesh@sfsu.edu" className="instagram"><i className="bx bx-envelope"></i></a>
         <a href="https://github.com/PrathibaRamesh" className="facebook"><i className="bx bxl-github"></i></a>
         <a href="https://www.linkedin.com/in/prathiba-r-b19491157/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
       </div>
       </div>
       </footer>
     </div>
  )
}
}

