import { Component } from "react";
import Axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4c4ccfa5cd696090db809b7747038046&language=en-US`
    );

    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map((role) => (
          <li key="role.cast_id">
            <img
              src={`https://image.tmdb.org/t/p/w780${role.profile_path}`}
              alt={role.character}
              width="100"
            ></img>
            <p>{role.name}</p>
            <p>Character: {role.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
