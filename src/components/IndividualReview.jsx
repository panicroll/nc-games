import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualReview.css";
import { getIndividualReview, patchVotes } from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";

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
    <div className="review_page">
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
      </div>
    </div>
    <Comments review_id={currentReview.review_id}/>
    </div>
  );
}

export default IndividualReview;
