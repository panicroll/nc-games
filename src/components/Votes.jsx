import React, { useEffect, useState } from "react";
import { patchVotes } from "../utils/api";

function Votes({ review_id, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [votingError, setVotingError] = useState("");

  useEffect(() => {
    setCurrentVotes(votes);
  }, [votes]);

  function updateVote(num) {
    if (!hasVoted) {
      setCurrentVotes((currentVotes) => (currentVotes += num));
      patchVotes(review_id, num).then(() => {
        setHasVoted(true);
      });
    } else {
      setVotingError("You have already voted on this review.");
    }
  }

  return (
    <div className="votes_wrapper">
      <div className="votes">
        <button onClick={() => updateVote(1)} className="upvote_button">
          Upvote
        </button>
        <p>Votes: {currentVotes}</p>
        <button onClick={() => updateVote(-1)} className="downvote_button">
          Downvote
        </button>
      </div>
      <div className="error_message">{votingError}</div>
    </div>
  );
}

export default Votes;
