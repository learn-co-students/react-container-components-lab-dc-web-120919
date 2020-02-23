// Code MovieReviews Here
import React from 'react'

function MovieReviews(props) {
    return (
        <div className="review-list">
            {/* {console.log(props.reviews)} */}
            {props.reviews.map(review => { return(
                <div className="review">
                    <h3>{review.headline}</h3>
                    <h4>{review.byline}: {review.critics_pick} out of 10 </h4>
                    <h6> {review.summary_short} </h6>
                    <a href={`${review.link.url}`}> {review.link.suggested_link_text}</a>
                </div>
            )})}
        </div>
    )
}

export default MovieReviews
