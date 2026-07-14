import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <h4>CONTACT US</h4>
        <h1>We'd Love To Hear From You</h1>
        <p>
          Have questions, suggestions, or want to book a table?
          Get in touch with us and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <div className="icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>kakkanad Food Street, kochi, kerala</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>donutrestaurant@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">🕒</div>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sun : 9:00 AM - 10:00 PM</p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write Your Message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;