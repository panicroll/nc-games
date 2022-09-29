import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {getReviews, getReviewsByCategory} from "../utils/api";
import "./Reviews.css";
import Categories from "./Categories";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    if (category) {
      getReviewsByCategory(category)
        .then(({ reviews }) => {
          setReviews(reviews);
          setLoading(false);
        });
    } else {
      getReviews()
        .then(({ reviews }) => {
          setReviews(reviews);
          setLoading(false);
        });
    }
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="reviews_list">
      <Categories />
      {reviews.map((review) => {
        return (
          <li className="review_card" key={review.review_id}>
            <Link to={`/reviews/${review.review_id}`}>
              <h2>{review.title}</h2>
            </Link>
            <p>By: {review.owner}</p>
            <p>Category: {review.category}</p>
            <p>Votes: {review.votes}</p>
            <p>Comments: {review.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;
