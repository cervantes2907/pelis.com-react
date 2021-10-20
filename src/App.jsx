import styles from "./App.module.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import { LandingPage } from "./pages/LandingPage";
import { MoviesDetails } from "./pages/MoviesDetails";

export const App = () =>{
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Pelis.Com</h1>
        </Link>
      </header>
      <main>
      <Switch>
          <Route exact path="/movies/:movieId" >
            <MoviesDetails />
            </Route>
          <Route path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
  )
};

