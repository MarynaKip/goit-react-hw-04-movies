import React, { Component } from "react";
import Axios from "axios";
import SearchBar from "../components/SearchBar";
import queryString from "query-string";
import MoviesList from "../components/MoviesList";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount(prevProps, prevState) {
    const query = this.getQueryFromProps(this.props);
    if (query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=${query}&include_adult=false`
      );
      this.setState({ movies: response.data.results });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const query = this.getQueryFromProps(this.props);

    if (prevQuery !== query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US&query=${this.state.searchQuery}&include_adult=false`
      );
      this.setState({ movies: response.data.results });
    }
  }

  getQueryFromProps = (props) => queryString.parse(props.location.search).query;

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, movies: [] });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
