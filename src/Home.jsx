import React from "react";
import "./Home.css";
import food from "./assets/HealthyLunch.jpg"

const Home = () => {
  return (
    
    <section className="hero">
<div style={{display:"flex"}} >
      <div className="hero-left">
        <p className="subtitle">WELCOME TO OUR RESTAURANTS</p>

        <h1>
          Gourmet Cuisine From <br />
          Fresh Local Ingredients
        </h1>

        <p className="description">
          Enjoy your favorite dishes in our restaurants!
        </p>

        <div className="buttons">

          <button className="book-btn">
            Book a Table
          </button>

          <div className="phone">
            📞 +91 9605701543
          </div>

        </div>
      </div>

      <div className="hero-right">
        <img src={food} alt="Food" />
       
      </div>
 
  </div>
   <p className="m">powered by meesha</p>
    </section>
   
    
  );
};

export default Home;