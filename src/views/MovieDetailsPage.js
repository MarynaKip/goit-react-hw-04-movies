import React, { Component, Suspense, lazy } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Axios from "axios";
import styles from "../styles/MovieDetailsPage.module.css";
import routes from "../routes";

const Cast = lazy(() =>
  import("../components/Cast" /* webpackChunkName: "cast-page" */)
);

const Reviews = lazy(() =>
  import("../components/Reviews" /* webpackChunkName: "reviews-page" */)
);

class MovieDetailsPage extends Component {
  state = {
    posterPath: "",
    title: "",
    releaseDate: "",
    votes: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US`
    );
    this.setState({
      posterPath: response.data.poster_path,
      title: response.data.original_title,
      releaseDate: response.data.release_date,
      votes: response.data.vote_average,
      overview: response.data.overview,
      genres: response.data.genres,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      genres,
      posterPath,
      title,
      releaseDate,
      votes,
      overview,
    } = this.state;

    const { match } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          <span role="img" aria-label="U+2B05 emoji">
            ⬅
          </span>
          Go Back
        </button>
        <div className={styles.Container}>
          <img
            src={`https://image.tmdb.org/t/p/w780${posterPath}`}
            alt={title}
            width="280"
          ></img>
          <div className={styles.Descr}>
            <h1>
              {title} ({releaseDate})
            </h1>
            <p>User Score: {votes * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>

            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2>Additional information:</h2>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: this.props.location.state,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${match.url}/reviews`,
                state: this.props.location.state,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <Suspense fallback={<h1>Downloading...</h1>}>
          <Switch>
            <Route
              path="/movies/:movieId/cast"
              component={Cast}
              onClick={this.handleGoBack}
            />
            <Route
              path={`${match.path}/reviews`}
              component={Reviews}
              onClick={this.handleGoBack}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
