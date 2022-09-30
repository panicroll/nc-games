import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-collection.herokuapp.com/api",
});

export function getReviews() {
  return gamesApi
    .get("/reviews")
    .then(({ data }) => {
      return data;
    });
}

export function getReviewsByCategory(category) {
    return gamesApi
      .get(`/reviews?category=${category}`)
      .then(({ data }) => {
        return data;
      });
  }

export function getCategories() {
    return gamesApi
    .get("/categories")
    .then(({data}) => {
        return data;
    });
}

export function getIndividualReview(review_id) {
    return gamesApi
    .get(`/reviews/${review_id}`)
    .then(({data}) => {
        return data;
    });
}

export function patchVotes(review_id, votes) {
    return gamesApi
    .patch(`reviews/${review_id}`, {inc_votes: votes})
    .then(({data}) => {
        return data.review.votes;
    })
}

export function getComments(review_id) {
    return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({data}) => {
        return data;
    })
}