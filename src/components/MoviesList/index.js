import { Link, withRouter } from "react-router-dom";

const MoviesList = ({ movies, url, query, location }) => {
  return (
    <ul>
      {movies.map(
        (movie) =>
          movie.title && (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}?query=${query}`,

                  state: {
                    from: location,
                    query,
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

export default withRouter(MoviesList);
