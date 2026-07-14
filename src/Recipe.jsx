  import React from "react";
import "./Recipe.css";
import chicken from './assets/chicken65.jpg';

const Recipe = () => {
  return (
    <div className="recipe-page">

      {/* Hero Section */}
      <div className="recipe-hero">
        <h4>OUR SPECIAL RECIPES</h4>
        <h1>Delicious Meals Made With Love</h1>
        <p>
          Discover mouth-watering recipes prepared with fresh ingredients and
          authentic flavors.
        </p>

        <button>Explore Recipes</button>
      </div>

      {/* Recipe Cards */}
      <div className="recipe-container">

        <div className="recipe-card">
          <img
            src={chicken}
            alt=""/>

          <div className="recipe-content">
            <h2>Chicken 65</h2>

            <p>
              A delicious creamy chicken curry cooked with aromatic spices and
              herbs.
            </p>

            <div className="recipe-info">
              <span>🍽 Indian</span>
              <span>⏱ 30 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

        <div className="recipe-card">
          <img
            src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
            alt=""
          />

          <div className="recipe-content">
            <h2>Grilled Salmon</h2>

            <p>
              Fresh grilled salmon served with vegetables and lemon butter
              sauce.
            </p>

            <div className="recipe-info">
              <span>🐟 Seafood</span>
              <span>⏱ 25 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

        <div className="recipe-card">
          <img
            src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
            alt=""
          />

          <div className="recipe-content">
            <h2>Italian Pasta</h2>

            <p>
              Creamy pasta tossed with vegetables, herbs and rich parmesan
              cheese.
            </p>

            <div className="recipe-info">
              <span>🍝 Italian</span>
              <span>⏱ 20 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

        <div className="recipe-card">
          <img
            src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
            alt=""
          />

          <div className="recipe-content">
            <h2>Beef Steak</h2>

            <p>
              Juicy grilled steak served with mashed potatoes and fresh salad.
            </p>

            <div className="recipe-info">
              <span>🥩 American</span>
              <span>⏱ 35 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

        <div className="recipe-card">
          <img
            src="https://www.themealdb.com/images/media/meals/1548772327.jpg"
            alt=""
          />

          <div className="recipe-content">
            <h2>Vegetable Pizza</h2>

            <p>
              Crispy pizza loaded with fresh vegetables and mozzarella cheese.
            </p>

            <div className="recipe-info">
              <span>🍕 Italian</span>
              <span>⏱ 40 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

        <div className="recipe-card">
          <img
            src="https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg"
            alt=""
          />

          <div className="recipe-content">
            <h2>Chocolate Cake</h2>

            <p>
              Soft chocolate cake topped with creamy chocolate frosting.
            </p>

            <div className="recipe-info">
              <span>🍰 Dessert</span>
              <span>⏱ 50 mins</span>
            </div>

            <button>View Recipe</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recipe;