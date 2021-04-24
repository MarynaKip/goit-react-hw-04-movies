import React, { Component } from "react";
import styles from "../../styles/SearchBar.module.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar} onSubmit={this.handleSubmit}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default withRouter(SearchBar);
