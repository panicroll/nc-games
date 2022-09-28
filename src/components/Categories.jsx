import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    axios
      .get("https://nc-games-collection.herokuapp.com/api/categories")
      .then(({ data }) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <div className="categories_wrapper">
      <button onClick={() => setIsVisible(!isVisible)} className="categories_button">
        Categories
      </button>
      {console.log(isVisible)}

      <div className={isVisible ? "category_list" : "category_list_hidden"}>
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/reviews/categories/${category.slug}`}
            >
              <p className="category">{category.slug}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
