import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css'

function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        axios.get('https://nc-games-collection.herokuapp.com/api/reviews')
        .then(({data}) => {
            setReviews(data.reviews)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        
        <ul className="reviews_list">
            {reviews.map((review) => {
                return (
                   <li className="review_card" key={review.review_id}>
                    <h2>{review.title}</h2>
                    <p>{review.category}</p>
                    <p>{review.owner}</p>
                    <p>{review.review_body}</p>
                    <p>Votes: {review.votes}</p>
                    <p>Comments: {review.comment_count}</p>
                </li>
                )
                
            })
            }

        </ul>
        
    )

}

export default Reviews;