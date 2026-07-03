import React, { useEffect, useState } from "react";
import "./Api.css";


const Api = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <h1 className="title">🍽️ Meal Categories</h1>

      <div className="card-container">
        {categories.map((item) => (
          <div className="card" key={item.idCategory}>
            <img
              src={item.strCategoryThumb}
              alt={item.strCategory}
              className="card-image"
            />

            <div className="card-body">
              <h2>{item.strCategory}</h2>

              <p>{item.strCategoryDescription}</p>

              <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;