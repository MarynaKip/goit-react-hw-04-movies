import React, { Component } from "react";
import Axios from "axios";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";
import axios from "axios";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
    url: this.props.match.url,
  };

  // componentDidMount() {
  //   const mySearchMovies = localStorage.getItem("My Movies");
  //   const parsedMyMovies = JSON.parse(mySearchMovies);

  //   if (mySearchMovies) {
  //     this.setState({
  //       movies: parsedMyMovies,
  //     });
  //   } else {
  //     this.setState({
  //       movies: [],
  //     });
  //   }
  // }

  // componentDidMount() {
  //   const searchMovies = localStorage.getItem("movies");
  //   const parsedMovies = JSON.parse(searchMovies);

  //   if (searchMovies) {
  //     this.setState({
  //       movies: parsedMovies,
  //     });
  //   } else {
  //     this.setState({
  //       movies: [],
  //     });
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=${this.state.searchQuery}&include_adult=false`
      );
      this.setState({ movies: response.data.results });
      //localStorage.setItem("movies", JSON.stringify(this.state.movies));
    }
  }

  onSubmitQuery = (query) => {
    this.setState({ searchQuery: query, movies: [] });
    // if (this.state.searchQuery) {
    //   axios
    //     .get(
    //       `https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=${this.state.searchQuery}&include_adult=false`
    //     )
    //     .then((response) => this.setState({ movies: response.data.results }));
    // }
  };

  // onChangeQuery = (query) => {
  //   this.setState({ searchQuery: query });
  // };

  render() {
    const { movies, url } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmitQuery} />
        <MoviesList movies={movies} url={url} query={this.state.searchQuery} />
      </>
    );
  }
}

export default MoviesPage;
