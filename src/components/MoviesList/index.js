import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(
        (movie) =>
          movie.title && (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${routes.movies}/${movie.id}`,

                  state: {
                    from: location,
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRouter(MoviesList);
