import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default class Home extends Component {
  render() {

    var globalVar = window.sessionStorage;
    var isSucceed = globalVar.getItem("isSucceed");
    var loggedname = globalVar.getItem("username");
    loggedname = JSON.parse(loggedname);
    if(!globalVar.isSucceed)
      {
        window.location.href = '/';
      }
  
    return (
      <div>
        <Navbar />
        
        <section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                        <div className="carousel-background">
                        </div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>iPlate, {loggedname} </span></h2>
                                <p className="animate__animated animate__fadeInUp">Your Meal Recording App!! <br />Track the foods you love and live healthy!!</p>
                                
                                <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100" >
                                    <Swiper pagination spaceBetween={20} slidesPerView={3} onSlideChange={() => console.log("slide change")} >
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                            <img src="assets/img/slide/Home_TrackFood.png" className="testimonial-img" alt="" />
                                            <br />
                                            <br />
                                            <p>
                                            Learn about the foods you’re eating and keep your calories within your daily budget.
                                            </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                              <img src="assets/img/slide/Home_chart.png" className="testimonial-img" alt="" />
                                              <br />
                                              <br />
                                              <p>
                                              Log your meals and track all <br /> your macro and micronutrients.
                                              </p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                              <img src="assets/img/slide/Home-Data.png" className="testimonial-img" alt="" />
                                              <br />
                                              <br />
                                              <p>
                                              Be confident that the food you log has the correct nutrition data.
                                              </p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <br />
                                <Link to="/FoodRecord" className="btn-get-started animate__animated animate__fadeInUp scrollto">Get Started</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      </div>
    );
  }
}
