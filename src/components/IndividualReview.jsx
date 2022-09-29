import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./IndividualReview.css";

function IndividualReview() {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    axios
      .get(`https://nc-games-collection.herokuapp.com/api/reviews/${review_id}`)
      .then(({ data }) => {
        setCurrentReview(data.review);
      });
  }, [review_id]);

  return (
    <div className="full_review">
      <h2>{currentReview.title}</h2>
      <p>By: {currentReview.owner}</p>

      <img className="review_img" src={currentReview.review_img_url} />

      <div className="review_body">
        <p>Designer: {currentReview.designer}</p>
        <p>Category: {currentReview.category}</p>
        <p>{currentReview.review_body}</p>
      </div>

      <div className="review_interaction">
        <p>Votes: {currentReview.votes}</p>
        <p>Comments: {currentReview.comment_count}</p>
      </div>
    </div>
  );
}

export default IndividualReview;
