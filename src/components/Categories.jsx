import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Categories.css";
import { getCategories } from "../utils/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        setCategories(categories);
      });
  }, []);

  return (
    <div className="categories_wrapper">
      <button onClick={() => setIsVisible(!isVisible)} className="categories_button">
        Categories
      </button>

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
