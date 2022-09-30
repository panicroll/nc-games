import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualReview.css";
import { getIndividualReview, patchVotes } from "../utils/api";
import Votes from "./Votes";

function IndividualReview({review}) {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    getIndividualReview(review_id)
      .then(({ review }) => {
        setCurrentReview(review);
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
        <Votes review_id={currentReview.review_id} votes={currentReview.votes} />
        <p>Comments: {currentReview.comment_count}</p>
      </div>
    </div>
  );
}

export default IndividualReview;
