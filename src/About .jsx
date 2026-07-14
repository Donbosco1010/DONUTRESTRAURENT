import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-left">
          <h4>ABOUT OUR RESTAURANT</h4>

          <h1>
            We Cook With
            <br />
            Passion &
            <br />
            Fresh Ingredients
          </h1>

          <p>
            Welcome to DOnuT Restaurant. We serve delicious meals prepared
            with fresh vegetables, premium ingredients and authentic recipes.
            Every dish is made with love to give you the best dining
            experience.
          </p>

          <button>Read More</button>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700"
            alt="Restaurant Food"
          />
        </div>
      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <div className="icon">🍽</div>
          <h2>Quality Food</h2>
          <p>
            We prepare healthy and delicious meals using fresh ingredients.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">👨‍🍳</div>
          <h2>Expert Chefs</h2>
          <p>
            Our experienced chefs create unforgettable flavors every day.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🚚</div>
          <h2>Fast Delivery</h2>
          <p>
            Enjoy hot and fresh meals delivered quickly to your doorstep.
          </p>
        </div>

      </section>

      {/* Story */}

      <section className="story">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700"
            alt="Chef"
          />
        </div>

        <div className="story-content">
          <h4>OUR STORY</h4>

          <h1>Serving Happiness Since 2010</h1>

          <p>
            Our journey started with a simple dream—to serve delicious food
            made from the finest ingredients. Over the years, we have welcomed
            thousands of happy customers and continue to bring smiles through
            every meal we serve.
          </p>

          <button>Discover More</button>
        </div>

      </section>

    </div>
  );
};

export default About;
