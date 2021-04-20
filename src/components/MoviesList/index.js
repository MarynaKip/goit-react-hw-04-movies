import { Link, withRouter } from "react-router-dom";

const MoviesList = ({ movies, url, location }) => {
  return (
    <ul>
      {movies.map(
        (movie) =>
          movie.title && (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,

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

export default withRouter(MoviesList);
