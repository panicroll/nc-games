import React, { useEffect, useState } from "react";
import { getComments } from "../utils/api";

function Comments({ review_id }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [review_id]);

  return (
    <div className="comments_wrapper">
      <button
        className="comments_button"
        onClick={() => setShowComments(!showComments)}
      >
        Comments ({comments.length})
      </button>

      <div className={showComments ? "comments_list" : "comments_list_hidden"}>
        {comments.map((comment) => {
          return (
            <li className="comment_card" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>By: {comment.author}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
