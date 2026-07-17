import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zg8qhqi",
        "template_ahizfne",
        form.current,
        "EfwlOOC09uqXSNC0v"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h4>CONTACT US</h4>
        <h1>We'd Love To Hear From You</h1>
        <p>
          Have questions, suggestions, or want to book a table?
          Get in touch with us and we'll respond as soon as possible.
        </p>
      </section>

      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <div className="icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>Kakkanad Food Street, Kochi, Kerala</p>
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

          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write Your Message..."
              required
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