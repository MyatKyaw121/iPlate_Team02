import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import * as ReactDOM from "react-dom";

function validate(name, email, subject, message) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }
  if (subject.length === 0) {
    errors.push("Name can't be empty");
  }
  if (message.length === 0) {
    errors.push("Name can't be empty");
  }
  if (email.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  return errors;
}

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = ReactDOM.findDOMNode(this._nameInput).value;
    const email = ReactDOM.findDOMNode(this._emailInput).value;
    const subject = ReactDOM.findDOMNode(this.subjectInput).value;
    const message = ReactDOM.findDOMNode(this.messageInput).value;

    const errors = validate(name, email, subject, message);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    alert("Message successfully sent!! Wait for our response");
    window.location.href = '/home';
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
      <Navbar />
      <section id="contact" class="contact">
      <div className="container" data-aos="fade-up">
      
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className="row mt-1">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
            <i className="bx bx-location-plus"></i>
              <h4>Location:</h4>
              <p>San Francisco State University, 1600 Holloway Ave, San Francisco, CA 94132</p>
            </div>

            <div className="email">
              <i className="bx bx-envelope"></i>
              <h4>Email:</h4>
              <p>info@iPlate.com</p>
            </div>

            <div className="phone">
              <i className="bx bx-phone"></i>
              <h4>Call:</h4>
              <p>+1 (111) 111-1111</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form onSubmit={this.handleSubmit}>
            {errors.map(error => (
              <p key={error}>Error: {error}</p>
            ))}
            <div class="row">
            <div class="col-md-6 form-group">
              <input ref={nameInput => (this._nameInput = nameInput)} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input ref={emailInput => (this._emailInput = emailInput)} type="email" name="email" className="form-control" id="email" placeholder="Enter your email address" required />
            </div>
            </div>
            <div className="form-group mt-3">
              <input ref={subjectInput => (this.subjectInput = subjectInput)} type="text" name="subject" className="form-control" id="subject" placeholder="Subject for email" required />
            </div>
            <div className="form-group mt-3">
              <textarea ref={messageInput => (this.messageInput = messageInput)} className="form-control" name="message" rows="5" placeholder="Message" required ></textarea>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary button" >
            Send Message
            </button>
            </div>
      </form>
      </div>
      </div>
      </div>
      </section>

      </div>
    );
  }
}