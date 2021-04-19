import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import AppBar from "./components/AppBar";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movieDetails-page" */
  )
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Downloading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/movies" component={MoviesPage} />

        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
