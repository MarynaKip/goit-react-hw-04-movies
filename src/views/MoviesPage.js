import React, { Component } from "react";
import Axios from "axios";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
    url: this.props.match.url,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=${this.state.searchQuery}&include_adult=false`
      );
      this.setState({ movies: response.data.results });
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, movies: [] });
  };

  render() {
    const { movies, url } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} url={url} />
      </>
    );
  }
}

export default MoviesPage;
