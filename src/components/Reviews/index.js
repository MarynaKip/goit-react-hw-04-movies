import { Component } from "react";
import Axios from "axios";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&page=1`
    );

    this.setState({ reviews: response.data.results });
    console.log(this.state.reviews);
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        {!reviews && <p>We don't have any reviews for this movie.</p>}
      </>
    );
  }
}

export default Reviews;
