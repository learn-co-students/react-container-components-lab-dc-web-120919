import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state ={
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearch = (event) => {
        // console.log(event.target.value)
        this.setState({ searchTerm: event.target.value})
    }

    handleSubmit =(event) => {
        event.preventDefault()
        // console.log(this.state.searchTerm)
        let term = this.state.searchTerm
        fetch(URL + `&query=${term}`).then(r => r.json()).then(reviews => this.setState({ reviews: reviews.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleSearch(event)} value={this.state.searchTerm}></input>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


//https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your-api-key>&query=<search-term>