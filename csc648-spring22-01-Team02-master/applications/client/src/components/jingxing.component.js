import React, { Component } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class Jingxing extends Component{
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
           <h2>Jingxing Luo</h2>
         </div>
    
         <div className="row">
           <div className="col-lg-4">
             <img src="assets/img/portfolio/Jingxing_icon.jpg" className="img-fluid" alt="" />
           </div>
           <div className="col-lg-8 pt-4 pt-lg-0 content">
             <h3>Back-end Leader</h3>
             <p className="fst-italic">
             This is my final semester in San Francisco State University. This is the first time 
				I will develop a website via server side. I am excited to be a back-end leader to suppport
				my teammates.
             </p>
             <div className="row">
               <div className="col-lg-6">
                 <ul>
                   <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>12 December 1996</span></li>
           <li><i className="bi bi-chevron-right"></i> <strong>Place:</strong> <span>Guangzhou, China</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Stack:</strong> <span>MongoDB | Node | React</span></li>
                 </ul>
               </div>
               <div className="col-lg-6">
                 <ul>
                   <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                   <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jluo17@mail.sfsu.edu</span></li>
                 </ul>
               </div>
             </div>
             <p>
             I transferred from Foothill College to SFSU in Fall 2020. After taking some CS classes at SFSU,
			I learned many new and useful things including how to make the interactions between front-end and back-end.
			For my future career, I hope I will be developing a video game. 
             </p>
           </div>
         </div>
       </div>
     </section>
    </main>
    
    <footer id="footer">
     <div className="container">
       <div className="social-links">         
         
       </div>
       </div>
       </footer>
     </div>
  )
}
}

