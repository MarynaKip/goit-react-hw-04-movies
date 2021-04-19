import React, { Component } from "react";
import Axios from "axios";
import MoviesList from "../components/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
    url: "/movies",
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=4c4ccfa5cd696090db809b7747038046"
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    const { url, movies } = this.state;
    return (
      <>
        <h1>Trending Today</h1>
        <MoviesList movies={movies} url={url} />
      </>
    );
  }
}

export default HomePage;
