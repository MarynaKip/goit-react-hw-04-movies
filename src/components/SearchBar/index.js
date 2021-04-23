import React, { Component } from "react";
import styles from "../../styles/SearchBar.module.css";
import { NavLink, withRouter } from "react-router-dom";

class SearchBar extends Component {
  state = {
    query: "",
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.props.onSubmit(this.state.query);
  //   //this.setState({ query: "" });
  // };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        {/* <header className={styles.Searchbar} onSubmit={this.handleSubmit}> */}
        <form className={styles.SearchForm}>
          {/* <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button> */}
          <NavLink
            to={{
              pathname: `/movies?query=${query}`,

              state: {
                from: this.props.location,
                query,
              },
            }}
            className={styles.SearchForm_button}
          >
            <span className={styles.SearchForm_button_label}>Search</span>
          </NavLink>

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

export default withRouter(SearchBar);
