import routes from "../../routes";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <header className="AppBar">
      <nav className="nav">
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink-active"
        >
          Home
        </NavLink>
      </nav>
      <nav className="nav">
        <NavLink
          exact
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink-active"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
