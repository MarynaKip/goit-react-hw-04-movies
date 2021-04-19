import React, { Component } from "react";
import styles from "../../styles/SearchBar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
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

export default SearchBar;
