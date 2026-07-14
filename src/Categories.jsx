import "./Categories.css";

import burger from "./assets/burger.jpg" ;
import pizza from "./assets/pizza.jpg";
import pasta from "./assets/pasta.jpg";
import salad from "./assets/salad.jpg";
import dessert from "./assets/dessert.jpg";
import drink from "./assets/drink.jpg";

const Categories = () => {
  return (
    <div className="categories">

      <div className="category-heading">

        <p>OUR MENU</p>

        <h1>Browse Food Categories</h1>

        <span>
          Discover delicious dishes prepared with fresh ingredients.
        </span>

      </div>

      <div className="category-grid">

        <div className="card">
          <img src={burger} alt="" />

          <div className="card-body">
            <h3>Burger</h3>
            <p>12 Items Available</p>
          </div>
        </div>

        <div className="card">
          <img src={pizza} alt="" />

          <div className="card-body">
            <h3>Pizza</h3>
            <p>18 Items Available</p>
          </div>
        </div>

        <div className="card">
          <img src={pasta} alt="" />

          <div className="card-body">
            <h3>Pasta</h3>
            <p>10 Items Available</p>
          </div>
        </div>

        <div className="card">
          <img src={salad} alt="" />

          <div className="card-body">
            <h3>Salads</h3>
            <p>8 Items Available</p>
          </div>
        </div>

        <div className="card">
          <img src={dessert} alt="" />

          <div className="card-body">
            <h3>Desserts</h3>
            <p>15 Items Available</p>
          </div>
        </div>

        <div className="card">
          <img src={drink} alt="" />

          <div className="card-body">
            <h3>Drinks</h3>
            <p>20 Items Available</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Categories;