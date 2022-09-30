import React, { useEffect, useState } from "react";
import { patchVotes } from "../utils/api";

function Votes({ review_id, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [voteCount, setVoteCount] = useState(0);
  const [alreadyVoted, setAlreadyVoted] = useState("");
  const [votingError, setVotingError] = useState(false);

  useEffect(() => {
    setCurrentVotes(votes);
  }, [votes]);

  function upvote() {
    if (voteCount < 1) {
      setAlreadyVoted("");
      setCurrentVotes((currentVotes) => (currentVotes += 1));
      patchVotes(review_id, 1)
        .then(() => {
          setVoteCount((voteCount) => (voteCount += 1));
        })
        .catch((err) => {
          setCurrentVotes((currentVotes) => (currentVotes -= 1));
          setVotingError(true);
        });
    } else {
      setAlreadyVoted("You have already voted on this review.");
    }
  }

  function downvote() {
    if (voteCount > -1) {
      setAlreadyVoted("");
      setCurrentVotes((currentVotes) => (currentVotes -= 1));
      patchVotes(review_id, -1)
        .then(() => {
          setVoteCount((voteCount) => (voteCount -= 1));
        })
        .catch((err) => {
          setCurrentVotes((currentVotes) => (currentVotes += 1));
          setVotingError(true);
        });
    } else {
      setAlreadyVoted("You have already voted on this review.");
    }
  }

  return (
    <div className="votes_wrapper">
      <div className="votes">
        <button onClick={() => upvote()} className="upvote_button">
          Upvote
        </button>
        <p>Votes: {currentVotes}</p>
        <button onClick={() => downvote()} className="downvote_button">
          Downvote
        </button>
      </div>
      <div className="error_message">{alreadyVoted}</div>
      <div className="error_message">
        {votingError ? <p>Sorry, there was a voting error.</p> : null}
      </div>
    </div>
  );
}

export default Votes;
